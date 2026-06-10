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
  "4-3-3": { GK:1, RB:1, CB:2, LB:1, MID:3, RW:1, ST:1, LW:1 },
  "4-4-2": { GK:1, RB:1, CB:2, LB:1, MID:4,             ST:2 },
  "4-5-1": { GK:1, RB:1, CB:2, LB:1, MID:5,             ST:1 },
  "3-5-2": { GK:1, RB:1, CB:3, LB:1, MID:3,             ST:2 },
  "3-4-3": { GK:1,       CB:3,       MID:4, RW:1, ST:1, LW:1 },
  "5-3-2": { GK:1, RB:1, CB:3, LB:1, MID:3,             ST:2 },
};

function buildFormationScreen(selectedName, onSelect) {
  const container = document.getElementById("formation-options");
  container.innerHTML = Object.entries(FORMATIONS).map(([name, f]) => {
    const fwdCount = (f.LW||0) + (f.ST||0) + (f.RW||0);
    const midCount = f.MID || 0;
    const defCount = (f.LB||0) + (f.CB||0) + (f.RB||0);
    const rows = [
      { count: fwdCount, cls: "fwd-color" },
      { count: midCount, cls: "mid-color" },
      { count: defCount, cls: "def-color" },
      { count: 1,        cls: "gk-color"  },
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
  const tierInfo = [
    { positions: ["GK"],           cls: "gk"  },
    { positions: ["LB","CB","RB"], cls: "def" },
    { positions: ["MID"],          cls: "mid" },
    { positions: ["LW","ST","RW"], cls: "fwd" },
  ];
  let html = "";
  tierInfo.forEach(({ positions, cls }, ti) => {
    const tierSlots = positions.flatMap(pos =>
      Array.from({ length: maxSlots[pos] || 0 }, (_, i) => ({ pos, idx: i }))
    );
    if (!tierSlots.length) return;
    if (ti > 0) html += `<span class="prog-gap"></span>`;
    tierSlots.forEach(({ pos, idx }) => {
      const confirmed = xi[pos][idx] !== null;
      const isPending = !confirmed && pendingPlayer?.pos === pos && xi[pos].indexOf(null) === idx;
      const state = confirmed ? "filled" : (isPending ? "pending" : "");
      html += `<span class="prog-dot ${cls} ${state}"></span>`;
    });
  });
  container.innerHTML = html;
}

// ── Player card HTML ──────────────────────────────────────────────
const POS_LABELS = {
  GK:"KAL", CB:"STR", LB:"SB", RB:"SB", MID:"ORT", LW:"SK", RW:"SK", ST:"FOR"
};

function renderPlayerCard(p, isSelected, isDisabled) {
  let cls = "player-card";
  if (isSelected) cls += " selected";
  if (isDisabled) cls += " disabled";

  const ovrCls   = ovrClass(p.overall);
  const posClass = p.pos.toLowerCase();

  let statsHtml = "";
  if (p.pos === "GK") {
    statsHtml = `<span class="stat-pill cs">🧤 ${p.saves}</span><span class="stat-pill cs">CS ${p.cs}</span>`;
  } else if (p.pos === "CB") {
    statsHtml = `<span class="stat-pill cs">🛡 ${p.tackles}</span>${p.goals > 0 ? `<span class="stat-pill goals">⚽ ${p.goals}</span>` : ""}`;
  } else if (p.pos === "LB" || p.pos === "RB") {
    statsHtml = `<span class="stat-pill cs">🛡 ${p.tackles}</span><span class="stat-pill assists">🅰 ${p.assists}</span>`;
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
const TIER_GROUPS = [
  ["LW", "ST", "RW"],
  ["MID"],
  ["LB", "CB", "RB"],
  ["GK"],
];

const SLOT_LABELS = {
  GK:"KAL", CB:"STR", LB:"LB", RB:"RB", MID:"ORT", LW:"LW", RW:"RW", ST:"ST"
};

function renderFormation(xi, maxSlots, pendingPlayer, newlyFilled = null) {
  const container = document.getElementById("formation-container");
  container.innerHTML = "";

  const tierRowIds = ["row-fwd", "row-mid", "row-def", "row-gk"];

  TIER_GROUPS.forEach((tierPositions, ti) => {
    const tierSlots = tierPositions.flatMap(pos =>
      Array.from({ length: maxSlots[pos] || 0 }, (_, i) => ({ pos, idx: i }))
    );
    if (!tierSlots.length) return;

    const row = document.createElement("div");
    row.className = "formation-row";
    row.id = tierRowIds[ti];

    tierSlots.forEach(({ pos, idx }) => {
      const slot   = document.createElement("div");
      slot.dataset.pos = pos;
      slot.dataset.idx = idx;
      const player = xi[pos][idx];

      if (player) {
        const isNew = newlyFilled && newlyFilled.pos === pos && newlyFilled.idx === idx;
        slot.className = isNew ? "slot filled just-filled" : "slot filled";
        slot.innerHTML = buildFilledSlot(pos, player);
      } else if (pendingPlayer && pendingPlayer.pos === pos) {
        slot.className = "slot selectable";
        slot.innerHTML = buildSelectableSlot(pos);
        slot.addEventListener("click", () => onSlotClick(pos, idx));
      } else {
        slot.className = "slot empty";
        slot.innerHTML = buildEmptySlot(pos);
      }

      row.appendChild(slot);
    });
    container.appendChild(row);
  });

  const confirmed = Object.values(xi).flat().filter(Boolean).length;
  document.getElementById("xi-count").textContent = `${confirmed} / 11`;
}

function buildEmptySlot(pos) {
  return `<span class="slot-pos-label">${SLOT_LABELS[pos]}</span><span class="slot-hint">Boş</span>`;
}
function buildSelectableSlot(pos) {
  return `<span class="slot-pos-label">${SLOT_LABELS[pos]}</span><span class="slot-select-icon">+</span>`;
}
function buildFilledSlot(pos, player) {
  const short = player.name.split(" ").slice(-1)[0];
  return `<span class="slot-pos-label">${SLOT_LABELS[pos]}</span><span class="slot-name">${short}</span><span class="slot-ovr ${ovrClass(player.overall)}">${player.overall}</span>`;
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
      btn.className  = "btn-roll cancel";
      btn.textContent = "✕ İptal";
      hint.textContent = pendingPlayer ? `${pendingPlayer.name} — sahada mevkiye tıkla` : "";
      hint.className   = "roll-hint ready";
      break;
  }
}

// ── Result screen ─────────────────────────────────────────────────
// sim = { grade, icon, title, stage, phases, totalMatches, score }
function buildTourStats(sim) {
  const goals = {}, assists = {};
  for (const phase of sim.phases) {
    for (const m of phase.matches) {
      for (const ev of (m.events || [])) {
        if (!ev.mine) continue;
        goals[ev.label]   = (goals[ev.label]   || 0) + 1;
        if (ev.assister) assists[ev.assister] = (assists[ev.assister] || 0) + 1;
      }
    }
  }
  return { goals, assists };
}

function renderResult(sim, players) {
  document.getElementById("result-icon").textContent = sim.icon;
  const gradeEl = document.getElementById("result-grade");
  gradeEl.textContent = sim.grade;
  gradeEl.className   = `grade grade-${sim.grade}`;
  document.getElementById("result-title").textContent = sim.title;
  document.getElementById("win-text").textContent =
    `${sim.totalMatches} maç · Güç skoru: ${sim.score}`;

  document.getElementById("result-timeline").innerHTML =
    sim.phases.map((p, i) => buildPhaseHTML(p, i)).join("");

  const ts = buildTourStats(sim);

  const posOrder = ["GK","LB","CB","RB","MID","LW","ST","RW"];
  const sorted   = [...players].sort((a,b) => posOrder.indexOf(a.pos) - posOrder.indexOf(b.pos));
  document.getElementById("result-xi").innerHTML = sorted.map(p => {
    const posClass = p.pos.toLowerCase();
    const key  = p.name.split(" ").slice(-1)[0];
    const g    = ts.goals[key]   || 0;
    const a    = ts.assists[key] || 0;
    const statParts = [];
    if (g > 0 || p.pos !== "GK") statParts.push(`<span class="rp-stat">⚽ ${g}</span>`);
    if (a > 0)                   statParts.push(`<span class="rp-stat">🅰 ${a}</span>`);
    if (!statParts.length)       statParts.push(`<span class="rp-stat rp-stat-dim">—</span>`);
    return `
    <div class="result-player rp-pos-${posClass}">
      <div class="rp-top">
        <span class="rp-name">${p.name}</span>
        <span class="pos-badge pos-${posClass}">${POS_LABELS[p.pos]}</span>
      </div>
      <div class="rp-row2">
        <span class="rp-ovr ${ovrClass(p.overall)}">${p.overall}</span>
        <span class="rp-apps">${p.apps} maç</span>
      </div>
      <div class="rp-stats">${statParts.join("")}</div>
    </div>`;
  }).join("");

  showScreen("screen-result");
}

function buildPhaseHTML(phase, index = 0) {
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
    <div class="phase-block ${passClass}" style="animation-delay:${index * 85 + 550}ms">
      <div class="phase-hd">
        <span class="phase-lbl">${phase.label}</span>
        <span class="phase-ic">${passIcon}</span>
      </div>
      ${matchRows}
      <div class="phase-sum">${phase.summary}</div>
    </div>`;
}
