// ── Overall Calculation ───────────────────────────────────────────

function norm(val, min, max) {
  return Math.min(1, Math.max(0, (val - min) / (max - min)));
}

function calcOverall(p) {
  let score = 0;
  if (p.pos === "GK") {
    const sp = p.apps > 0 ? p.saves / p.apps : 0;
    const cr = p.apps > 0 ? p.cs   / p.apps : 0;
    score = norm(sp, 2, 6) * 0.35 + norm(cr, .1, .7) * 0.30
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.passes / Math.max(p.apps, 1), 20, 80) * 0.10;
  } else if (p.pos === "CB") {
    const tp = p.apps > 0 ? p.tackles / p.apps : 0;
    const cr = p.apps > 0 ? p.cs      / p.apps : 0;
    score = norm(tp, 1, 6) * 0.30 + norm(cr, .1, .7) * 0.25
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.goals + p.assists, 0, 6) * 0.10
          + norm(p.passes / Math.max(p.apps, 1), 30, 90) * 0.10;
  } else if (p.pos === "LB" || p.pos === "RB") {
    const tp = p.apps > 0 ? p.tackles / p.apps : 0;
    const cr = p.apps > 0 ? p.cs      / p.apps : 0;
    score = norm(tp, 1, 5) * 0.22 + norm(cr, .1, .6) * 0.18
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.goals + p.assists, 0, 8) * 0.20
          + norm(p.passes / Math.max(p.apps, 1), 35, 100) * 0.15;
  } else if (p.pos === "MID") {
    score = norm(p.goals + p.assists, 0, 15) * 0.30
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.passes  / Math.max(p.apps, 1), 40, 140) * 0.25
          + norm(p.tackles / Math.max(p.apps, 1), 1, 6)    * 0.20;
  } else if (p.pos === "LW" || p.pos === "RW") {
    score = norm(p.goals, 0, 10) * 0.28 + norm(p.assists, 0, 10) * 0.28
          + norm(p.rating, 6, 9) * 0.26
          + norm(p.goals + p.assists, 0, 16) * 0.18;
  } else { // ST
    score = norm(p.goals, 0, 16) * 0.40 + norm(p.assists, 0, 10) * 0.20
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.goals + p.assists, 0, 20) * 0.15;
  }
  return Math.round(60 + score * 39);
}

function enrichSquad(players) {
  return players.map(p => ({ ...p, overall: calcOverall(p) }));
}

function ovrClass(ovr) {
  if (ovr >= 90) return "ovr-elite";
  if (ovr >= 83) return "ovr-great";
  if (ovr >= 76) return "ovr-good";
  if (ovr >= 70) return "ovr-avg";
  return "ovr-below";
}

// ── Team strength score ───────────────────────────────────────────
function calcTeamScore(players) {
  const avg  = players.reduce((a, b) => a + b.overall, 0) / players.length;
  const gk   = players.find(p => p.pos === "GK");
  const defs = players.filter(p => p.pos === "CB" || p.pos === "LB" || p.pos === "RB");
  const gkBonus  = gk   ? (gk.overall - avg) * 0.06 : 0;
  const defAvg   = defs.length ? defs.reduce((a, b) => a + b.overall, 0) / defs.length : avg;
  const defBonus = (defAvg - avg) * 0.04;
  const variance = players.reduce((acc, p) => acc + Math.pow(p.overall - avg, 2), 0) / players.length;
  const variancePenalty = Math.sqrt(variance) * 0.09;
  return avg + gkBonus + defBonus - variancePenalty;
}

// ── Normalize score to 0-1 within realistic UCL data range ────────
// Demo data range: 75.0 (PSV, Arsenal weak) – 84.2 (Bayern 2019-20)
// Dream team theoretical max ~88
// Clamp both ends so full [0,1] is reachable
function normalizeStrength(score) {
  return Math.min(1, Math.max(0, (score - 73) / 14));
}

