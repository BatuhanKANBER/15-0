// ── State ─────────────────────────────────────────────────────────
const STATE = {
  formation:     null,
  maxSlots:      null,
  xi:            null,
  pendingPlayer: null,
  phase:         "start",   // start | loading | awaiting | selected
  currentSeason: null,
  currentTeam:   null,
  allPlayers:    [],
  skipChances:   3,
  selectedNames: new Set(),
  usedKeys:      [],
};

const ALL_POSITIONS = ["GK","CB","LB","RB","MID","LW","RW","ST"];

function makeEmptyXi(slots) {
  const xi = {};
  ALL_POSITIONS.forEach(pos => { xi[pos] = Array(slots[pos] || 0).fill(null); });
  return xi;
}

// ── Boot ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Formation screen
  let chosenFormation = "4-3-3";
  buildFormationScreen(chosenFormation, name => { chosenFormation = name; });
  document.getElementById("btn-confirm-formation").disabled = false;
  document.getElementById("btn-confirm-formation")._getChosen = () => chosenFormation;

  document.getElementById("btn-confirm-formation").addEventListener("click", onConfirmFormation);
  document.getElementById("btn-roll").addEventListener("click", onRoll);
  document.getElementById("btn-skip").addEventListener("click", onSkip);
  document.getElementById("btn-play-again").addEventListener("click", onPlayAgain);

});

// ── Formation confirm ─────────────────────────────────────────────
function onConfirmFormation() {
  const name = document.getElementById("btn-confirm-formation")._getChosen();
  STATE.formation = name;
  const f = FORMATIONS[name];
  STATE.maxSlots = { ...FORMATIONS[name] };
  STATE.xi = makeEmptyXi(STATE.maxSlots);

  document.getElementById("formation-badge").textContent = name;
  document.getElementById("squad-header").classList.add("hidden");
  document.getElementById("player-list").classList.add("hidden");
  document.getElementById("squad-placeholder").classList.remove("hidden");

  renderFormation(STATE.xi, STATE.maxSlots, null);
  updateProgressSlots(STATE.xi, STATE.maxSlots, null);
  updateRollZone("start", null);
  showScreen("screen-game");
}

// ── Roll ──────────────────────────────────────────────────────────
async function onRoll() {
  if (STATE.phase === "loading") return;
  updateSkipBtn();

  if (STATE.phase === "selected") {
    // Seçimi iptal et
    STATE.pendingPlayer = null;
    STATE.phase = "awaiting";
    renderPlayerList();
    renderFormation(STATE.xi, STATE.maxSlots, null);
    updateProgressSlots(STATE.xi, STATE.maxSlots, null);
    updateRollZone("awaiting", null);
    return;
  }

  await loadNextSquad();
}

// ── Slot click — oyuncuyu belirli slota yerleştir ─────────────────
async function onSlotClick(pos, idx) {
  if (!STATE.pendingPlayer || STATE.pendingPlayer.pos !== pos) return;
  if (STATE.xi[pos][idx] !== null) return;

  const p = STATE.pendingPlayer;
  STATE.xi[pos][idx] = p;
  STATE.selectedNames.add(normName(p.name));
  STATE.pendingPlayer = null;
  STATE.phase = "awaiting";

  renderFormation(STATE.xi, STATE.maxSlots, null, { pos: p.pos, idx });
  updateProgressSlots(STATE.xi, STATE.maxSlots, null);

  const total  = Object.values(STATE.xi).flat().filter(Boolean).length;
  const needed = Object.values(STATE.maxSlots).reduce((a, b) => a + b, 0);
  if (total >= needed) {
    const all = Object.values(STATE.xi).flat().filter(Boolean);
    runSimulation(simulateUCL(all), all);
    return;
  }

  await loadNextSquad();
}

