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
  } else if (p.pos === "DEF") {
    const tp = p.apps > 0 ? p.tackles / p.apps : 0;
    const cr = p.apps > 0 ? p.cs      / p.apps : 0;
    score = norm(tp, 1, 6) * 0.30 + norm(cr, .1, .7) * 0.25
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.goals + p.assists, 0, 6) * 0.10
          + norm(p.passes / Math.max(p.apps, 1), 30, 90) * 0.10;
  } else if (p.pos === "MID") {
    score = norm(p.goals + p.assists, 0, 15) * 0.30
          + norm(p.rating, 6, 9) * 0.25
          + norm(p.passes  / Math.max(p.apps, 1), 40, 140) * 0.25
          + norm(p.tackles / Math.max(p.apps, 1), 1, 6)    * 0.20;
  } else {
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
  const defs = players.filter(p => p.pos === "DEF");
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

// ── Tiered opponent pools ─────────────────────────────────────────
// Each round only draws from an appropriate pool → no PSV in a final
const ROUND_OPPONENTS = {
  league:  [
    "RB Salzburg","Club Brugge","Celtic","Young Boys","PSV Eindhoven",
    "Feyenoord","Shakhtar Donetsk","Girona","Dinamo Zagreb","Red Star Belgrade",
    "Slavia Prague","PAOK","Rangers","Sporting CP","Galatasaray","Brest",
  ],
  playoff: [
    "Benfica","Porto","Lazio","Ajax","Monaco","Marseille",
    "Villarreal","Bayer Leverkusen","Feyenoord","Sevilla","Sporting CP",
  ],
  r16: [
    "AC Milan","Atlético de Madrid","Napoli","AS Roma","Tottenham Hotspur",
    "RB Leipzig","Villarreal","Sevilla","Porto","Benfica","Ajax",
    "Bayer Leverkusen","Borussia Dortmund","Chelsea",
  ],
  qf: [
    "Bayern München","Liverpool","Chelsea","Arsenal","Borussia Dortmund",
    "Juventus","Inter Milan","Atlético de Madrid","AC Milan","Napoli","RB Leipzig",
  ],
  sf: [
    "Real Madrid","Manchester City","Barcelona","PSG",
    "Bayern München","Liverpool","Arsenal","Inter Milan","Chelsea",
  ],
  final: [
    "Real Madrid","Manchester City","Bayern München","Barcelona",
    "PSG","Arsenal","Liverpool","Inter Milan",
  ],
};

function pickOpp(rng, pool, used) {
  const available = pool.filter(o => !used.includes(o));
  const src = available.length ? available : pool;
  return src[Math.floor(rng() * src.length)];
}

// ── Goal lambdas per round ────────────────────────────────────────
// s: team strength 0-1
// difficulty: 0=league → 0.68=final (opponent's relative strength)
// fMult/aMult scale goals as opponents get tougher
function roundLambdas(s, difficulty, isHome) {
  const fMult = (1 - difficulty * 0.28) * (isHome ? 1.10 : 0.90);
  const aMult = (1 + difficulty * 0.38) * (isHome ? 0.90 : 1.10);
  return {
    lFor: (0.7 + s * 2.0) * fMult,
    lAga: (2.7 - s * 2.0) * aMult,
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
    const opp  = pickOpp(rng, ROUND_OPPONENTS.league, used); used.push(opp);
    const home = i % 2 === 0;
    const { lFor, lAga } = roundLambdas(s, 0, home);
    const gf = sampleGoals(rng, lFor);
    const ga = sampleGoals(rng, lAga);
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
    const { lFor: pf1, lAga: pa1 } = roundLambdas(s, 0.14, true);
    const { lFor: pf2, lAga: pa2 } = roundLambdas(s, 0.14, false);
    const gf1 = sampleGoals(rng, pf1), ga1 = sampleGoals(rng, pa1);
    const gf2 = sampleGoals(rng, pf2), ga2 = sampleGoals(rng, pa2);
    const aggF = gf1 + gf2, aggA = ga1 + ga2;
    const passed = aggF !== aggA ? aggF > aggA : rng() < (0.3 + s * 0.45);
    totalMatches += 2;
    phases.push({
      id: "playoff", label: "Play-off", opponent: opp,
      matches: [
        { opponent: opp, gf: gf1, ga: ga1, result: calcWLD(gf1, ga1), home: true,  leg: 1 },
        { opponent: opp, gf: gf2, ga: ga2, result: calcWLD(gf2, ga2), home: false, leg: 2 },
      ],
      aggFor: aggF, aggAga: aggA,
      summary: `Toplam: ${aggF}-${aggA} · ${passed ? "Geçti ✓" : "Elendi ✗"}`,
      passed,
    });
    if (!passed) return build("playoff", phases, totalMatches, score);
  }

  // ── Eleme Turları (Son 16 → Yarı Final) ──────────────────────
  const koRounds = [
    { id:"r16", label:"Son 16",       pool: ROUND_OPPONENTS.r16, diff: 0.28 },
    { id:"qf",  label:"Çeyrek Final", pool: ROUND_OPPONENTS.qf,  diff: 0.43 },
    { id:"sf",  label:"Yarı Final",   pool: ROUND_OPPONENTS.sf,  diff: 0.57 },
  ];

  for (const round of koRounds) {
    const opp = pickOpp(rng, round.pool, used); used.push(opp);
    const { lFor: f1, lAga: a1 } = roundLambdas(s, round.diff, true);
    const { lFor: f2, lAga: a2 } = roundLambdas(s, round.diff, false);
    const gf1 = sampleGoals(rng, f1), ga1 = sampleGoals(rng, a1);
    const gf2 = sampleGoals(rng, f2), ga2 = sampleGoals(rng, a2);
    const aggF = gf1 + gf2, aggA = ga1 + ga2;
    const passed = aggF !== aggA ? aggF > aggA : rng() < (0.3 + s * 0.45);
    totalMatches += 2;
    phases.push({
      id: round.id, label: round.label, opponent: opp,
      matches: [
        { opponent: opp, gf: gf1, ga: ga1, result: calcWLD(gf1, ga1), home: true,  leg: 1 },
        { opponent: opp, gf: gf2, ga: ga2, result: calcWLD(gf2, ga2), home: false, leg: 2 },
      ],
      aggFor: aggF, aggAga: aggA,
      summary: `Toplam: ${aggF}-${aggA} · ${passed ? "Geçti ✓" : "Elendi ✗"}`,
      passed,
    });
    if (!passed) return build(round.id, phases, totalMatches, score);
  }

  // ── Final ─────────────────────────────────────────────────────
  const finOpp = pickOpp(rng, ROUND_OPPONENTS.final, used);
  const { lFor: ff, lAga: fa } = roundLambdas(s, 0.68, false); // neutral venue
  const gff = sampleGoals(rng, ff), gfa = sampleGoals(rng, fa);
  const finPassed = gff !== gfa ? gff > gfa : rng() < (0.3 + s * 0.45);
  totalMatches++;
  phases.push({
    id: "final", label: "Final", opponent: finOpp,
    matches: [{ opponent: finOpp, gf: gff, ga: gfa, result: calcWLD(gff, gfa), home: null, leg: null }],
    summary: `${gff}-${gfa} · ${finPassed ? "ŞAMPİYON! 🏆" : "Finalist 🥈"}`,
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