// ── Seeded PRNG (Mulberry32) ──────────────────────────────────────
function seededRNG(seed) {
  let s = (Math.abs(seed) | 0) >>> 0;
  return function () {
    s += 0x6D2B79F5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Poisson goal sampling ─────────────────────────────────────────
function sampleGoals(rng, lambda) {
  const L = Math.exp(-Math.min(Math.max(lambda, 0.1), 5.5));
  let k = 0, p = 1;
  do { p *= rng(); k++; } while (p > L && k < 9);
  return Math.min(k - 1, 8);
}

// ── Goal event enrichment (separate RNG, no effect on sim outcomes) ─
function _hashStr(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function enrichSimWithEvents(simResult, players) {
  const gWeights = { ST:5, LW:3, RW:3, MID:2, LB:1, RB:1, CB:0.5, GK:0 };
  const aWeights = { MID:4, LW:3, RW:3, LB:2, RB:2, ST:2, CB:0.5, GK:0 };
  const all    = players.filter(p => p.pos !== "GK");
  const totalG = all.reduce((s, p) => s + (gWeights[p.pos] || 1), 0);
  const totalA = all.reduce((s, p) => s + (aWeights[p.pos] || 1), 0);

  let idx = 0;
  for (const phase of simResult.phases) {
    for (const m of phase.matches) {
      const seed = _hashStr(m.opponent) ^ (m.gf * 997 + m.ga * 71 + idx * 1009);
      const rng  = seededRNG(seed);

      function pickWeighted(pool, weights, totalW) {
        let r = rng() * totalW;
        for (const p of pool) { r -= (weights[p.pos] || 1); if (r <= 0) return p.name.split(" ").slice(-1)[0]; }
        return pool[pool.length - 1].name.split(" ").slice(-1)[0];
      }

      const evs = [];
      for (let i = 0; i < m.gf; i++) {
        const scorer = pickWeighted(all, gWeights, totalG);
        const hasAssist = rng() < 0.72;
        const assistPool = all.filter(p => p.name.split(" ").slice(-1)[0] !== scorer);
        const assister = hasAssist && assistPool.length
          ? pickWeighted(assistPool, aWeights, assistPool.reduce((s, p) => s + (aWeights[p.pos] || 1), 0))
          : null;
        evs.push({ min: 1 + Math.floor(rng() * 90), label: scorer, assister, mine: true });
      }
      for (let i = 0; i < m.ga; i++)
        evs.push({ min: 1 + Math.floor(rng() * 90), label: m.opponent, assister: null, mine: false });
      m.events = evs.sort((a, b) => a.min - b.min);
      idx++;
    }
  }
}

// ── Tiered opponent pools ─────────────────────────────────────────
const ROUND_OPPONENTS = {
  // Lig aşaması alt seviye (65% olasılık)
  league_weak: [
    "Young Boys","RB Salzburg","Shakhtar Donetsk","Dinamo Zagreb","Red Star Belgrade",
    "Slavia Prague","Sparta Prague","Celtic","Qarabağ","PAOK","Sturm Graz","Midtjylland",
    "Bologna","Girona","Galatasaray","Braga","HJK Helsinki","Malmö FF",
    "Ludogorets","Sheriff Tiraspol","Crvena zvezda","Genk",
  ],
  // Lig aşaması üst seviye (35% olasılık)
  league_strong: [
    "Club Brugge","Benfica","PSV Eindhoven","Porto","Feyenoord","Sporting CP","Ajax",
    "AC Milan","Atlético de Madrid","Napoli","Juventus","Chelsea","Borussia Dortmund",
    "Bayern München","Manchester City","Barcelona","Real Madrid","Liverpool","PSG","Arsenal",
    "Inter Milan","RB Leipzig","Aston Villa","Monaco","Sevilla","Tottenham Hotspur",
  ],
  // Kept as alias for backward compat
  get league() { return this.league_weak; },
  // Play-off: orta seviye
  playoff: [
    "Club Brugge","Benfica","PSV Eindhoven","Porto","Feyenoord","Sporting CP",
    "Ajax","Monaco","Marseille","Sevilla","Villarreal","Lazio","Brest",
    "Aston Villa","Lille","Braga","Fenerbahçe","Real Sociedad",
  ],
  // Son 16: güçlü orta seviye
  r16: [
    "AC Milan","Atlético de Madrid","Napoli","Tottenham Hotspur","RB Leipzig",
    "Bayer Leverkusen","Borussia Dortmund","Chelsea","Atalanta","Juventus",
    "Aston Villa","Inter Milan","Arsenal","Monaco","Sevilla","Porto",
  ],
  // Çeyrek final: Avrupa'nın zirvesi
  qf: [
    "Bayern München","Liverpool","Arsenal","Chelsea","Borussia Dortmund",
    "Inter Milan","Atlético de Madrid","AC Milan","PSG","Juventus",
    "Atalanta","RB Leipzig","Manchester City",
  ],
  // Yarı final: UCL sabitlerinden
  sf: [
    "Real Madrid","Manchester City","Barcelona","PSG",
    "Bayern München","Liverpool","Arsenal","Inter Milan","Chelsea",
  ],
  // Final: sadece mutlak elit
  final: [
    "Real Madrid","Manchester City","Barcelona",
    "PSG","Bayern München","Liverpool","Arsenal",
  ],
};

function pickOpp(rng, pool, used) {
  const available = pool.filter(o => !used.includes(o));
  const src = available.length ? available : pool;
  return src[Math.floor(rng() * src.length)];
}

// ── Penalty shootout simulation ──────────────────────────────────
function simulatePenalties(rng, s, players) {
  const myProb  = 0.68 + s * 0.14;   // 0.68–0.82 based on team strength
  const oppProb = 0.75;

  const posW = { ST:5, LW:4, RW:4, MID:3, LB:2, RB:2, CB:1, GK:0 };
  const takers = [...players]
    .sort((a, b) => (posW[b.pos]||0) - (posW[a.pos]||0))
    .slice(0, 5)
    .map(p => p.name.split(" ").slice(-1)[0]);

  const kicks = [];
  let my = 0, opp = 0;

  // 5 regulation rounds (with early exit)
  for (let r = 0; r < 5; r++) {
    const mk = rng() < myProb;
    if (mk) my++;
    kicks.push({ mine: true,  scored: mk,  taker: takers[r] });

    const ok = rng() < oppProb;
    if (ok) opp++;
    kicks.push({ mine: false, scored: ok,  taker: null });

    // Early exit: one side can't catch up
    const rem = 4 - r;
    if (my > opp + rem || opp > my + rem) break;
  }

  // Sudden death
  for (let r = 0; my === opp && r < 10; r++) {
    const mk = rng() < myProb;
    if (mk) my++;
    kicks.push({ mine: true,  scored: mk, taker: takers[r % takers.length], sd: true });

    const ok = rng() < oppProb;
    if (ok) opp++;
    kicks.push({ mine: false, scored: ok, taker: null, sd: true });
  }

  return { myScore: my, oppScore: opp, kicks, passed: my > opp };
}

// ── Opponent difficulty lookup ────────────────────────────────────
const OPP_DIFF = {
  // Mutlak elit (0.52–0.60)
  "Real Madrid":0.60,"Manchester City":0.57,"Bayern München":0.56,
  "Barcelona":0.55,"PSG":0.53,"Liverpool":0.52,"Arsenal":0.50,
  // Güçlü (0.36–0.48)
  "Inter Milan":0.48,"Chelsea":0.46,"Borussia Dortmund":0.45,
  "Atlético de Madrid":0.44,"Napoli":0.43,"AC Milan":0.42,
  "Juventus":0.41,"Bayer Leverkusen":0.40,"RB Leipzig":0.39,
  "Tottenham Hotspur":0.38,"Atalanta":0.37,"Sevilla":0.36,
  // Orta (0.22–0.32)
  "Aston Villa":0.32,"Monaco":0.30,"Club Brugge":0.30,
  "Benfica":0.29,"Porto":0.28,"Feyenoord":0.27,"PSV Eindhoven":0.26,
  "Sporting CP":0.25,"Ajax":0.24,"Marseille":0.24,
  "Villarreal":0.23,"Lazio":0.23,"Lille":0.22,"Fenerbahçe":0.22,
  "Real Sociedad":0.21,"Braga":0.21,"Brest":0.20,
  // Alt-orta (0.10–0.16)
  "Bologna":0.16,"Girona":0.16,"Galatasaray":0.15,
  "Celtic":0.14,"Sparta Prague":0.13,"Slavia Prague":0.12,
};
function oppDiff(name) { return OPP_DIFF[name] ?? 0.07; }

// ── Goal lambdas per round ────────────────────────────────────────
// s: team strength 0-1
// difficulty: 0=league → 0.68=final (opponent's relative strength)
// fMult/aMult scale goals as opponents get tougher
function roundLambdas(s, difficulty, isHome) {
  const fMult = (1 - difficulty * 0.55) * (isHome ? 1.12 : 0.88);
  const aMult = (1 + difficulty * 0.75) * (isHome ? 0.88 : 1.12);
  return {
    lFor: (0.5 + s * 2.4) * fMult,
    lAga: (3.0 - s * 2.4) * aMult,
  };
}

function calcWLD(gf, ga) { return gf > ga ? "W" : gf < ga ? "L" : "D"; }

// ── UCL 2024-25 format simulation ────────────────────────────────
function simulateUCL(players) {
  const score = calcTeamScore(players);
  const s     = normalizeStrength(score);
  const seed  = players.reduce((acc, p) => acc + p.id * 17 + p.overall * 31, 0);
  const rng   = seededRNG(seed);
  const used  = [];
  const phases = [];
  let totalMatches = 0;

  // ── Lig Aşaması (8 maç) ──────────────────────────────────────
  const lgMatches = [];
  let pts = 0;

  for (let i = 0; i < 8; i++) {
    const leaguePool = rng() < 0.35 ? ROUND_OPPONENTS.league_strong : ROUND_OPPONENTS.league_weak;
    const opp  = pickOpp(rng, leaguePool, used); used.push(opp);
    const home = i % 2 === 0;
    const diff = oppDiff(opp);
    const { lFor, lAga } = roundLambdas(s, diff, home);
    const gf = Math.min(sampleGoals(rng, lFor), 6);
    const ga = Math.min(sampleGoals(rng, lAga), 6);
    const res = calcWLD(gf, ga);
    pts += res === "W" ? 3 : res === "D" ? 1 : 0;
    lgMatches.push({ opponent: opp, gf, ga, result: res, home });
    totalMatches++;
  }

  // Points → estimated rank (36 teams, 24 pts max)
  // Reduced noise so consistent teams are consistently rewarded
  const rankNoise  = (rng() - 0.5) * 4;
  const rank       = Math.round(Math.max(1, Math.min(36, 36 - (pts / 24) * 35 + rankNoise)));

  const lgWins  = lgMatches.filter(m => m.result === "W").length;
  const lgDraws = lgMatches.filter(m => m.result === "D").length;
  const lgLoss  = lgMatches.filter(m => m.result === "L").length;

  let lgOutcome = rank <= 8 ? "direct" : rank <= 24 ? "playoff" : "eliminated";
  const lgOutcomeLabel = {
    direct:    `${rank}. sıra → Doğrudan Son 16'ya`,
    playoff:   `${rank}. sıra → Play-off'a`,
    eliminated:`${rank}. sıra → Elendi`,
  }[lgOutcome];

  phases.push({
    id: "league", label: "Lig Aşaması",
    matches: lgMatches,
    summary: `${pts} puan · ${lgWins}G ${lgDraws}B ${lgLoss}M · ${lgOutcomeLabel}`,
    passed: lgOutcome !== "eliminated",
  });
  if (lgOutcome === "eliminated") return build("league", phases, totalMatches, score);

  // ── Play-off (sıralama 9-24) ──────────────────────────────────
  if (lgOutcome === "playoff") {
    const opp = pickOpp(rng, ROUND_OPPONENTS.playoff, used); used.push(opp);
    const { lFor: pf1, lAga: pa1 } = roundLambdas(s, 0.20, true);
    const { lFor: pf2, lAga: pa2 } = roundLambdas(s, 0.20, false);
    const gf1 = sampleGoals(rng, pf1), ga1 = sampleGoals(rng, pa1);
    const gf2 = sampleGoals(rng, pf2), ga2 = sampleGoals(rng, pa2);
    const aggF = gf1 + gf2, aggA = ga1 + ga2;
    const pen   = aggF === aggA ? simulatePenalties(rng, s, players) : null;
    const passed = aggF !== aggA ? aggF > aggA : pen.passed;
    totalMatches += 2;
    const penSuffix = pen ? ` · Pen: ${pen.myScore}-${pen.oppScore}` : "";
    phases.push({
      id: "playoff", label: "Play-off", opponent: opp,
      matches: [
        { opponent: opp, gf: gf1, ga: ga1, result: calcWLD(gf1, ga1), home: true,  leg: 1 },
        { opponent: opp, gf: gf2, ga: ga2, result: calcWLD(gf2, ga2), home: false, leg: 2 },
      ],
      aggFor: aggF, aggAga: aggA, penalties: pen,
      summary: `Toplam: ${aggF}-${aggA}${penSuffix} · ${passed ? "Geçti ✓" : "Elendi ✗"}`,
      passed,
    });
    if (!passed) return build("playoff", phases, totalMatches, score);
  }

  // ── Eleme Turları (Son 16 → Yarı Final) ──────────────────────
  const koRounds = [
    { id:"r16", label:"Son 16",       pool: ROUND_OPPONENTS.r16, diff: 0.36 },
    { id:"qf",  label:"Çeyrek Final", pool: ROUND_OPPONENTS.qf,  diff: 0.52 },
    { id:"sf",  label:"Yarı Final",   pool: ROUND_OPPONENTS.sf,  diff: 0.65 },
  ];

  for (const round of koRounds) {
    const opp = pickOpp(rng, round.pool, used); used.push(opp);
    const { lFor: f1, lAga: a1 } = roundLambdas(s, round.diff, true);
    const { lFor: f2, lAga: a2 } = roundLambdas(s, round.diff, false);
    const gf1 = sampleGoals(rng, f1), ga1 = sampleGoals(rng, a1);
    const gf2 = sampleGoals(rng, f2), ga2 = sampleGoals(rng, a2);
    const aggF = gf1 + gf2, aggA = ga1 + ga2;
    const pen   = aggF === aggA ? simulatePenalties(rng, s, players) : null;
    const passed = aggF !== aggA ? aggF > aggA : pen.passed;
    totalMatches += 2;
    const penSuffix = pen ? ` · Pen: ${pen.myScore}-${pen.oppScore}` : "";
    phases.push({
      id: round.id, label: round.label, opponent: opp,
      matches: [
        { opponent: opp, gf: gf1, ga: ga1, result: calcWLD(gf1, ga1), home: true,  leg: 1 },
        { opponent: opp, gf: gf2, ga: ga2, result: calcWLD(gf2, ga2), home: false, leg: 2 },
      ],
      aggFor: aggF, aggAga: aggA, penalties: pen,
      summary: `Toplam: ${aggF}-${aggA}${penSuffix} · ${passed ? "Geçti ✓" : "Elendi ✗"}`,
      passed,
    });
    if (!passed) return build(round.id, phases, totalMatches, score);
  }

  // ── Final ─────────────────────────────────────────────────────
  const finOpp = pickOpp(rng, ROUND_OPPONENTS.final, used);
  const { lFor: ff, lAga: fa } = roundLambdas(s, 0.76, false); // neutral venue
  const gff = sampleGoals(rng, ff), gfa = sampleGoals(rng, fa);
  const finPen    = gff === gfa ? simulatePenalties(rng, s, players) : null;
  const finPassed = gff !== gfa ? gff > gfa : finPen.passed;
  totalMatches++;
  const finPenSuffix = finPen ? ` · Pen: ${finPen.myScore}-${finPen.oppScore}` : "";
  phases.push({
    id: "final", label: "Final", opponent: finOpp,
    matches: [{ opponent: finOpp, gf: gff, ga: gfa, result: calcWLD(gff, gfa), home: null, leg: null }],
    penalties: finPen,
    summary: `${gff}-${gfa}${finPenSuffix} · ${finPassed ? "ŞAMPİYON! 🏆" : "Finalist 🥈"}`,
    passed: finPassed,
  });
  return build(finPassed ? "champion" : "final", phases, totalMatches, score);
}

function build(stage, phases, totalMatches, score) {
  const info = {
    league:   { grade:"F", icon:"🔴", title:"Lig Aşamasında Elendi"  },
    playoff:  { grade:"F", icon:"🟠", title:"Play-off'ta Elendi"      },
    r16:      { grade:"D", icon:"⚪", title:"Son 16'da Elendi"        },
    qf:       { grade:"C", icon:"⭐", title:"Çeyrek Finalde Elendi"   },
    sf:       { grade:"B", icon:"💎", title:"Yarı Finalde Elendi"     },
    final:    { grade:"A", icon:"🥈", title:"Finalist"                },
    champion: { grade:"S", icon:"🏆", title:"ŞAMPİYON!"             },
  }[stage];
  return { ...info, stage, phases, totalMatches, score: Math.round(score * 10) / 10 };
}
