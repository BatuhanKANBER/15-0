# 15–0

**Şampiyonlar Ligi Simülatörü**

100 farklı UCL kadrosundan 11 oyuncu seç, takımını kur ve kupayı kaldır.

---

## Ekranlar

```
┌─────────────────────────────────────────┐
│  🏆  15–0                               │
│  Şampiyonlar Ligi simülatörü            │
│                                         │
│  100 farklı UCL kadrosundan 11 oyuncu   │
│  seç, takımını kur, turu geç, kupayı    │
│  kaldır                                 │
│                                         │
│  [ ●●●● ] [ ●●●● ] [ ●●● ]            │
│  [ 4-3-3   4-4-2   4-5-1  ]            │
│  [ 3-5-2   3-4-3   5-3-2  ]            │
│                                         │
│         [ Oyna → ]                      │
└─────────────────────────────────────────┘
          Formasyon Seçimi
```

```
┌──────────────┬──────────────────────────┐
│ 2015-16      │         Takımım          │
│ FC Barcelona │  ○  ○  ○    (FWD)        │
│ ─────────────│     ○  ○    (MID)        │
│ 93 Messi ⚽  │  ○  ○  ○    (DEF)        │
│ 91 Neymar ⚽ │       ○     (KAL)        │
│ 88 Suárez ⚽ │                          │
│ 85 Iniesta 🅰 │  ○ = Boş                │
│ ─ DEVRE DIŞI │  ◉ = Seçili (yanıp söner)│
│ 82 Piqué 🛡  │  ● = Dolu               │
│              │                          │
│  [ ✕ İptal ] │                          │
└──────────────┴──────────────────────────┘
           Oyuncu Seçimi
```

```
┌─────────────────────────────────────────┐
│  🏆  ŞAMPİYON!                  S       │
│  18 maç · Güç skoru: 82.4               │
│                                         │
│  ✓ Lig Aşaması  8G 0B 0M → Doğrudan 16 │
│  ✓ Son 16       vs AC Milan   3-1 (agg) │
│  ✓ Çeyrek Final vs Bayern     2-1 (agg) │
│  ✓ Yarı Final   vs Liverpool  2-0 (agg) │
│  ✓ Final        vs Real Madrid  1-0     │
│                                         │
│  ▸ Takımım (11 oyuncu)                  │
│                                         │
│         [ Tekrar Oyna ]                 │
└─────────────────────────────────────────┘
              Sonuç Ekranı
```

---

## Nasıl Oynanır

1. **Formasyon seç** — 4-3-3, 4-4-2, 4-5-1, 3-5-2, 3-4-3, 5-3-2
2. **Roll'a bas** — rastgele bir UCL kadrosu gelir
3. **Oyuncu seç** — listeden bir oyuncuya tıkla; sahadaki mevki slotları yanıp söner
4. **Slota yerleştir** — yanıp sönen slotlardan birine tıkla, oyuncu yerleşir
5. **Tekrarla** — 11 oyuncuyu tamamlayana kadar farklı kadroları keşfet
6. **Sonucu gör** — takımın UCL'de ne kadar ileri gider?

> 3 adet kadro değiştirme hakkın var. İstemediğin kadroyu atlamak için 🔄 butonuna bas.

---

## Oyun Formatı (UCL 2024-25)

| Aşama | Format |
|-------|--------|
| Lig Aşaması | 8 maç, puana göre sıralama |
| Play-off | 9-24. sıra, çift maç |
| Son 16 | Çift maç |
| Çeyrek Final | Çift maç |
| Yarı Final | Çift maç |
| Final | Tek maç (İstanbul) |

Sonuç notu: **F** (lig aşaması) → **D** → **C** → **B** → **A** → **S** (şampiyon)

---

## Teknik Detaylar

Saf vanilla HTML + CSS + JavaScript. Framework yok, build adımı yok.

```
index.html   — yapı
style.css    — editorial tasarım (Oswald, krem parchment)
ui.js        — DOM render fonksiyonları
app.js       — oyun state ve event handler'lar
engine.js    — OVR hesabı + UCL simülasyonu (Poisson dağılımı)
data.js      — 100 UCL kadrosu
api.js       — kadro seçimi yardımcıları
```

### Simülasyon

- Oyuncuların OVR değeri istatistiklerden hesaplanır (gol, asist, kurtarış, pas, derece)
- Takım gücü: ortalama OVR + kaleci bonusu + defans bonusu − varyans cezası
- Maç skorları Poisson dağılımıyla üretilir; her tur zorluğu artar
- Aynı takım aynı sonucu verir (seeded PRNG)

---

## Çalıştırma

Herhangi bir statik sunucu veya doğrudan tarayıcıda aç:

```bash
# Python ile
python3 -m http.server 8080

# Node ile
npx serve .
```

Sonra `http://localhost:8080` adresi.

---

## Tasarım

[7a0.com.br](https://7a0.com.br) ilhamıyla editorial/gazete estetiği:

- Krem parchment zemin (`#e8dfc8`)
- **Oswald** condensed başlık fontu
- Sert siyah kenarlıklar + ofset gölge
- Gerçek futbol sahası (yeşil çizgili, daire markalı)
- Mobil-öncelikli responsive düzen (`dvh` birimleri, `clamp()` boyutlar)
