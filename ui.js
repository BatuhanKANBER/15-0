// ── Screen helpers ────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = `toast ${type}`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add("hidden"), 2800);
}

// ── Formation selection screen ────────────────────────────────────
const FORMATIONS = {
  "4-3-3": { DEF:4, MID:3, FWD:3 },
  "4-4-2": { DEF:4, MID:4, FWD:2 },
  "4-5-1": { DEF:4, MID:5, FWD:1 },
  "3-5-2": { DEF:3, MID:5, FWD:2 },
  "3-4-3": { DEF:3, MID:4, FWD:3 },
  "5-3-2": { DEF:5, MID:3, FWD:2 },
};

function buildFormationScreen(selectedName, onSelect) {
  const container = document.getElementById("formation-options");
  container.innerHTML = Object.entries(FORMATIONS).map(([name, f]) => {
    const rows = [
      { count: f.FWD, cls: "fwd-color" },
      { count: f.MID, cls: "mid-color" },
      { count: f.DEF, cls: "def-color" },
      { count: 1,     cls: "gk-color"  },
    ];
    const diagramHtml = rows.map(r =>
      `<div class="diagram-row">${Array(r.count).fill(`<span class="diagram-dot" style="background:var(--${r.cls})"></span>`).join("")}</div>`
    ).join("");

    const sel = name === selectedName ? " selected" : "";
    return `
      <div class="formation-option${sel}" data-name="${name}">
        <div class="diagram">${diagramHtml}</div>
        <span class="fname">${name}</span>
      </div>`;
  }).join("");

  container.querySelectorAll(".formation-option").forEach(opt => {
    opt.addEventListener("click", () => {
      container.querySelectorAll(".formation-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      onSelect(opt.dataset.name);
    });
  });
}

// ── Progress slots (header) ───────────────────────────────────────
function updateProgressSlots(xi, maxSlots, pendingPlayer) {
  const container = document.getElementById("progress-slots");
  const posInfo = [
    { pos:"GK",  cls:"gk"  },
    { pos:"DEF", cls:"def" },
    { pos:"MID", cls:"mid" },
    { pos:"FWD", cls:"fwd" },
  ];
  let html = "";
  posInfo.forEach(({ pos, cls }, pi) => {
    if (pi > 0) html += `<span class="prog-gap"></span>`;
    const slots = xi[pos];
    for (let i = 0; i < maxSlots[pos]; i++) {
      const confirmed = slots[i] !== null;
      const isPending = !confirmed && pendingPlayer?.pos === pos && i === slots.findIndex(s => s === null);
      const state = confirmed ? "filled" : (isPending ? "pending" : "");
      html += `<span class="prog-dot ${cls} ${state}"></span>`;
    }
  });
  container.innerHTML = html;
}

// ── Player card HTML ──────────────────────────────────────────────
const POS_LABELS = { GK:"KAL", DEF:"DEF", MID:"ORT", FWD:"FOR" };

function renderPlayerCard(p, isSelected, isDisabled) {
  let cls = "player-card";
  if (isSelected) cls += " selected";
  if (isDisabled) cls += " disabled";

  const ovrCls  = ovrClass(p.overall);
  const posClass = p.pos.toLowerCase();

  let statsHtml = "";
  if (p.pos === "GK") {
    statsHtml = `<span class="stat-pill cs">🧤 ${p.saves}</span><span class="stat-pill cs">CS ${p.cs}</span>`;
  } else if (p.pos === "DEF") {
    statsHtml = `<span class="stat-pill cs">🛡 ${p.tackles}</span>${p.goals > 0 ? `<span class="stat-pill goals">⚽ ${p.goals}</span>` : ""}`;
  } else {
    statsHtml = `<span class="stat-pill goals">⚽ ${p.goals}</span><span class="stat-pill assists">🅰 ${p.assists}</span>`;
  }

  const check = isSelected ? `<span class="selected-check">✓</span>` : "";

  return `
    <div class="${cls}" data-id="${p.id}">
      <div class="player-ovr ${ovrCls}">${p.overall}</div>
      <div class="player-info">
        <div class="player-name">
          <span class="pos-badge pos-${posClass}">${POS_LABELS[p.pos]}</span>${p.name}
        </div>
        <div class="player-meta">${p.nationality} · ${p.apps} maç</div>
      </div>
      <div class="player-stats">${statsHtml}</div>
      ${check}
    </div>`;
}

// ── Formation render ──────────────────────────────────────────────
// Builds the formation DOM. pendingPlayer = selected but not yet confirmed.
function renderFormation(xi, maxSlots, pendingPlayer) {
  const container = document.getElementById("formation-container");
  container.innerHTML = "";

  const posRows = ["FWD", "MID", "DEF", "GK"];

  for (const pos of posRows) {
    const count = maxSlots[pos];
    const row   = document.createElement("div");
    row.className = "formation-row";
    row.id = `row-${pos.toLowerCase()}`;

    // Find the first null slot index for pending
    const firstNull = xi[pos].indexOf(null);

    for (let i = 0; i < count; i++) {
      const slot = document.createElement("div");
      slot.dataset.pos = pos;
      slot.dataset.idx = i;
      const player = xi[pos][i];

      if (player) {
        slot.className = "slot filled";
        slot.innerHTML = buildFilledSlot(pos, player);
      } else if (pendingPlayer && pendingPlayer.pos === pos && i === firstNull) {
        slot.className = "slot pending-slot";
        slot.innerHTML = buildPendingSlot(pos, pendingPlayer);
      } else {
        slot.className = "slot empty";
        slot.innerHTML = buildEmptySlot(pos);
      }

      row.appendChild(slot);
    }
    container.appendChild(row);
  }

  const confirmed = Object.values(xi).flat().filter(Boolean).length;
  document.getElementById("xi-count").textContent = `${confirmed} / 11`;
}

function buildEmptySlot(pos) {
  const labels = { GK:"KAL", DEF:"DEF", MID:"ORT", FWD:"FOR" };
  return `<span class="slot-pos-label">${labels[pos]}</span><span class="slot-hint">Boş</span>`;
}
function buildPendingSlot(pos, player) {
  const labels = { GK:"KAL", DEF:"DEF", MID:"ORT", FWD:"FOR" };
  const short  = player.name.split(" ").slice(-1)[0];
  return `<span class="slot-pos-label">${labels[pos]}</span><span class="slot-name">${short}</span><span class="slot-ovr ${ovrClass(player.overall)}">${player.overall}?</span>`;
}
function buildFilledSlot(pos, player) {
  const labels = { GK:"KAL", DEF:"DEF", MID:"ORT", FWD:"FOR" };
  const short  = player.name.split(" ").slice(-1)[0];
  return `<span class="slot-pos-label">${labels[pos]}</span><span class="slot-name">${short}</span><span class="slot-ovr ${ovrClass(player.overall)}">${player.overall}</span>`;
}

// ── Roll button zone ──────────────────────────────────────────────
// phase: "start" | "loading" | "awaiting" | "selected"
function updateRollZone(phase, pendingPlayer) {
  const btn  = document.getElementById("btn-roll");
  const hint = document.getElementById("roll-hint");

  switch(phase) {
    case "start":
      btn.disabled   = false;
      btn.className  = "btn-roll ready";
      btn.textContent = "🎲 Roll";
      hint.textContent = "Başlamak için Roll'a bas";
      hint.className   = "roll-hint ready";
      break;
    case "loading":
      btn.disabled   = true;
      btn.className  = "btn-roll loading-state";
      btn.textContent = "⏳ Yükleniyor...";
      hint.textContent = "Kadro getiriliyor";
      hint.className   = "roll-hint";
      break;
    case "awaiting":
      btn.disabled   = true;
      btn.className  = "btn-roll waiting";
      btn.textContent = "🎲 Roll";
      hint.textContent = "Listeden bir oyuncu seç";
      hint.className   = "roll-hint";
      break;
    case "selected":
      btn.disabled   = false;
      btn.className  = "btn-roll confirm";
      btn.textContent = "🎲 Roll — Onayla!";
      hint.textContent = pendingPlayer ? `${pendingPlayer.name} seçildi` : "";
      hint.className   = "roll-hint confirmed";
      break;
  }
}

// ── Result screen ─────────────────────────────────────────────────
// sim = { grade, icon, title, stage, phases, totalMatches, score }
function renderResult(sim, players) {
  document.getElementById("result-icon").textContent = sim.icon;
  const gradeEl = document.getElementById("result-grade");
  gradeEl.textContent = sim.grade;
  gradeEl.className   = `grade grade-${sim.grade}`;
  document.getElementById("result-title").textContent = sim.title;
  document.getElementById("win-text").textContent =
    `${sim.totalMatches} maç · Güç skoru: ${sim.score}`;

  // Phase timeline
  document.getElementById("result-timeline").innerHTML =
    sim.phases.map(buildPhaseHTML).join("");

  // XI
  const posOrder = ["GK","DEF","MID","FWD"];
  const sorted   = [...players].sort((a,b) => posOrder.indexOf(a.pos) - posOrder.indexOf(b.pos));
  document.getElementById("result-xi").innerHTML = sorted.map(p => `
    <div class="result-player">
      <div class="rp-name">${p.name}</div>
      <div class="rp-meta">${p.pos} · OVR ${p.overall}</div>
    </div>`).join("");

  showScreen("screen-result");
}

function buildPhaseHTML(phase) {
  const passIcon = phase.passed ? "✓" : "✗";
  const passClass = phase.passed ? "phase-passed" : "phase-eliminated";

  let matchRows = "";

  if (phase.id === "league") {
    matchRows = phase.matches.map((m, i) => {
      const venue = m.home ? "İç" : "Dep";
      const rc = { W:"row-W", D:"row-D", L:"row-L" }[m.result];
      const rb = { W:"G", D:"B", L:"M" }[m.result];
      return `<tr class="match-row ${rc}">
        <td class="mc">${i + 1}</td>
        <td class="mv">${venue}</td>
        <td class="mo">${m.opponent}</td>
        <td class="ms">${m.gf} – ${m.ga}</td>
        <td class="mr badge-${m.result}">${rb}</td>
      </tr>`;
    }).join("");
    matchRows = `<table class="match-table"><tbody>${matchRows}</tbody></table>`;

  } else if (phase.id === "final") {
    const m  = phase.matches[0];
    const rc = { W:"row-W", D:"row-D", L:"row-L" }[m.result];
    matchRows = `<div class="final-row ${rc}">
      <span class="ko-opp">${m.opponent}</span>
      <span class="ko-score">${m.gf} – ${m.ga}</span>
      <span class="ko-venue">İstanbul</span>
    </div>`;

  } else {
    // 2-leg knockout or playoff
    matchRows = phase.matches.map(m => {
      const venue = m.home ? "İç Saha" : "Deplasman";
      const rc    = { W:"row-W", D:"row-D", L:"row-L" }[m.result];
      return `<div class="ko-row ${rc}">
        <span class="ko-leg">${venue}</span>
        <span class="ko-opp">${m.opponent}</span>
        <span class="ko-score">${m.gf} – ${m.ga}</span>
      </div>`;
    }).join("");
    const aggClass = phase.passed ? "agg-pass" : "agg-fail";
    matchRows += `<div class="ko-agg ${aggClass}">
      Toplam: ${phase.aggFor} – ${phase.aggAga}
      ${phase.passed ? "→ Geçti ✓" : "→ Elendi ✗"}
    </div>`;
  }

  return `
    <div class="phase-block ${passClass}">
      <div class="phase-hd">
        <span class="phase-lbl">${phase.label}</span>
        <span class="phase-ic">${passIcon}</span>
      </div>
      ${matchRows}
      <div class="phase-sum">${phase.summary}</div>
    </div>`;
}
