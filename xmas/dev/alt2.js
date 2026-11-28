// 🎄 Yılbaşı — ALTERNATİF 2 (kadife ikon seti) | birinci alternatifle aynı yerleşim; görseller ve hareket dili (peluş oyuncak fiziği) farklı | WEB + MOBILE
(() => {
  ['xmas-test-v1', 'xmas-test-v2', 'xmas-test-v3', 'xmas-test-v4', 'xmas-test-v5', 'xmas-test-v6', 'xmas-test-v7', 'xmas-test-v8', 'xmas-test-v9', 'xmas-test-v10', 'xmas-alt2'].forEach((id) => document.getElementById(id)?.remove());
  const CDN = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@594d5d488257/xmas/';
  const A2 = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@8c9a8fa4f295/xmas/alt2/';   // alternatif 2 assetleri
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
  // girland kavislerinin birleşim yerlerine logodakiyle aynı boyda kadife Jester şapkası; alttan ışık vurur, sırayla yanıp söner
  const HAT = 'data:image/webp;base64,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';
  const ir0 = img ? R(img) : null, lrw = ir0 ? Math.min(ir0.width, ir0.height * 720 / 267) : (isMob ? 150 : 188);
  const HHt = Math.round(110 / 720 * lrw * 10) / 10, HWd = Math.round(HHt * 67 / 64 * 10) / 10;   // logodaki şapka boyu
  const HT = Math.max(0, Math.ceil(HHt - GH * 0.28 + 3)), brimY = HT + GH * 0.28, TW = GW * 2, TH = GH + HT;
  const hatSVG = `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='${TW}' height='${TH}' viewBox='0 0 ${TW} ${TH}'>
    <defs><radialGradient id='g'><stop offset='0' stop-color='#fff1b8' stop-opacity='.95'/><stop offset='.4' stop-color='#ffc861' stop-opacity='.45'/><stop offset='1' stop-color='#ff9f3a' stop-opacity='0'/></radialGradient>
    <linearGradient id='u' x1='0' y1='1' x2='0' y2='0'><stop offset='0' stop-color='#fff3c4' stop-opacity='.9'/><stop offset='.45' stop-color='#ffd36b' stop-opacity='.35'/><stop offset='1' stop-color='#ffd36b' stop-opacity='0'/></linearGradient>
    ${[0, GW, TW].map((x, i) => `<mask id='m${i}' style='mask-type:alpha'><image href='${HAT}' xlink:href='${HAT}' x='${(x - HWd / 2).toFixed(1)}' y='${(brimY - HHt).toFixed(1)}' width='${HWd}' height='${HHt}'/></mask>`).join('')}</defs>
    <style>.a,.b{animation:hb 1.6s linear infinite}.b{animation-delay:-.8s}.l{mix-blend-mode:screen}@keyframes hb{0%,44%{opacity:1}50%,94%{opacity:.12}100%{opacity:1}}</style>
    ${[0, GW, TW].map((x, i) => { const ph = i === 1 ? 'b' : 'a', X = (x - HWd / 2).toFixed(1), Y = (brimY - HHt).toFixed(1);
      return `<ellipse class='${ph}' cx='${x.toFixed(1)}' cy='${(brimY - HHt * 0.08).toFixed(1)}' rx='${(HWd * 0.95).toFixed(1)}' ry='${(HHt * 0.55).toFixed(1)}' fill='url(#g)'/>
      <image href='${HAT}' xlink:href='${HAT}' x='${X}' y='${Y}' width='${HWd}' height='${HHt}'/>
      <rect class='${ph} l' x='${X}' y='${Y}' width='${HWd}' height='${HHt}' fill='url(#u)' mask='url(#m${i})'/>`; }).join('')}
  </svg>`;
  const UH = `url("data:image/svg+xml,${encodeURIComponent(hatSVG.replace(/\s+/g, ' '))}")`;
  css += `
    /* 6 · Kadife girland (kurdeleli çam kuşağı) + birleşim yerlerinde alttan aydınlanan Jester şapkaları — 6 sn'de bir lastik gibi esneyip yerine oturur */
    .header-bc::after { content:'' !important; position:absolute !important; left:0 !important; right:0 !important; bottom:-${GH - 6}px !important; height:${TH}px !important;
      pointer-events:none !important; z-index:4 !important;   /* header içeriğinin (z 2/3) üstünde: şapkalar header'a taşar */
      background: ${UH} 0 0 / ${TW}px ${TH}px repeat-x, url("${A2}xmas2-garland.webp") 0 ${HT}px / ${GW}px ${GH}px repeat-x !important; filter: drop-shadow(0 3px 4px rgba(0,0,0,.5));
      transform-origin: 50% ${HT}px; animation: x2Bungee 6s cubic-bezier(.3,.7,.4,1) 1s infinite !important; }`;
  log.push(`💡 Header alt kenarı (hdr-main-content'e göre): ${hdrBottomInHm}px`);

  // ── 6b) Header zemini (konsept 05): köşelerde kadife çam süsü, üst kenarda beyaz kablolu ışık zinciri (vektör), altın kadife yıldızlar,
  //        logonun arkasında koyu yumuşak maske (logo süslerle karışmasın). Hepsi header içeriğinin ARKASINDA (z-index:-1).
  {
    const STAR = 'data:image/webp;base64,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';
    const LH = isMob ? 30 : 40, LW = isMob ? 170 : 230;                       // ışık karesi
    // beyaz kablo (sarkık kavis) — tekrar eden desen
    const cy = (t) => 3 + Math.sin(Math.PI * t) * (LH * 0.32);              // kablonun t noktasındaki yüksekliği
    const cableSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='${LW}' height='${LH}' viewBox='0 0 ${LW} ${LH}'>
      <path d='M0 3 Q ${LW / 2} ${3 + LH * 0.64} ${LW} 3' fill='none' stroke='#f4efe6' stroke-width='1.6' stroke-linecap='round' opacity='.95'/></svg>`;
    // ampuller: header genişliğinde tek SVG — butonların arkasına denk gelenler çizilmez, kalanlar sırayla (biri yanar biri söner) çakar
    const BT = [0.16, 0.38, 0.63, 0.86], br = isMob ? 3.2 : 4.2, pad = br * 2 + 4;
    const blockers = [...hm.querySelectorAll('a, button')].filter((e) => !e.closest('.logo, .logo-container') && !e.querySelector('.hdr-logo-bc')).map(R)   // logo buton sayılmaz (arkası maskeli)
     
      .filter((r) => r.width > 24 && r.width < 500 && r.height > 14 && r.top - hmR.top < LH)        // görünür, ışık şeridine uzanan butonlar
      .map((r) => [r.left - hmR.left - pad, r.right - hmR.left + pad]);
    const HW = Math.ceil(hmR.width), bulbs = [];
    for (let k = 0; k * LW < HW; k++) BT.forEach((t) => { const x = k * LW + t * LW;
      if (x < HW - 4 && !blockers.some(([a, b]) => x > a && x < b)) bulbs.push([x, cy(t)]); });
    const lightsSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='${HW}' height='${LH}' viewBox='0 0 ${HW} ${LH}'>
      <defs><radialGradient id='g'><stop offset='0' stop-color='#fffbe8' stop-opacity='.95'/><stop offset='.45' stop-color='#ffe7a8' stop-opacity='.35'/><stop offset='1' stop-color='#ffd36b' stop-opacity='0'/></radialGradient>
      <radialGradient id='b' cx='.4' cy='.35'><stop offset='0' stop-color='#ffffff'/><stop offset='.7' stop-color='#f6f1e6'/><stop offset='1' stop-color='#d9d2c4'/></radialGradient></defs>
      <style>.h,.c{animation:bl 1.6s steps(1,end) infinite}.o .h,.o .c{animation-delay:-.8s}.c{animation-name:bc}
      @keyframes bl{0%{opacity:1}50%{opacity:0}}@keyframes bc{0%{opacity:1}50%{opacity:.45}}</style>
      ${bulbs.map(([x, y], i) => { const X = x.toFixed(1), Y = (y + 4 + br).toFixed(1);
        return `<g class='${i % 2 ? 'o' : 'e'}'><rect x='${(x - 2).toFixed(1)}' y='${y.toFixed(1)}' width='4' height='3.5' rx='1' fill='#e9e2d4'/>
        <circle class='h' cx='${X}' cy='${Y}' r='${(br * 2.6).toFixed(1)}' fill='url(#g)'/>
        <circle class='c' cx='${X}' cy='${Y}' r='${br}' fill='url(#b)'/></g>`; }).join('')}
    </svg>`;
    // altın kadife yıldızlar: geniş karede düzensiz dağılmış, hafif nefes alıp döner
    const SW = isMob ? 260 : 520, SH = isMob ? 54 : 80;
    const stars = isMob ? [[0.30, 0.62, 13, 3.4, 0], [0.78, 0.30, 10, 2.9, -1.1]]
                        : [[0.12, 0.70, 18, 3.6, 0], [0.37, 0.28, 13, 2.8, -1.3], [0.61, 0.66, 16, 4.1, -0.6], [0.86, 0.36, 12, 3.2, -2.2]];
    const starsSVG = `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='${SW}' height='${SH}' viewBox='0 0 ${SW} ${SH}'>
      <style>.s{transform-box:fill-box;transform-origin:center;animation:st var(--d) ease-in-out infinite;animation-delay:var(--o)}@keyframes st{0%,100%{transform:scale(.82) rotate(-8deg);opacity:.7}50%{transform:scale(1.08) rotate(8deg);opacity:1}}</style>
      ${stars.map(([x, y, sz, d, o]) => `<image class='s' style='--d:${d}s;--o:${o}s' href='${STAR}' xlink:href='${STAR}' x='${(x * SW - sz / 2).toFixed(1)}' y='${(y * SH - sz / 2).toFixed(1)}' width='${sz}' height='${(sz * 43 / 48).toFixed(1)}'/>`).join('')}
    </svg>`;
    const U = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' '))}")`;
    // logo arkası maske: logonun ortasında koyu, kenarlara doğru eriyen elips
    const lr2 = img ? R(img) : null;
    const lcx = lr2 ? Math.round(lr2.left - hmR.left + lr2.width / 2) : 110, lcy = lr2 ? Math.round(lr2.top - hmR.top + lr2.height / 2) : 40;
    const lmw = lr2 ? Math.round(lr2.width * 0.78) : 150, lmh = lr2 ? Math.round(lr2.height * 0.72) : 50;
    const CH = isMob ? 62 : 96;   // köşe süsü yüksekliği
    css += `
    /* 6b · Header zemini: ışık zinciri + yıldızlar + logo maskesi + kadife çam köşeleri (içeriğin arkasında) */
    .hdr-main-content-bc::before { content:'' !important; position:absolute !important; inset:0 !important; z-index:-1 !important; pointer-events:none !important;
      background:
        ${U(lightsSVG)} 0 0 / ${HW}px ${LH}px no-repeat,
        ${U(cableSVG)} 0 0 / ${LW}px ${LH}px repeat-x,
        url("${A2}xmas2-cable-clusters.webp") ${-LW / 2}px 0 / ${LW * 2}px ${Math.round(LW * 2 * 56 / 920)}px repeat-x,
        ${U(starsSVG)} ${isMob ? 40 : 260}px 0 / ${SW}px ${SH}px repeat-x,
        radial-gradient(${lmw}px ${lmh}px at ${lcx}px ${lcy}px, rgba(18,8,36,.92) 0%, rgba(18,8,36,.75) 45%, rgba(18,8,36,0) 100%),
        url("${A2}xmas2-corner-l.webp") left -6px top -4px / auto ${CH}px no-repeat,
        url("${A2}xmas2-corner-r.webp") right -6px top -4px / auto ${CH}px no-repeat !important; }`;
    log.push(`✨ Header zemini: ${bulbs.length} ampul (butonların arkasındakiler çıkarıldı, sırayla yanıp söner) + kablo düğümlerinde dal/top/kozalak kümeleri, (${LW}px kare) + ${stars.length} yıldız/kare + logo maskesi + köşeler (${CH}px)`);
  }

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
    // ip, süsün kapağına 4 px girip orada biter (alttan görünmez): uzun ip görselinin ALT ucu süsün tepesine hizalanır
    // süs görsellerinin oranı (yükseklik/genişlik) — halat süsün üst 1/3'üne kadar iner
    const ORN_AR = { ball: 72 / 79, disco2: 68 / 75, star: 64 / 72, bells: 80 / 86, gift: 72 / 78, sock: 80 / 65 };
    const ORN = (r, w, h, len, kk = k) => { const rw = 4.5 * kk, rl = 1095 * rw / 16, dh = w * ORN_AR[r.o], y = (len + h - dh) + dh / 3 - rl;
      return `background: url("${A2}xmas2-orn-${r.o}.webp") center bottom / ${f1(w)}px auto no-repeat, url("${A2}xmas2-rope-long.webp") center ${f1(y)}px / ${f1(rw)}px auto no-repeat !important;
      filter: drop-shadow(0 4px 5px rgba(0,0,0,.45)); transform-origin: 50% 0 !important;
      width:${f1(w)}px !important; height:${f1(len + h)}px !important;
      animation: ${r.sw} ease-in-out ${r.d}s infinite alternate !important;`; };
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
      top:0 !important; left:calc(${r.pct}% - ${f1(w / 2)}px) !important; ${ORN(r, w, h, len, km)} }`;
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
    /* 4 · "2027" — solda hediye yüklü kızak, sağda onu çeken ren geyiği (yalnızca yeterli boşluk varsa) */
    .logo-container::after { content:'' !important; display:none !important; }`;
    const minVW = Math.ceil(innerWidth - (hmR.width - A - Rw) + 470);
    css += `
    @keyframes x2Bob { 0%,100% { transform: translate(-50%,-50%) translateY(0); } 50% { transform: translate(-50%,-50%) translateY(-2px); } }
    @media (min-width: ${minVW}px) {
      .logo-container::after { display:block !important; position:absolute !important; pointer-events:none !important; z-index:0 !important;
        left:calc((${A}px + 100% - ${Rw}px) / 2) !important; top:60% !important; height:56px !important;
        width:calc(1.5 * clamp(0px, calc(100% - ${A}px - ${Rw}px - 50px), 240px) + 104px) !important;
        background: url("${A2}xmas2-sleigh.webp") left bottom / auto 44px no-repeat, url("${A2}xmas2-reindeer.webp") right bottom / auto 48px no-repeat !important;
        -webkit-mask:none; mask:none; opacity:1 !important; filter: drop-shadow(0 3px 4px rgba(0,0,0,.45));
        animation: x2Bob 2.6s ease-in-out infinite !important; }
    }`;
    log.push(`🛷 Kızak + ren geyiği: ${minVW}px ve üstü ekranlarda`);
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

  // ── 9) Kartların üstünde kadife girland (banner üstündeki kurdeleli çam kuşağının küçüğü)
  // Tam kavis sayısına yuvarlanır (round): kartın iki ucunda yarım kavis kalmaz. Üst kenarın üzerine biner.
  // girland kavislerinin birleştiği yere header'dakiyle aynı beyaz ampul: karo kenarına yarım+yarım çizilir, round ölçeğiyle birlikte kayar.
  // Kartın iki ucundaki yarım ampuller padding + content-box clip ile gizlenir. Tek/çift kart ters fazda yanıp söner.
  const GBULB = (ph) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='294' height='96' viewBox='0 0 294 96' preserveAspectRatio='none'>
    <defs><radialGradient id='g'><stop offset='0' stop-color='#fffbe8' stop-opacity='.95'/><stop offset='.45' stop-color='#ffe7a8' stop-opacity='.4'/><stop offset='1' stop-color='#ffd36b' stop-opacity='0'/></radialGradient>
    <radialGradient id='b' cx='.4' cy='.35'><stop offset='0' stop-color='#fff'/><stop offset='.7' stop-color='#f6f1e6'/><stop offset='1' stop-color='#d9d2c4'/></radialGradient></defs>
    <style>.h,.c{animation:bl 1.6s steps(1,end) infinite;animation-delay:${ph}s}.c{animation-name:bc}@keyframes bl{0%{opacity:1}50%{opacity:0}}@keyframes bc{0%{opacity:1}50%{opacity:.45}}</style>
    ${[0, 294].map((x) => `<rect x='${x - 4}' y='36' width='8' height='7' rx='2' fill='#e9e2d4'/><circle class='h' cx='${x}' cy='54' r='30' fill='url(#g)'/><circle class='c' cx='${x}' cy='54' r='11' fill='url(#b)'/>`).join('')}
  </svg>`.replace(/\s+/g, ' '))}")`;
  const GB_A = GBULB(0), GB_B = GBULB(-0.8);
  const GARL = `url("${A2}xmas2-garland.webp")`;
  const SNOW = (h) => { const tw = Math.round(h * 294 / 96), pad = Math.ceil(h * 30 / 96) + 1;
    return `content: "" !important; position: absolute !important; pointer-events: none !important; z-index: 6 !important; box-sizing: border-box !important;
      height: ${h}px !important; padding: 0 ${pad}px !important;
      background: ${GB_A} 0 0 / ${tw}px ${h}px round no-repeat border-box content-box, ${GARL} 0 0 / ${tw}px ${h}px round no-repeat border-box border-box !important;
      -webkit-mask: none; mask: none; filter: drop-shadow(0 2px 2px rgba(10,5,30,.45));
      transform-origin: 50% 0; transition: transform .5s cubic-bezier(.34,1.8,.5,1);`; };
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
    const sh = Math.round((isMob ? 0.85 : 1) * h * 1.55);   // girland, kardan biraz daha yüksek
    css += `
    ${needPos ? `${sel} { position: relative !important; }` : ''}
    ${sel}${ps} { ${SNOW(sh)} top: ${top}px !important; left: ${side}px !important; right: ${side}px !important; }
    ${sel}:nth-child(2n)${ps} { background-image: ${GB_B}, ${GARL} !important; }
    ${sel}:hover${ps} { transform: scaleY(1.18); }`;
    snowOK.push(sel);
  });
  log.push(`🎀 Kart girlandı: ${snowOK.length} kart tipi → ${snowOK.join(', ')}`);

  // ── 10) Header butonlarının üstündeki kar kaldırıldı

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