// ── Load squad ────────────────────────────────────────────────────
async function loadNextSquad() {
  STATE.phase = "loading";
  updateRollZone("loading", null);

  try {
    let data = getDemoSeasonTeam(STATE.usedKeys);
    if (!data) {
      STATE.usedKeys = [];
      data = getDemoSeasonTeam([]);
    }
    if (!data) { STATE.phase = "start"; updateRollZone("start", null); return; }
    STATE.usedKeys.push(data.key);
    applySquad(data);
  } catch(e) {
    showToast("Hata: " + e.message, "error");
    STATE.phase = "awaiting";
    updateRollZone("awaiting", null);
  }
}

function applySquad(data) {
  STATE.currentSeason = data.season;
  STATE.currentTeam   = data.team;
  STATE.allPlayers    = enrichSquad(data.players);

  const remaining = getRemainingPositions();
  const hasValid  = remaining.some(pos =>
    STATE.allPlayers.some(p => p.pos === pos && !STATE.selectedNames.has(normName(p.name)))
  );
  if (!hasValid) {
    setTimeout(() => loadNextSquad(), 300);
    return;
  }

  document.getElementById("current-season").textContent =
    data.season + "-" + (parseInt(data.season) + 1).toString().slice(-2);
  document.getElementById("current-team").textContent = data.team;

  const hdr = document.getElementById("squad-header");
  hdr.classList.remove("hidden");
  hdr.style.animation = "none";
  hdr.offsetHeight; // reflow
  hdr.style.animation = "squad-in 0.32s cubic-bezier(.22,.68,0,1.3) both";

  document.getElementById("squad-placeholder").classList.add("hidden");
  document.getElementById("player-list").classList.remove("hidden");

  STATE.phase         = "awaiting";
  STATE.pendingPlayer = null;

  renderFormation(STATE.xi, STATE.maxSlots, null);
  updateProgressSlots(STATE.xi, STATE.maxSlots, null);
  updateRollZone("awaiting", null);
  updateSkipBtn();
  renderPlayerList();
}

// ── Player list (all positions, single unified list) ──────────────
function renderPlayerList() {
  const list = document.getElementById("player-list");
  if (!list) return;

  // Seçilebilir oyuncular önce (OVR'a göre), devre dışı olanlar sonda
  const players = [...STATE.allPlayers].sort((a, b) => {
    const aOff = STATE.selectedNames.has(normName(a.name)) || !STATE.xi[a.pos].includes(null);
    const bOff = STATE.selectedNames.has(normName(b.name)) || !STATE.xi[b.pos].includes(null);
    if (aOff !== bOff) return aOff ? 1 : -1;
    return b.overall - a.overall;
  });

  if (!players.length) {
    list.innerHTML = `<p class="empty-tab">Kadro bulunamadı</p>`;
    return;
  }

  let html = '';
  let dividerAdded = false;

  players.forEach(p => {
    const isSelected  = STATE.pendingPlayer?.id === p.id;
    const isConfirmed = STATE.selectedNames.has(normName(p.name));
    const posFull     = !STATE.xi[p.pos].includes(null);
    const isDisabled  = !isSelected && (posFull || isConfirmed);

    if (isDisabled && !dividerAdded) {
      html += '<div class="player-list-divider"></div>';
      dividerAdded = true;
    }

    let card = renderPlayerCard(p, isSelected, isDisabled);
    if (isConfirmed) card = card.replace('class="player-card disabled"', 'class="player-card confirmed"');
    html += card;
  });

  list.innerHTML = html;

  // Stagger-in animation for each card
  list.querySelectorAll(".player-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 22}ms`;
    card.classList.add("anim");
  });

  list.querySelectorAll(".player-card:not(.disabled):not(.confirmed)").forEach(card =>
    card.addEventListener("click", () => onPlayerClick(parseInt(card.dataset.id))));
}

