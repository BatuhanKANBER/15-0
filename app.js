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

function makeEmptyXi(slots) {
  return {
    GK:  Array(slots.GK).fill(null),
    DEF: Array(slots.DEF).fill(null),
    MID: Array(slots.MID).fill(null),
    FWD: Array(slots.FWD).fill(null),
  };
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
  STATE.maxSlots = { GK:1, DEF:f.DEF, MID:f.MID, FWD:f.FWD };
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

  if (STATE.phase === "selected" && STATE.pendingPlayer) {
    const p = STATE.pendingPlayer;
    STATE.xi[p.pos][STATE.xi[p.pos].indexOf(null)] = p;
    STATE.selectedNames.add(normName(p.name));
    STATE.pendingPlayer = null;

    renderFormation(STATE.xi, STATE.maxSlots, null);
    updateProgressSlots(STATE.xi, STATE.maxSlots, null);

    const total  = Object.values(STATE.xi).flat().filter(Boolean).length;
    const needed = Object.values(STATE.maxSlots).reduce((a, b) => a + b, 0);
    if (total >= needed) {
      const all = Object.values(STATE.xi).flat().filter(Boolean);
      renderResult(simulateUCL(all), all);
      return;
    }
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
  document.getElementById("squad-header").classList.remove("hidden");
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

  // Sort: selectable first (by overall desc), then disabled/confirmed at bottom
  const players = [...STATE.allPlayers].sort((a, b) => b.overall - a.overall);

  if (!players.length) {
    list.innerHTML = `<p class="empty-tab">Kadro bulunamadı</p>`;
    return;
  }

  list.innerHTML = players.map(p => {
    const isSelected  = STATE.pendingPlayer?.id === p.id;
    const isConfirmed = STATE.selectedNames.has(normName(p.name));
    const posFull     = !STATE.xi[p.pos].includes(null);
    const isDisabled  = !isSelected && (posFull || isConfirmed);
    let card = renderPlayerCard(p, isSelected, isDisabled);
    if (isConfirmed) card = card.replace('class="player-card disabled"', 'class="player-card confirmed"');
    return card;
  }).join("");

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
function getRemainingPositions() { return ["GK","DEF","MID","FWD"].filter(p => STATE.xi[p].includes(null)); }
function posLabel(pos) { return { GK:"Kaleci", DEF:"Defans", MID:"Orta saha", FWD:"Forvet" }[pos]; }

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
