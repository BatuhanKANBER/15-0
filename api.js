function getDemoSeasonTeam(usedKeys = []) {
  const available = [];
  for (const s of DEMO_SEASONS) {
    for (const t of s.teams) {
      const key = `${s.season}::${t.team}`;
      if (!usedKeys.includes(key)) available.push({ season: s.season, ...t, key });
    }
  }
  if (!available.length) return null;
  return available[Math.floor(Math.random() * available.length)];
}