// ── Player click ──────────────────────────────────────────────────
function onPlayerClick(id) {
  if (STATE.phase !== "awaiting" && STATE.phase !== "selected") return;
  const player = STATE.allPlayers.find(p => p.id === id);
  if (!player) return;

  if (STATE.selectedNames.has(normName(player.name))) {
    showToast(`${player.name} zaten takımında!`, "error"); return;
  }
  if (!STATE.xi[player.pos].includes(null)) {
    showToast(`${posLabel(player.pos)} mevkisi dolu!`, "error"); return;
  }

  if (STATE.pendingPlayer?.id === id) {
    STATE.pendingPlayer = null;
    STATE.phase = "awaiting";
  } else {
    STATE.pendingPlayer = player;
    STATE.phase = "selected";
  }

  renderPlayerList();
  renderFormation(STATE.xi, STATE.maxSlots, STATE.pendingPlayer);
  updateProgressSlots(STATE.xi, STATE.maxSlots, STATE.pendingPlayer);
  updateRollZone(STATE.phase, STATE.pendingPlayer);
}

// ── Skip ──────────────────────────────────────────────────────────
async function onSkip() {
  if (STATE.skipChances <= 0) { showToast("Kadro değiştirme hakkın kalmadı!", "error"); return; }
  if (STATE.phase !== "awaiting" && STATE.phase !== "selected") return;
  STATE.skipChances--;
  STATE.pendingPlayer = null;
  updateSkipBtn();
  await loadNextSquad();
}

function updateSkipBtn() {
  const btn   = document.getElementById("btn-skip");
  const count = document.getElementById("skip-count");
  if (!btn) return;
  count.textContent = STATE.skipChances;
  count.classList.toggle("empty", STATE.skipChances === 0);
  btn.disabled = !(STATE.skipChances > 0 && (STATE.phase === "awaiting" || STATE.phase === "selected"));
}

// ── Helpers ───────────────────────────────────────────────────────
function normName(n)  { return n.toLowerCase().trim().replace(/\s+/g, " "); }
function getRemainingPositions() { return ALL_POSITIONS.filter(p => STATE.xi[p] && STATE.xi[p].includes(null)); }
function posLabel(pos) {
  return { GK:"Kaleci", CB:"Stoper", LB:"Sol Bek", RB:"Sağ Bek",
           MID:"Orta saha", LW:"Sol Kanat", RW:"Sağ Kanat", ST:"Forvet" }[pos];
}

// ── Simulation animation ──────────────────────────────────────────
const SIM = { speed: 1, skip: false, _res: [] };

function _simSleep(ms) {
  if (SIM.skip) return Promise.resolve();
  return new Promise(resolve => {
    SIM._res.push(resolve);
    setTimeout(() => {
      const i = SIM._res.indexOf(resolve);
      if (i >= 0) SIM._res.splice(i, 1);
      resolve();
    }, Math.round(ms / SIM.speed));
  });
}

function _simSkipAll() {
  SIM.skip = true;
  SIM._res.forEach(r => r());
  SIM._res = [];
}

async function runSimulation(simResult, players) {
  SIM.skip = false;
  SIM.speed = 1;
  SIM._res  = [];
  enrichSimWithEvents(simResult, players);

  document.getElementById("sim-log").innerHTML        = "";
  document.getElementById("sim-events-feed").innerHTML = "";
  document.getElementById("sim-phase-lbl").textContent = "";
  document.getElementById("sim-counter").textContent   = "";
  document.getElementById("btn-sim-speed").textContent = "⚡ Hızlandır";

  document.getElementById("btn-sim-skip").onclick = () => {
    _simSkipAll();
    renderResult(simResult, players);
  };
  document.getElementById("btn-sim-speed").onclick = () => {
    SIM.speed = SIM.speed === 1 ? 6 : 1;
    document.getElementById("btn-sim-speed").textContent =
      SIM.speed === 1 ? "⚡ Hızlandır" : "🐢 Yavaşlat";
  };

  showScreen("screen-sim");
  await _simSleep(250);

  for (const phase of simResult.phases) {
    if (SIM.skip) return;
    const cont = await _animatePhase(phase, simResult, players);
    if (!cont || SIM.skip) return;
  }

  if (!SIM.skip) {
    await _simSleep(700);
    renderResult(simResult, players);
  }
}

