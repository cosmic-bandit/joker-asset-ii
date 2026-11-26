// 🎄 Yılbaşı — ALTERNATİF 2 (kadife ikon seti) | birinci alternatifle aynı yerleşim; görseller ve hareket dili (peluş oyuncak fiziği) farklı | WEB + MOBILE
(() => {
  ['xmas-test-v1', 'xmas-test-v2', 'xmas-test-v3', 'xmas-test-v4', 'xmas-test-v5', 'xmas-test-v6', 'xmas-test-v7', 'xmas-test-v8', 'xmas-test-v9', 'xmas-test-v10', 'xmas-alt2'].forEach((id) => document.getElementById(id)?.remove());
  const CDN = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@594d5d488257/xmas/';
  const A2 = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@2e8fde859472/xmas/alt2/';   // alternatif 2 assetleri
  const isMob = /is-mobile/.test(document.documentElement.className + ' ' + document.body.className);
  const $ = (s) => document.querySelector(s);
  const cls = (el) => '.' + [...el.classList].join('.');
  const free = (el, p) => { const c = getComputedStyle(el, p); return ['none', 'normal'].includes(c.content) || c.display === 'none'; };
  const R = (el) => el.getBoundingClientRect();
  const SEP = '═'.repeat(60);
  const log = [];
  let css = '';

  const hm = $('.hdr-main-content-bc'), hdr = $('.header-bc'), img = $('.hdr-logo-bc');
  const hmR = R(hm);

  // ── Keyframes
  css += `
    @keyframes xmasSwing   { from { transform: rotate(-5deg); } to { transform: rotate(5deg); } }
    @keyframes xmasGlint   { 0%,76% { opacity:0; transform:scale(.2) rotate(0); } 84% { opacity:1; transform:scale(1.15) rotate(45deg); } 92% { opacity:.9; transform:scale(.85) rotate(70deg); } 100% { opacity:0; transform:scale(.2) rotate(90deg); } }
    @keyframes xmasBurst   { 0% { opacity:0; transform:scale(.15); } 6% { opacity:1; } 30% { opacity:1; transform:scale(1); } 55%,100% { opacity:0; transform:scale(1.1); } }
    @keyframes xmasBow     { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
    @keyframes xmasSweep   { 0% { background-position: 140% 0; } 22%,100% { background-position: -40% 0; } }
    @keyframes xmasGlow    { 0%,100% { opacity:.35; } 50% { opacity:1; } }
    /* ── Alternatif 2 hareket dili: peluş oyuncak fiziği — uzun bekleme, sonra yumuşak zıplama / esneme / sönümlü sallanma ── */
    @keyframes x2Hop      { 0%,68%,100% { transform: translate(-50%,-50%) scale(1,1); } 72% { transform: translate(-50%,-50%) scale(1.08,.9); } 78% { transform: translate(-50%,-64%) scale(.94,1.08); } 84% { transform: translate(-50%,-50%) scale(1.06,.93); } 89% { transform: translate(-50%,-50%) scale(.98,1.03); } 94% { transform: translate(-50%,-50%) scale(1.01,.99); } }
    @keyframes x2Konfeti  { 0%,100% { transform: translate(-50%,-50%) rotate(-2deg) scale(1); } 40% { transform: translate(-50%,-53%) rotate(1.5deg) scale(1.01); } 82% { transform: translate(-50%,-51%) rotate(0deg) scale(1); } 86% { transform: translate(-50%,-52%) rotate(2deg) scale(1.09); } 92% { transform: translate(-50%,-51%) rotate(-1deg) scale(.99); } }
    @keyframes x2Bungee   { 0%,78%,100% { transform: scaleY(1); } 82% { transform: scaleY(1.07); } 86% { transform: scaleY(.96); } 90% { transform: scaleY(1.03); } 94% { transform: scaleY(.99); } }
    @keyframes x2WobbleL  { 0%,58%,100% { transform: rotate(0deg); } 64% { transform: rotate(2.2deg); } 70% { transform: rotate(-1.4deg); } 76% { transform: rotate(.8deg); } 82% { transform: rotate(-.35deg); } 88% { transform: rotate(0deg); } }
    @keyframes x2WobbleR  { 0%,58%,100% { transform: rotate(0deg); } 64% { transform: rotate(-2.2deg); } 70% { transform: rotate(1.4deg); } 76% { transform: rotate(-.8deg); } 82% { transform: rotate(.35deg); } 88% { transform: rotate(0deg); } }
    @keyframes x2HatBoing { 0%,72%,100% { transform: scale(1,1) rotate(0deg); } 76% { transform: scale(1.07,.88) rotate(0deg); } 81% { transform: scale(.94,1.1) rotate(-5deg); } 86% { transform: scale(1.03,.96) rotate(3deg); } 91% { transform: scale(.99,1.02) rotate(-1.5deg); } 96% { transform: scale(1,1) rotate(.5deg); } }
    @keyframes x2Sprig    { 0%,66%,100% { transform: rotate(0deg); } 72% { transform: rotate(-9deg); } 78% { transform: rotate(6deg); } 84% { transform: rotate(-3deg); } 90% { transform: rotate(1deg); } }
    @keyframes x2Ding     { 0%,52%,100% { transform: rotate(0deg); } 57% { transform: rotate(16deg); } 63% { transform: rotate(-11deg); } 69% { transform: rotate(7deg); } 75% { transform: rotate(-4deg); } 81% { transform: rotate(2deg); } 87% { transform: rotate(-.8deg); } 93% { transform: rotate(0deg); } }
    @keyframes x2CornerZ  { from { z-index: 1000; } to { z-index: 20; } }
    @keyframes xmas2027    { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.04); } }
  `;
  const SHEEN = `linear-gradient(115deg, transparent 38%, rgba(255,248,225,.0) 42%, rgba(255,248,225,.85) 50%, rgba(255,248,225,0) 58%, transparent 62%) 0 0 / 300% 100% no-repeat`;

  // ── 1) Logo Jester parlaması
  let jx = 23, jy = 21;
  if (img) { const r = R(img); jx = Math.round(r.left - hmR.left + r.width * 0.0694); jy = Math.round(r.top - hmR.top + r.height * 0.233); }
  const g = isMob ? 20 : 30;
  const GLINT = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><radialGradient id='r'><stop offset='0' stop-color='%23fff'/><stop offset='.3' stop-color='%23ffe9a8' stop-opacity='.85'/><stop offset='1' stop-color='%23fbbf24' stop-opacity='0'/></radialGradient></defs><circle cx='50' cy='50' r='30' fill='url(%23r)'/><path d='M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45Z' fill='%23fff'/></svg>`;
  css += `
    /* 3 · Logo Jester parlaması */
    .logo::after { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:6 !important;
      left:${jx - g / 2}px !important; top:${jy - g / 2}px !important; width:${g}px !important; height:${g}px !important;
      background:url("${GLINT}") center / contain no-repeat !important; opacity:0;
      animation: xmasGlint 4.5s ease-in-out infinite !important; }`;
  log.push(`👑 Jester merkezi: x=${jx} y=${jy}`);

  // ── 6) Kadife girland
  const hdrBottomInHm = Math.round(R(hdr).bottom - hmR.top);
  const GH = isMob ? 36 : 46, GW = Math.round(GH * 294 / 96 * 10) / 10;   // kadife girland karesi
  css += `
    /* 6 · Kadife girland (kurdeleli çam kuşağı) — 6 sn'de bir lastik gibi esneyip yerine oturur */
    .header-bc::after { content:'' !important; position:absolute !important; left:0 !important; right:0 !important; bottom:-${GH - 6}px !important; height:${GH}px !important;
      pointer-events:none !important; z-index:1 !important;
      background:url("${A2}xmas2-garland.webp") 0 0 / ${GW}px ${GH}px repeat-x !important; filter: drop-shadow(0 3px 4px rgba(0,0,0,.5));
      transform-origin: 50% 0; animation: x2Bungee 6s cubic-bezier(.3,.7,.4,1) 1s infinite !important; }`;
  log.push(`💡 Header alt kenarı (hdr-main-content'e göre): ${hdrBottomInHm}px`);

  // ── 1+2) Slider köşe süsleri — sol ve sağ üst köşeye yaslanır
  const sl = $('.hm-row-bc.has-slider');
  if (sl) {
    const cw = isMob ? 140 : 300;                                   // köşe genişliği
    const hl = Math.round(cw * 603 / 900), hr = hl;
    const off = isMob ? { t: -4, s: -4 } : { t: -12, s: -12 };
    css += `
    .hm-row-bc.has-slider { position: relative !important; }
    /* Sol üst köşe — en üst katman */
    .hm-row-bc.has-slider::before { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:20;
      top:${off.t}px !important; left:${off.s}px !important; width:${cw}px !important; height:${hl}px !important;
      background:url("${A2}xmas2-corner-l.webp") left top / contain no-repeat !important;
      transform-origin: 0 0 !important; filter: drop-shadow(0 6px 10px rgba(0,0,0,.4));
      animation: x2WobbleL 7s cubic-bezier(.3,.7,.4,1) infinite, x2CornerZ linear both !important;
      animation-timeline: auto, scroll(root) !important; animation-range: normal, 0px 12px !important; }
    /* Sağ üst köşe — en üst katman */
    .hm-row-bc.has-slider::after { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:20;
      top:${off.t}px !important; right:${off.s}px !important; width:${cw}px !important; height:${hr}px !important;
      background:url("${A2}xmas2-corner-r.webp") right top / contain no-repeat !important;
      transform-origin: 100% 0 !important; filter: drop-shadow(0 6px 10px rgba(0,0,0,.4));
      animation: x2WobbleR 7s cubic-bezier(.3,.7,.4,1) 1.4s infinite, x2CornerZ linear both !important;
      animation-timeline: auto, scroll(root) !important; animation-range: normal, 0px 12px !important; }`;
    // z-index: sayfa en üstteyken 1000 (header girlandının ve slider sayacının da üstünde); 12px kaydırınca 20'ye iner → sticky header'ın üstüne taşmaz.
    // Kaydırmaya bağlı animasyonu desteklemeyen tarayıcıda sabit 20 kalır (slider'ın kendi öğelerinin üstünde).
    log.push(`🌲 Köşe süsleri: ${cw}px genişlik`);

    // ── 2b) Örgü iplerden sarkan kadife süsler — her köşede 2 ip (kısa: yatay daldan, uzun: dikey dalın ucundan) + ortada 2 ip (girlandın altından)
    const k = cw / 300;
    const f1 = (n) => Math.round(n * 10) / 10;
    css += `
    @keyframes x2SwingA { from { transform: rotate(-7deg); } to { transform: rotate(7deg); } }
    @keyframes x2SwingB { from { transform: rotate(5deg); } to { transform: rotate(-5deg); } }
    @keyframes x2SwingC { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }`;
    // köşe ipleri: köşe kutusu koordinatları (300 px referans); x = ipin merkezi, y = ipin üst ucu (dalın arkasında)
    const CORNER = {
      L: [{ host: '.hm-row-bc.has-slider .slider-bc::before', x: 156, y: 40, len: 92, o: 'star', w: 50, h: 44, sw: 'x2SwingA 3.3s', d: -0.4 },
          { host: '.hm-row-bc.has-slider > .hm-row-bc-inner::before', x: 47, y: 180, len: 190, o: 'ball', w: 52, h: 48, sw: 'x2SwingC 4.6s', d: -1.9 }],
      R: [{ host: '.hm-row-bc.has-slider .slider-bc::after', x: 156, y: 40, len: 84, o: 'sock', w: 46, h: 57, sw: 'x2SwingB 3.7s', d: -1.2 },
          { host: '.hm-row-bc.has-slider > .hm-row-bc-inner::after', x: 47, y: 180, len: 176, o: 'disco2', w: 50, h: 45, sw: 'x2SwingC 4.9s', d: -3.1 }],
    };
    // orta ipler: slider'ın üst kenarından (girlandın arkasından) iner; konum slider genişliğinin yüzdesi
    const MID_R = [
      { host: '.hm-row-bc.has-slider .slider-bc > :first-child::before', pct: 44, len: 74, o: 'bells', w: 60, h: 56, sw: 'x2SwingB 3.4s', d: -0.8 },
      { host: '.hm-row-bc.has-slider .slider-bc > :first-child::after', pct: 52.5, len: 80, o: 'gift', w: 64, h: 60, sw: 'x2SwingA 3.9s', d: -2.2 },
    ];
    const okFree = (sel) => { const [base, ps] = sel.split('::'); const el = $(base); return el && free(el, '::' + ps); };
    const ORN = (r, w, h, len) => `background: url("${A2}xmas2-orn-${r.o}.webp") center bottom / ${f1(w)}px auto no-repeat, url("${A2}xmas2-rope.webp") center top / ${f1(7 * k)}px auto no-repeat !important;
      filter: drop-shadow(0 4px 5px rgba(0,0,0,.45)); transform-origin: 50% 0 !important;
      width:${f1(w)}px !important; height:${f1(len + h)}px !important;
      animation: ${r.sw} ease-in-out ${r.d}s infinite alternate !important;`;
    const hostsOK = [];
    [['L', 'left'], ['R', 'right']].forEach(([key, edge]) => CORNER[key].forEach((r) => {
      if (!okFree(r.host)) { log.push(`⚠️ ip atlandı: ${r.host}`); return; }
      const w = r.w * k, h = r.h * k, len = r.len * k;
      css += `
    ${r.host} { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:15 !important;
      top:${f1(off.t + r.y * k)}px !important; ${edge}:${f1(off.s + r.x * k - w / 2)}px !important; ${ORN(r, w, h, len)} }`;
      hostsOK.push(`${key}:${r.o}`);
    }));
    MID_R.forEach((r) => {
      if (!okFree(r.host)) { log.push(`⚠️ orta ip atlandı: ${r.host}`); return; }
      const km = isMob ? 0.6 : 1, w = r.w * km, h = r.h * km, len = r.len * km;
      css += `
    ${r.host} { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:15 !important;
      top:0 !important; left:calc(${r.pct}% - ${f1(w / 2)}px) !important; ${ORN(r, w, h, len).replace(`${f1(7 * k)}px auto`, `${f1(7 * km)}px auto`)} }`;
      hostsOK.push(`orta:${r.o}`);
    });
    log.push(`🪢 Örgü ipten sarkan süsler: ${hostsOK.join(', ')}`);
  }

  // ── 4) Web header "2027" sahnesi — boşluğa göre ortalanır, yer yoksa kendini gizler
  if (!isMob) {
    const aff = $('.logo-container > a.header-icon'), usr = $('.hdr-user-bc');
    const A = aff ? Math.round(R(aff).right - hmR.left) : 380;
    const Rw = usr ? Math.round(hmR.right - R(usr).left) : 950;
    const scene = `position:absolute !important; pointer-events:none !important;
      left:calc((${A}px + 100% - ${Rw}px) / 2) !important; top:50% !important;
      width:clamp(0px, calc(100% - ${A}px - ${Rw}px - 50px), 240px) !important; aspect-ratio: 3 / 1 !important; height:auto !important;
      transform: translate(-50%,-50%);`;
    // kutlama katmanı: yazının 1.5 katı genişlikte, 12:5 oranında; patlangaçlar header içinde kalsın diye biraz yukarı kaydırılmış
    const sceneFX = scene.replace(`width:clamp(0px, calc(100% - ${A}px - ${Rw}px - 50px), 240px)`, `width:calc(1.5 * clamp(0px, calc(100% - ${A}px - ${Rw}px - 50px), 240px))`)
      .replace('aspect-ratio: 3 / 1', 'aspect-ratio: 12 / 5').replace('transform: translate(-50%,-50%);', 'transform: translate(-50%,-70%);');
    css += `
    /* 4 · "2027" — kutlama: iki kadife patlangaç konfeti fırlatır, ardından 3 peluş havai fişek (roket + patlama) — 4.5 sn döngü */
    .logo-container::before { content:'' !important; ${sceneFX} z-index:1 !important;
      background:url("${A2}xmas2-fx.webp") center / contain no-repeat !important; animation: none !important; }
    /* 4 · "2027" — kadife altın yazı */
    .hdr-main-content-bc::after { content:'' !important; ${scene} z-index:3 !important;
      background:url("${A2}xmas2-2027.webp") center / contain no-repeat !important;
      filter: drop-shadow(0 0 8px rgba(251,191,36,.45)); transform-origin: 50% 100% !important; animation: x2Hop 4.5s ease-in-out infinite !important; }
    /* 4 · "2027" — yazının üstünden ışık geçişi */
    .logo-container::after { content:'' !important; ${scene} z-index:4 !important;
      background:${SHEEN}; -webkit-mask:url("${A2}xmas2-2027.webp") center / contain no-repeat; mask:url("${A2}xmas2-2027.webp") center / contain no-repeat;
      transform-origin: 50% 100% !important; animation: x2Hop 4.5s ease-in-out infinite !important; opacity: 0 !important; }`;   // kadifede ışık süpürmesi yok — katman kapalı
    log.push(`🎆 Header boşluğu: affiliate sağı=${A}px | sağ grup genişliği=${Rw}px | boşluk=${Math.round(hmR.width - A - Rw)}px → sahne ${Math.max(0, Math.min(240, Math.round(hmR.width - A - Rw - 50)))}px`);
  } else {
    // Mobile: header'da 2027'ye yer yok → kutlama logodaki şapkanın arkasında (aşağıda, logo bloğunda)
  }

  // ── 5b) Dönen border'lar → gold-şampanya (custom.css'teki conic-gradient kuralları klonlanır)
  const recol = [];
  const swap = (t) => t.replace(/#b576fa/gi, '#f6e3b0').replace(/rgba\(\s*181\s*,\s*118\s*,\s*250\s*,/g, 'rgba(246, 227, 176,').replace(/rgb\(\s*181\s*,\s*118\s*,\s*250\s*\)/g, 'rgb(246, 227, 176)');
  [...document.styleSheets].filter((s) => (s.href || '').includes('custom.css')).forEach((sh) => {
    let rules; try { rules = sh.cssRules; } catch { return; }
    const walk = (list, wrap) => [...list].forEach((r) => {
      if (r instanceof CSSMediaRule) return walk(r.cssRules, r.conditionText);
      if (!(r instanceof CSSStyleRule)) return;
      if (/conic-gradient/.test(r.cssText) && /b576fa|181,\s*118,\s*250/i.test(r.cssText)) {
        const t = swap(r.cssText); recol.push(r.selectorText);
        css += wrap ? `\n    @media ${wrap} { ${t} }` : `\n    ${t}`;
      }
    });
    walk(rules, null);
  });
  log.push(`🥂 Gold-şampanyaya çekilen dönen border kuralı: ${recol.length}`);
  recol.slice(0, 12).forEach((s) => log.push(`     • ${s.slice(0, 110)}`));


  // ── Tematik logo: kadife harfler (32) + büyütülmüş kırmızı-beyaz Jester (29), ayrı katman (orijinal img görünmez, aynı kutuya yeni logo)
  {
    const logo = $('.logo'), lr = logo ? R(logo) : null, ir = img ? R(img) : null;
    const lift = isMob ? 0 : -7.4;   // web: "t" harfi Affiliate ile hizalı
    css += `
    img.hdr-logo-bc { object-position: -99999px 0 !important;
      background: url("${A2}xmas2-logo-letters.webp") left center / contain no-repeat border-box !important;
      ${lift ? `transform: translateY(${lift}px) !important;` : ''} }
    .logo::after { content: none !important; }`;
    if (isMob && logo && img) {
      // mobile kutlama: şapkanın arkasında iki peluş havai fişek (4.5 sn döngü)
      const bw = ir.width, bh = ir.height, rw = Math.min(bw, bh * 720 / 267), rh = rw * 267 / 720, oy = (bh - rh) / 2;
      const cx = ir.left - lr.left + 60 / 720 * rw, cy = ir.top - lr.top + oy + 57 / 267 * rh, fw = 150, fh = 100;
      css += `
    .logo::after { content: "" !important; position: absolute !important; pointer-events: none !important; z-index: -1 !important;
      left: ${Math.round(cx - fw / 2)}px !important; top: ${Math.round(cy - fh / 2)}px !important; width: ${fw}px !important; height: ${fh}px !important;
      background: url("${A2}xmas2-fx-mob.webp") center / contain no-repeat !important; animation: none !important; opacity: 1 !important; }`;
    }
    if (logo && img) {
      // şapka katmanı img kutusunun birebir üstüne; şapka tabanı (J'nin üstü) dönme/esneme merkezi
      const bw = ir.width, bh = ir.height, rw = Math.min(bw, bh * 720 / 267), rh = rw * 267 / 720, oy = (bh - rh) / 2;
      const ox = Math.round(60 / 720 * rw * 10) / 10, oyy = Math.round((oy + 103 / 267 * rh) * 10) / 10;   // Jester'ın kürk bandının ortası
      css += `
    .logo { position: relative !important; }
    .logo::before { content: "" !important; position: absolute !important; pointer-events: none !important; z-index: 2 !important; opacity: 1 !important;
      left: ${Math.round((ir.left - lr.left) * 10) / 10}px !important; top: ${Math.round((ir.top - lr.top - (img.style.transform ? 0 : 0)) * 10) / 10}px !important;
      width: ${bw}px !important; height: ${bh}px !important;
      background: url("${A2}xmas2-logo-hat.webp") left center / contain no-repeat !important;
      ${lift ? `translate: 0 ${lift}px;` : ''}
      transform-origin: ${ox}px ${oyy}px !important; animation: x2HatBoing 5s cubic-bezier(.3,.7,.4,1) 2s infinite !important; }`;
    }
  }
  log.push('🎅 Logo: kadife Jester şapkası' + (isMob ? '' : ' (t ↔ Affiliate hizalı)'));


  // ══ ORTA BÖLÜM ════════════════════════════════════════════
  const MID = A2;
  css += `
`;

  // ── 7) Bölüm başlıklarının önüne çam dalı + kokina
  if ($('.sectionTitleText') && free($('.sectionTitleText'), '::before')) {
    css += `
    .sectionTitleText::before { content: "" !important; display: inline-block !important;
      width: ${isMob ? 34 : 42}px !important; height: ${isMob ? 22 : 27}px !important; margin: -6px 8px -6px -2px !important; vertical-align: middle !important;
      background: url("${MID}xmas2-sprig.webp") center / contain no-repeat !important;
      transform-origin: 10% 70%; animation: x2Sprig 5s cubic-bezier(.3,.7,.4,1) infinite; }
    .hm-row-bc:nth-child(even) .sectionTitleText::before { animation-delay: -1.7s; }
    .hm-row-bc:nth-child(3n) .sectionTitleText::before { animation-delay: -3.3s; }`;
    log.push(`🌿 Başlık dalı: ${document.querySelectorAll('.sectionTitleText').length} başlık`);
  }

  // ── 8) Bölüm başlığı satırına sarkan süsler (kırmızı kadife top + disko topu, ince altın iple)
  const st0 = $('.sectionTitle');
  const stt = $('.sectionTitleText');
  if (isMob && stt && free(stt, '::after')) {
    // Mobile: bölümler arası boşluk çok dar — süs çifti başlık metninin arkasında, satır yüksekliği içinde
    const ROPE = 'rgba(236,198,118,.9)';
    css += `
    .sectionTitleText::after { content: "" !important; display: inline-block !important; vertical-align: middle !important;
      width: 46px !important; height: 30px !important; margin: -8px 0 -8px 10px !important; pointer-events: none !important;
      background:
        url("${MID}xmas2-orn-red.webp") 0 9px / 22px 20px no-repeat,
        linear-gradient(${ROPE}, ${ROPE}) 11px 0 / 1px 10px no-repeat,
        url("${MID}xmas2-orn-disco.webp") 26px 4px / 20px 18px no-repeat,
        linear-gradient(${ROPE}, ${ROPE}) 36px 0 / 1px 5px no-repeat !important;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.45)); transform-origin: 50% 0; animation: x2Ding 6s cubic-bezier(.3,.7,.4,1) infinite; }
    .hm-row-bc:nth-child(even) .sectionTitleText::after { animation-delay: -2.4s; }
    .hm-row-bc:nth-child(3n) .sectionTitleText::after { animation-delay: -4.1s; }`;
    log.push('🔮 Sarkan süsler (mobile): başlık metninin arkasında');
  } else if (!isMob && st0 && free(st0, '::before') && free(st0, '::after')) {
    const k = isMob ? 0.75 : 1;
    const g = { w: Math.round(27 * k), h: Math.round(25 * k), t: Math.round(7 * k) };    // kırmızı kadife top
    const v = { w: Math.round(24 * k), h: Math.round(22 * k), t: Math.round(3 * k) };     // disko topu
    const up = 0;   // başlığın üstü çoğu bölümde overflow:hidden ile kesiliyor → süsler başlık satırının içinde asılı
    const ROPE = (t) => `linear-gradient(rgba(236,198,118,.9), rgba(236,198,118,.9)) center top / 1px ${t}px no-repeat`;
    const P = isMob ? ['58%', '66%', '70%', '78%', '50%', '59%'] : ['46%', 'calc(46% + 36px)', '57%', 'calc(57% + 34px)', '38%', 'calc(38% + 38px)'];
    css += `
    .sectionTitle { position: relative !important; }
    .sectionTitle::before, .sectionTitle::after { content: "" !important; position: absolute !important; top: ${up}px !important;
      pointer-events: none !important; z-index: 2 !important; transform-origin: 50% 0;
      filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); animation: x2Ding 6s cubic-bezier(.3,.7,.4,1) infinite; }
    .sectionTitle::before { left: ${P[0]} !important; width: ${g.w}px !important; height: ${g.t + g.h}px !important;
      background: url("${MID}xmas2-orn-red.webp") center bottom / ${g.w}px ${g.h}px no-repeat, ${ROPE(g.t)} !important; }
    .sectionTitle::after { left: ${P[1]} !important; width: ${v.w}px !important; height: ${v.t + v.h}px !important;
      background: url("${MID}xmas2-orn-disco.webp") center bottom / ${v.w}px ${v.h}px no-repeat, ${ROPE(v.t)} !important;
      animation-delay: .35s; }
    .hm-row-bc:nth-child(even) .sectionTitle::before { left: ${P[2]} !important; animation-delay: -2.4s; }
    .hm-row-bc:nth-child(even) .sectionTitle::after  { animation-delay: -2.05s; }
    .hm-row-bc:nth-child(3n) .sectionTitle::before { animation-delay: -4.1s; }
    .hm-row-bc:nth-child(3n) .sectionTitle::after  { animation-delay: -3.75s; }
    .hm-row-bc:nth-child(even) .sectionTitle::after  { left: ${P[3]} !important; }
    .hm-row-bc:nth-child(3n) .sectionTitle::before { left: ${P[5]} !important; }
    .hm-row-bc:nth-child(3n) .sectionTitle::after  { left: ${P[4]} !important; }`;
    log.push('🔮 Sarkan süsler: tüm bölüm başlıkları');
  } else log.push('⚠️ .sectionTitle pseudo dolu/yok — sarkan süs atlandı');

  // ── 9) Kartların üstünde kar birikintisi
  // Kar: ortada tekrar eden doku + iki uçta doğal, yuvarlanıp köşeden sarkan kar kapağı.
  // Doku uç kapağın dış kısmında maskeyle kesilir, kapak görseli üstüne biner (dikiş görünmez).
  const SNOW_BG = (h, off) => `url("${MID}xmas2-snow-capl.webp") left top / auto ${h}px no-repeat, url("${MID}xmas2-snow-capr.webp") right top / auto ${h}px no-repeat, url("${MID}xmas2-snow-tile.webp") ${off}px 0 / auto ${h}px repeat-x`;  // kadife kar
  const SNOW = (h) => {
    const cl = Math.round(h * 24 / 32 * 10) / 10, cr = Math.round(h * 24 / 32 * 10) / 10;
    const M = `url("${MID}xmas2-snow-maskl.webp") left top / auto 100% no-repeat, linear-gradient(#000, #000) center top / calc(100% - ${Math.round((cl + cr - 2) * 10) / 10}px) 100% no-repeat, url("${MID}xmas2-snow-maskr.webp") right top / auto 100% no-repeat`;
    return `content: "" !important; position: absolute !important; pointer-events: none !important; z-index: 6 !important;
      height: ${h}px !important; background: ${SNOW_BG(h, 0)} !important;
      -webkit-mask: ${M}; mask: ${M};
      filter: drop-shadow(0 1px 1.5px rgba(10,5,30,.35));
      transform-origin: 50% 0; transition: transform .5s cubic-bezier(.34,1.8,.5,1);`;
  };
  const snowT = [
    // [seçici, pseudo, top, yan boşluk, yükseklik, position ekle?]
    ...(isMob ? [] : [['.product-banner-container-bc.product-banner-without-titles .product-banner-info-bc', '::after', -1, 4, 16, false]]),  // mobile'da bu pseudo'lar custom.css'te dolu
    ['.featuredGamesVersion1 .swiper-slide', '::after', 0, 1, 14, false],
    ['.expressWidget', '::after', -1, 3, 16, false, true],
    ['.bbAiRecBetsItem', '::after', 0, 1, 15, false, true],
    ['.casino-big-win-replays-card', '::before', -1, 6, 15, false, true],
    isMob ? ['.tournamentsWidgetItem', '::after', 0, 1, 15, true, true]        // mobile: swiper yok, kart doğrudan
          : ['.tournamentsWidget .swiper-slide', '::after', 0, 1, 15, false, true],
    ['.casinoGameItemContent', '::after', 0, 0, 13, false, true],
    ['.casinoRandomGameWidget', '::after', -1, 6, 16, true, true],
    ['.jackpot-pools-widget .swiper-slide', '::after', 0, 1, 14, false],
    ['.casino-live-wins', '::after', -1, 4, 16, true, true],
  ];
  const snowOK = [];
  snowT.forEach(([sel, ps, top, side, h, needPos, lazy]) => {
    const all = [...document.querySelectorAll(sel)]; if (!all.length && !lazy) return;  // lazy: geç yüklenen kartlar (pseudo'su boş olduğu doğrulandı)
    if (!all.every((e) => free(e, ps))) { log.push(`⚠️ kar atlandı (pseudo dolu): ${sel}${ps}`); return; }
    const sh = isMob ? Math.round(h * 0.85) : h;
    css += `
    ${needPos ? `${sel} { position: relative !important; }` : ''}
    ${sel}${ps} { ${SNOW(sh)} top: ${top}px !important; left: ${side}px !important; right: ${side}px !important; }
    ${sel}:nth-child(3n+2)${ps} { background: ${SNOW_BG(sh, -19)} !important; }
    ${sel}:nth-child(3n)${ps} { background: ${SNOW_BG(sh, -38)} !important; }
    ${sel}:hover${ps} { transform: scale(1.03, .78); }`;
    snowOK.push(sel);
  });
  log.push(`❄️ Kar birikintisi: ${snowOK.length} kart tipi → ${snowOK.join(', ')}`);

  // ── 10) Header butonlarının üstünde kar (Bonuslar, Bonus Talep, Joker TV, Telegram, Giriş, Kayıt)
  {
    const hH = isMob ? 10 : 12, side = -3;   // negatif: kar butonun iki yanından hafif taşar, uçlar köşeden sarkar
    const hcb = $('.header-custom-buttons'), hcbA = hcb && hcb.querySelector('a');
    const hub = $('.hdr-user-bc'), signIn = $('.hdr-user-bc .sign-in'), reg = $('.hdr-user-bc .register');
    const done = [];
    if (hcb && hcbA && free(hcb, '::after')) {
      const ml = parseFloat(getComputedStyle(hcbA).marginLeft) || 0;   // buton, sarmalayıcının içinde soldan boşluklu
      css += `
    .header-custom-buttons { position: relative !important; }
    .header-custom-buttons::after { ${SNOW(hH)} top: -2px !important; left: ${ml + side}px !important; right: ${side}px !important; }
    .header-custom-buttons:hover::after { transform: scale(1.04, .75); }`;
      done.push('özel butonlar');
    }
    if (reg && free(reg, '::after')) {
      css += `
    .hdr-user-bc .register { position: relative !important; }
    .hdr-user-bc .register::after { ${SNOW(hH)} top: -2px !important; left: ${side}px !important; right: ${side}px !important; }
    .hdr-user-bc .register:hover::after { transform: scale(1.04, .75); }`;
      done.push('Kayıt');
    }
    if (signIn && free(signIn, '::after')) {               // mobile: Giriş'in ::after'ı boş
      css += `
    .hdr-user-bc .sign-in { position: relative !important; }
    .hdr-user-bc .sign-in::after { ${SNOW(hH)} top: -2px !important; left: ${side}px !important; right: ${side}px !important; }
    .hdr-user-bc .sign-in:hover::after { transform: scale(1.04, .75); }`;
      done.push('Giriş');
    } else if (hub && signIn && free(hub, '::before')) {   // web: Giriş'in iki pseudo'su da dolu → kapsayıcının ::before'u ile üstüne konur
      const hr = R(hub), sr = R(signIn);
      const hubSel = `${cls(hub.parentElement)} > .hdr-user-bc`;
      css += `
    ${hubSel} { position: relative !important; }
    ${hubSel}::before { ${SNOW(hH)} top: ${Math.round(sr.top - hr.top) - 2}px !important; right: ${Math.round(hr.right - sr.right) + side}px !important; width: ${Math.round(sr.width) - 2 * side}px !important; }
    ${hubSel}:has(.sign-in:hover)::before { transform: scale(1.04, .75); }`;   // sağdan konum: Kayıt sabit genişlikte, soldaki butonlar daralsa da kaymaz
      done.push('Giriş');
    }
    // mobile: BONUSLAR / BONUS TALEP / JOKER TV / TELEGRAM hapları — kendi pseudo'ları dolu (ikon + yazı),
    // tek bir kapsayıcı ::after içinde her hapa ayrı kar katmanı (sol uç + orta + sağ uç) yerleştirilir
    const pillBox = $('.hdr-additional-info .hdr-user-bc');
    const pills = pillBox ? [...pillBox.querySelectorAll(':scope > a.user-nav-icon')] : [];
    if (pills.length && free(pillBox, '::after')) {
      const ph = isMob ? 9 : 11, cl = ph * 24 / 32, cr = ph * 24 / 32, br = R(pillBox);
      const f = (n) => Math.round(n * 10) / 10;
      const layers = [];
      pills.forEach((a) => {
        const r = R(a), x = r.left - br.left - 2, w = r.width + 4;
        layers.push(`url("${MID}xmas2-snow-capl.webp") ${f(x)}px 0 / auto ${ph}px no-repeat`);
        layers.push(`url("${MID}xmas2-snow-capr.webp") ${f(x + w - cr)}px 0 / auto ${ph}px no-repeat`);
        layers.push(`url("${MID}xmas2-snow-tile.webp") ${f(x + cl * 0.55)}px 0 / ${f(w - cl * 0.55 - cr * 0.55)}px ${ph}px no-repeat`);
      });
      const pt = Math.round(R(pills[0]).top - br.top) - 2;
      css += `
    .hdr-additional-info .hdr-user-bc { position: relative !important; }
    .hdr-additional-info .hdr-user-bc::after { content: "" !important; position: absolute !important; left: 0 !important; right: 0 !important;
      top: ${pt}px !important; height: ${ph}px !important; pointer-events: none !important; z-index: 6 !important;
      background: ${layers.join(',\n        ')} !important;
      filter: drop-shadow(0 1px 1px rgba(10,5,30,.35)); }`;
      done.push(`${pills.length} hap buton`);
    }
    log.push(`❄️ Header buton karı: ${done.join(', ') || 'yok'}`);
  }

  // ── Hareket azaltma
  css += `
    @media (prefers-reduced-motion: reduce) {
      .logo::before, .logo::after, .header-bc::before, .header-bc::after, .hdr-main-content-bc::before, .hdr-main-content-bc::after,
      .layout-header-holder-bc::before, .layout-header-holder-bc::after, .logo-container::before, .logo-container::after,
      .layout-content-holder-bc *::before, .layout-content-holder-bc *::after, .sectionTitle::before, .sectionTitle::after, .sectionTitleText::before, .sectionTitleText::after, .hm-row-bc.has-slider::before, .hm-row-bc.has-slider::after, .hm-row-bc.has-slider *::before, .hm-row-bc.has-slider *::after { animation: none !important; transition: none !important; }
    }`;

  const st = document.createElement('style');
  st.id = 'xmas-alt2';
  st.textContent = css;
  document.head.appendChild(st);

  // ── Rapor
  console.log(SEP);
  console.log(`🎄 Alternatif 2 (kadife) | ${isMob ? 'MOBILE' : 'WEB'} | viewport ${innerWidth}×${innerHeight}`);
  log.forEach((l) => console.log(l));
  const chk = (s, p) => { const el = $(s); if (!el) return `❌ ${s} yok`; const c = getComputedStyle(el, p);
    return `${c.content !== 'none' ? '🟢' : '⚪'} ${s}${p} anim=${c.animationName} ${c.width}×${c.height}`; };
  ['.logo::after', '.logo::before', '.header-bc::after', '.header-bc::before', '.hdr-main-content-bc::before', '.hdr-main-content-bc::after',
    '.layout-header-holder-bc::before', '.layout-header-holder-bc::after', '.logo-container::before', '.logo-container::after']
    .forEach((x) => { const [s, p] = x.split('::'); console.log('  ' + chk(s, '::' + p)); });
  console.log('🧹 Kaldır: document.getElementById("xmas-alt2").remove()');
  console.log(SEP);
})();