async function _animatePhase(phase, simResult, players) {
  document.getElementById("sim-phase-lbl").textContent = phase.label;

  for (let mi = 0; mi < phase.matches.length; mi++) {
    if (SIM.skip) return false;
    const m = phase.matches[mi];

    const isFinal  = phase.id === "final";
    const isLeague = phase.id === "league";
    document.getElementById("sim-counter").textContent =
      isLeague ? `${mi + 1} / ${phase.matches.length}` :
      isFinal  ? "Final" :
      (mi === 0 ? "1. maç" : "2. maç");

    await _animateMatch(m);
    if (SIM.skip) return false;

    _logMatch(m);
    await _simSleep(420);
  }

  if (phase.id !== "league" && phase.matches.length > 1) {
    _logAgg(phase);
    await _simSleep(500);
  }

  if (phase.penalties) {
    if (SIM.skip) return false;
    await _animatePenalties(phase);
    await _simSleep(400);
  }

  _logPhaseBanner(phase);

  if (!phase.passed) {
    await _simSleep(1300);
    if (!SIM.skip) renderResult(simResult, players);
    return false;
  }

  await _simSleep(isLeaguePh(phase) ? 800 : 600);
  return true;
}

function isLeaguePh(phase) { return phase.id === "league"; }

async function _animateMatch(m) {
  const homeName  = m.home !== false ? "Takımım"  : m.opponent;
  const awayName  = m.home !== false ? m.opponent : "Takımım";
  const homeVenue = m.home === true  ? "İç Saha"  : (m.home === null ? "Tarafsız" : "");
  const awayVenue = m.home === false ? "Deplasman" : (m.home === null ? "Tarafsız" : "");

  document.getElementById("stt-home-name").textContent  = homeName;
  document.getElementById("stt-away-name").textContent  = awayName;
  document.getElementById("stt-home-venue").textContent = homeVenue;
  document.getElementById("stt-away-venue").textContent = awayVenue;
  document.getElementById("sim-sc-home").textContent    = "0";
  document.getElementById("sim-sc-away").textContent    = "0";

  const feed = document.getElementById("sim-events-feed");
  feed.innerHTML = "";

  const card = document.getElementById("sim-match-card");
  card.classList.remove("card-in");
  void card.offsetWidth;
  card.classList.add("card-in");

  await _simSleep(280);

  let sh = 0, sa = 0;
  for (const ev of (m.events || [])) {
    if (SIM.skip) break;
    await _simSleep(330);

    const isHomeGoal = m.home !== false ? ev.mine : !ev.mine;
    if (isHomeGoal) {
      sh++;
      _bumScore("sim-sc-home", sh);
    } else {
      sa++;
      _bumScore("sim-sc-away", sa);
    }

    const div = document.createElement("div");
    div.className = `sim-ev ${ev.mine ? "ev-goal" : "ev-opp"}`;
    div.innerHTML = `<span class="ev-min">${ev.min}'</span>`
                  + `<span class="ev-ico">${ev.mine ? "⚽" : "🔴"}</span>`
                  + `<span class="ev-lbl">${ev.label}</span>`;
    feed.appendChild(div);
    feed.scrollTop = feed.scrollHeight;
  }

  await _simSleep(220);
  const labels = { W:"Galibiyet ✓", D:"Beraberlik", L:"Mağlubiyet ✗" };
  const badge  = document.createElement("div");
  badge.className = `sim-result-badge rb-${m.result}`;
  badge.textContent = labels[m.result];
  feed.appendChild(badge);
}

async function _animatePenalties(phase) {
  const pen = phase.penalties;
  const oppName = phase.opponent || "Rakip";

  document.getElementById("stt-home-name").textContent  = "Takımım";
  document.getElementById("stt-away-name").textContent  = oppName;
  document.getElementById("stt-home-venue").textContent = "Penaltı";
  document.getElementById("stt-away-venue").textContent = "Penaltı";
  document.getElementById("sim-sc-home").textContent    = "0";
  document.getElementById("sim-sc-away").textContent    = "0";

  const feed = document.getElementById("sim-events-feed");
  feed.innerHTML = "";

  const card = document.getElementById("sim-match-card");
  card.classList.remove("card-in");
  void card.offsetWidth;
  card.classList.add("card-in");

  await _simSleep(260);

  const hdr = document.createElement("div");
  hdr.className = "sim-pen-hdr";
  hdr.textContent = "⚽  Penaltı Atışları";
  feed.appendChild(hdr);

  let my = 0, opp = 0;
  for (const kick of pen.kicks) {
    if (SIM.skip) break;
    await _simSleep(420);

    if (kick.scored) {
      if (kick.mine) { my++;  _bumScore("sim-sc-home", my);  }
      else           { opp++; _bumScore("sim-sc-away", opp); }
    }

    const icon = kick.scored ? (kick.mine ? "⚽" : "🔴") : "❌";
    const name = kick.mine ? (kick.taker || "Oyuncu") : oppName.split(" ")[0];
    const sdTag = kick.sd ? `<span class="pen-sd">SD</span>` : "";
    const div = document.createElement("div");
    div.className = `sim-ev ${kick.mine && kick.scored ? "ev-goal" : !kick.mine && kick.scored ? "ev-opp" : "ev-miss"}`;
    div.innerHTML = `<span class="ev-ico">${icon}</span><span class="ev-lbl">${name}</span>${sdTag}`;
    feed.appendChild(div);
    feed.scrollTop = feed.scrollHeight;
  }

  await _simSleep(220);
  const badge = document.createElement("div");
  badge.className = `sim-result-badge ${pen.passed ? "rb-W" : "rb-L"}`;
  badge.textContent = `Penaltı: ${pen.myScore}–${pen.oppScore}  ${pen.passed ? "✓ Geçti" : "✗ Elendi"}`;
  feed.appendChild(badge);
}

function _bumScore(id, val) {
  const el = document.getElementById(id);
  el.textContent = val;
  el.classList.remove("sc-bump");
  void el.offsetWidth;
  el.classList.add("sc-bump");
}

function _logMatch(m) {
  const log  = document.getElementById("sim-log");
  const home = m.home !== false ? "Takımım" : m.opponent;
  const away = m.home !== false ? m.opponent : "Takımım";
  const div  = document.createElement("div");
  div.className = `sim-log-row l${m.result}`;
  div.innerHTML = `<span class="lr-home">${home}</span>`
                + `<span class="lr-sc">${m.gf}–${m.ga}</span>`
                + `<span class="lr-away">${away}</span>`;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function _logAgg(phase) {
  const log = document.getElementById("sim-log");
  const div = document.createElement("div");
  div.className = `sim-log-agg ${phase.passed ? "agg-ok" : "agg-fail"}`;
  div.textContent = `Toplam: ${phase.aggFor}–${phase.aggAga}  ${phase.passed ? "→ Geçti ✓" : "→ Elendi ✗"}`;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function _logPhaseBanner(phase) {
  const log = document.getElementById("sim-log");
  const div = document.createElement("div");
  div.className = `sim-phase-banner ${phase.passed ? "pb-pass" : "pb-fail"}`;
  div.textContent = phase.summary;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

// ── Play again ────────────────────────────────────────────────────
function onPlayAgain() {
  Object.assign(STATE, {
    formation: null, maxSlots: null, xi: null,
    pendingPlayer: null, phase: "start",
    allPlayers: [], skipChances: 3,
    selectedNames: new Set(), usedKeys: [],
  });

  // Re-init formation screen
  let chosenFormation = "4-3-3";
  buildFormationScreen(chosenFormation, name => { chosenFormation = name; });
  document.getElementById("btn-confirm-formation").disabled = false;
  document.getElementById("btn-confirm-formation")._getChosen = () => chosenFormation;

  showScreen("screen-formation");
}
