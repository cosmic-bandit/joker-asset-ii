// 🎄 Yılbaşı "Gala Gecesi" TEST v5 — konseptin TAMAMI | WEB + MOBILE (otomatik algılar)
(() => {
  ['xmas-test-v1', 'xmas-test-v2', 'xmas-test-v3', 'xmas-test-v4', 'xmas-test-v5', 'xmas-test-v6', 'xmas-test-v7', 'xmas-test-v8', 'xmas-test-v9', 'xmas-test-v10'].forEach((id) => document.getElementById(id)?.remove());
  const CDN = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@594d5d488257/xmas/';
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

  // ── 6) Işık zinciri v2 — sönük taban + 4 grup düzensiz yanıp sönme
  const hdrBottomInHm = Math.round(R(hdr).bottom - hmR.top);
  const litSel = isMob ? '.hdr-main-content-bc::after' : '.hdr-main-content-bc::before';
  const G = (k) => `url("${CDN}xmas-garland-g${k}.webp")`;
  css += `
    @keyframes xmasTwinkle { 0% { background-position: 0 0, 0 -60px, 0 -60px, 0 -60px; } 3% { background-position: 0 0, 0 -60px, 0 -60px, 0 0; } 8% { background-position: 0 0, 0 0, 0 -60px, 0 0; } 9% { background-position: 0 0, 0 0, 0 -60px, 0 -60px; } 12% { background-position: 0 -60px, 0 0, 0 -60px, 0 -60px; } 18% { background-position: 0 -60px, 0 0, 0 0, 0 -60px; } 25% { background-position: 0 -60px, 0 -60px, 0 0, 0 -60px; } 30% { background-position: 0 0, 0 -60px, 0 0, 0 -60px; } 34% { background-position: 0 0, 0 -60px, 0 -60px, 0 -60px; } 36% { background-position: 0 0, 0 -60px, 0 -60px, 0 0; } 44% { background-position: 0 0, 0 -60px, 0 0, 0 0; } 45% { background-position: 0 -60px, 0 -60px, 0 0, 0 0; } 50% { background-position: 0 -60px, 0 -60px, 0 0, 0 -60px; } 52% { background-position: 0 -60px, 0 0, 0 0, 0 -60px; } 58% { background-position: 0 -60px, 0 0, 0 -60px, 0 -60px; } 60% { background-position: 0 -60px, 0 -60px, 0 -60px, 0 -60px; } 62% { background-position: 0 -60px, 0 -60px, 0 -60px, 0 0; } 70% { background-position: 0 0, 0 -60px, 0 -60px, 0 0; } 74% { background-position: 0 0, 0 -60px, 0 -60px, 0 -60px; } 78% { background-position: 0 -60px, 0 -60px, 0 -60px, 0 -60px; } 82% { background-position: 0 -60px, 0 0, 0 -60px, 0 -60px; } 88% { background-position: 0 -60px, 0 0, 0 0, 0 -60px; } 92% { background-position: 0 -60px, 0 0, 0 0, 0 0; } 96% { background-position: 0 -60px, 0 -60px, 0 0, 0 0; } 97% { background-position: 0 -60px, 0 -60px, 0 0, 0 -60px; } 100% { background-position: 0 -60px, 0 -60px, 0 0, 0 -60px; } }
    /* 6 · Işık zinciri — sönük ampuller + tel */
    .header-bc::after { content:'' !important; position:absolute !important; left:0 !important; right:0 !important; bottom:-30px !important; height:35px !important;
      pointer-events:none !important; z-index:1 !important; animation:none !important;
      background:url("${CDN}xmas-garland-base.webp") 0 0 / 336px 35px repeat-x !important; filter: drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
    /* 6 · Işık zinciri — yanık ampuller (4 grup, düzensiz takvim) */
    ${litSel} { content:'' !important; position:absolute !important; left:0 !important; right:0 !important; top:${hdrBottomInHm - 5}px !important; height:35px !important;
      pointer-events:none !important; z-index:2 !important;
      background-image:${G(0)}, ${G(1)}, ${G(2)}, ${G(3)} !important;
      background-size:336px 35px !important; background-repeat:repeat-x !important;
      background-position:0 0, 0 -60px, 0 -60px, 0 -60px;
      animation: xmasTwinkle 8s step-end infinite !important; }`;
  log.push(`💡 Header alt kenarı (hdr-main-content'e göre): ${hdrBottomInHm}px`);

  // ── 1+2) Slider köşe süsleri — sol ve sağ üst köşeye yaslanır
  const sl = $('.hm-row-bc.has-slider');
  if (sl) {
    const cw = isMob ? 140 : 300;                                   // köşe genişliği
    const hl = Math.round(cw * 634 / 900), hr = Math.round(cw * 558 / 900);
    const off = isMob ? { t: -4, s: -4 } : { t: -12, s: -12 };
    css += `
    @keyframes xmasSwayL { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(1deg); } }
    @keyframes xmasSwayR { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-1deg); } }
    .hm-row-bc.has-slider { position: relative !important; }
    /* Sol üst köşe */
    .hm-row-bc.has-slider::before { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:5 !important;
      top:${off.t}px !important; left:${off.s}px !important; width:${cw}px !important; height:${hl}px !important;
      background:url("${CDN}xmas-corner-l.webp") left top / contain no-repeat !important;
      transform-origin: 0 0 !important; filter: drop-shadow(0 6px 10px rgba(0,0,0,.4));
      animation: xmasSwayL 6s ease-in-out infinite !important; }
    /* Sağ üst köşe */
    .hm-row-bc.has-slider::after { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:5 !important;
      top:${off.t}px !important; right:${off.s}px !important; width:${cw}px !important; height:${hr}px !important;
      background:url("${CDN}xmas-corner-r.webp") right top / contain no-repeat !important;
      transform-origin: 100% 0 !important; filter: drop-shadow(0 6px 10px rgba(0,0,0,.4));
      animation: xmasSwayR 7s ease-in-out .8s infinite !important; }`;
    log.push(`🌲 Köşe süsleri: ${cw}px genişlik`);
  }

  // ── 4) Web header "2027" sahnesi — boşluğa göre ortalanır, yer yoksa kendini gizler
  if (!isMob) {
    const aff = $('.logo-container > a.header-icon'), usr = $('.hdr-user-bc');
    const A = aff ? Math.round(R(aff).right - hmR.left) : 380;
    const Rw = usr ? Math.round(hmR.right - R(usr).left) : 950;
    const scene = `position:absolute !important; pointer-events:none !important;
      left:calc((${A}px + 100% - ${Rw}px) / 2) !important; top:50% !important;
      width:clamp(0px, calc(100% - ${A}px - ${Rw}px - 50px), 240px) !important; aspect-ratio: 8 / 3 !important; height:auto !important;
      transform: translate(-50%,-50%);`;
    css += `
    /* 4 · "2027" — havai fişek katmanı (animasyonlu WebP) */
    .logo-container::before { content:'' !important; ${scene} z-index:1 !important;
      background:url("${CDN}xmas-2027-fx.webp") center / contain no-repeat !important; }
    /* 4 · "2027" — yazı (Jester'lı) */
    .hdr-main-content-bc::after { content:'' !important; ${scene} z-index:3 !important;
      background:url("${CDN}xmas-2027-text.webp") center / contain no-repeat !important;
      filter: drop-shadow(0 0 8px rgba(251,191,36,.45)); animation: xmas2027 3.2s ease-in-out infinite !important; }
    /* 4 · "2027" — yazının üstünden ışık geçişi */
    .logo-container::after { content:'' !important; ${scene} z-index:4 !important;
      background:${SHEEN}; mask:url("${CDN}xmas-2027-text.webp") center / contain no-repeat;
      animation: xmasSweep 4.5s ease-in-out .5s infinite !important; }`;
    log.push(`🎆 Header boşluğu: affiliate sağı=${A}px | sağ grup genişliği=${Rw}px | boşluk=${Math.round(hmR.width - A - Rw)}px → sahne ${Math.max(0, Math.min(240, Math.round(hmR.width - A - Rw - 50)))}px`);
  } else {
    // Mobile: logo arkasında Jester havai fişeği
    const jf = 64;
    css += `
    .logo::before { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:-1 !important;
      left:${jx - jf / 2}px !important; top:${jy - jf / 2}px !important; width:${jf}px !important; height:${jf}px !important;
      background:url("${CDN}xmas-fw-jester.webp") center / contain no-repeat !important; opacity:0;
      animation: xmasBurst 5s ease-out 1.2s infinite !important; }`;
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


  // ── Tematik logo: kırmızı Noel Jester'ı (orijinal img görünmez, aynı kutuya yeni logo)
  css += `
    img.hdr-logo-bc { object-position: -99999px 0 !important;
      background: url("https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@958fb0f1db4c/xmas/xmas-logo-santa.webp") left center / contain no-repeat border-box !important; }
    .logo::before, .logo::after { content: none !important; }`;
  // Web: "t" harfi Affiliate butonunun dikey ortasına hizalı; ponpon sticky header'da kesilmesin diye %85
  if (!isMob) css += `
    img.hdr-logo-bc { transform: translateY(-12px) scale(.85) !important; transform-origin: 0 46.6px !important; }`;
  log.push('🎅 Logo: kırmızı Noel Jester' + (isMob ? '' : ' (t ↔ Affiliate hizalı)'));


  // ══ ORTA BÖLÜM ════════════════════════════════════════════
  const MID = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@b9890b5e2228/xmas/';
  css += `
    @keyframes xmasSprig { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
    @keyframes xmasHang  { 0%,100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }`;

  // ── 7) Bölüm başlıklarının önüne çam dalı + kokina
  if ($('.sectionTitleText') && free($('.sectionTitleText'), '::before')) {
    css += `
    .sectionTitleText::before { content: "" !important; display: inline-block !important;
      width: ${isMob ? 44 : 54}px !important; height: ${isMob ? 22 : 27}px !important; margin: -6px 8px -6px -2px !important; vertical-align: middle !important;
      background: url("${MID}xmas-sprig.webp") center / contain no-repeat !important;
      transform-origin: 15% 60%; animation: xmasSprig 5s ease-in-out infinite; }`;
    log.push(`🌿 Başlık dalı: ${document.querySelectorAll('.sectionTitleText').length} başlık`);
  }

  // ── 8) Bölüm başlığı satırına sarkan süsler (altın küre + mor kristal, ince altın iple)
  const st0 = $('.sectionTitle');
  const stt = $('.sectionTitleText');
  if (isMob && stt && free(stt, '::after')) {
    // Mobile: başlık satırı dar — süs çifti başlık metninin hemen arkasına, satır içinde sarkar
    const ROPE = 'rgba(236,198,118,.9)';
    css += `
    .sectionTitleText::after { content: "" !important; display: inline-block !important; vertical-align: top !important;
      width: 44px !important; height: 51px !important; margin: -26px 0 -26px 12px !important; pointer-events: none !important;
      background:
        url("${MID}xmas-orn2-gold.webp") 0 18px / 23px 30px no-repeat,
        linear-gradient(${ROPE}, ${ROPE}) 11px 0 / 1px 19px no-repeat,
        url("${MID}xmas-orn2-violet.webp") 32px 10px / 10px 41px no-repeat,
        linear-gradient(${ROPE}, ${ROPE}) 37px 0 / 1px 11px no-repeat !important;
      filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); transform-origin: 50% 0; animation: xmasHang 4.6s ease-in-out infinite; }
    .hm-row-bc:nth-child(even) .sectionTitleText::after { animation-delay: -2.1s; }`;
    log.push('🔮 Sarkan süsler (mobile): başlık metninin arkasında');
  } else if (!isMob && st0 && free(st0, '::before') && free(st0, '::after')) {
    const k = isMob ? 0.75 : 1;
    const g = { w: Math.round(31 * k), h: Math.round(40 * k), t: Math.round(24 * k) };   // altın küre
    const v = { w: Math.round(13.5 * k), h: Math.round(55 * k), t: Math.round(12 * k) };     // mor kristal
    const up = isMob ? -20 : -28;
    const ROPE = (t) => `linear-gradient(rgba(236,198,118,.9), rgba(236,198,118,.9)) center top / 1px ${t}px no-repeat`;
    const P = isMob ? ['58%', '66%', '70%', '78%', '50%', '59%'] : ['46%', 'calc(46% + 44px)', '57%', 'calc(57% + 40px)', '38%', 'calc(38% + 48px)'];
    css += `
    .sectionTitle { position: relative !important; }
    .sectionTitle::before, .sectionTitle::after { content: "" !important; position: absolute !important; top: ${up}px !important;
      pointer-events: none !important; z-index: 2 !important; transform-origin: 50% 0;
      filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); animation: xmasHang 4.2s ease-in-out infinite; }
    .sectionTitle::before { left: ${P[0]} !important; width: ${g.w}px !important; height: ${g.t + g.h}px !important;
      background: url("${MID}xmas-orn2-gold.webp") center bottom / ${g.w}px ${g.h}px no-repeat, ${ROPE(g.t)} !important; }
    .sectionTitle::after { left: ${P[1]} !important; width: ${v.w}px !important; height: ${v.t + v.h}px !important;
      background: url("${MID}xmas-orn2-violet.webp") center bottom / ${v.w}px ${v.h}px no-repeat, ${ROPE(v.t)} !important;
      animation-duration: 5.1s; animation-delay: -1.3s; }
    .hm-row-bc:nth-child(even) .sectionTitle::before { left: ${P[2]} !important; animation-delay: -2s; }
    .hm-row-bc:nth-child(even) .sectionTitle::after  { left: ${P[3]} !important; }
    .hm-row-bc:nth-child(3n) .sectionTitle::before { left: ${P[5]} !important; }
    .hm-row-bc:nth-child(3n) .sectionTitle::after  { left: ${P[4]} !important; }`;
    log.push('🔮 Sarkan süsler: tüm bölüm başlıkları');
  } else log.push('⚠️ .sectionTitle pseudo dolu/yok — sarkan süs atlandı');

  // ── 9) Kartların üstünde kar birikintisi
  const SNOW = (h) => `content: "" !important; position: absolute !important; pointer-events: none !important; z-index: 6 !important;
      height: ${h}px !important; background: url("${MID}xmas-snowcap.webp") 0 0 / auto ${h}px repeat-x !important;
      filter: drop-shadow(0 1px 1.5px rgba(10,5,30,.35));`;
  const snowT = [
    // [seçici, pseudo, top, yan boşluk, yükseklik, position ekle?]
    ...(isMob ? [] : [['.product-banner-container-bc.product-banner-without-titles .product-banner-info-bc', '::after', -4, 10, 16, false]]),  // mobile'da bu pseudo'lar custom.css'te dolu
    ['.featuredGamesVersion1 .swiper-slide', '::after', 0, 3, 14, false],
    ['.expressWidget', '::after', -4, 8, 16, false, true],
    ['.bbAiRecBetsItem', '::after', 0, 4, 15, false, true],
    ['.casino-big-win-replays-card', '::before', -4, 10, 15, false, true],
    isMob ? ['.tournamentsWidgetItem', '::after', -4, 10, 15, true, true]        // mobile: swiper yok, kart doğrudan
          : ['.tournamentsWidget .swiper-slide', '::after', 0, 6, 15, false, true],
    ['.casinoGameItemContent', '::after', 0, 0, 13, false, true],
    ['.casinoRandomGameWidget', '::after', -4, 14, 16, true],
    ['.jackpot-pools-widget .swiper-slide', '::after', 0, 6, 14, false],
    ['.casino-live-wins-container', '::after', -4, 10, 16, true],
  ];
  const snowOK = [];
  snowT.forEach(([sel, ps, top, side, h, needPos, lazy]) => {
    const all = [...document.querySelectorAll(sel)]; if (!all.length && !lazy) return;  // lazy: geç yüklenen kartlar (pseudo'su boş olduğu doğrulandı)
    if (!all.every((e) => free(e, ps))) { log.push(`⚠️ kar atlandı (pseudo dolu): ${sel}${ps}`); return; }
    const sh = isMob ? Math.round(h * 0.85) : h;
    css += `
    ${needPos ? `${sel} { position: relative !important; }` : ''}
    ${sel}${ps} { ${SNOW(sh)} top: ${top}px !important; left: ${side}px !important; right: ${side}px !important; }
    ${sel}:nth-child(3n+2)${ps} { background-position-x: -76px !important; }
    ${sel}:nth-child(3n)${ps} { background-position-x: -151px !important; }`;
    snowOK.push(sel);
  });
  log.push(`❄️ Kar birikintisi: ${snowOK.length} kart tipi → ${snowOK.join(', ')}`);

  // ── Hareket azaltma
  css += `
    @media (prefers-reduced-motion: reduce) {
      .logo::before, .logo::after, .header-bc::before, .header-bc::after, .hdr-main-content-bc::before, .hdr-main-content-bc::after,
      .layout-header-holder-bc::before, .layout-header-holder-bc::after, .logo-container::before, .logo-container::after,
      .layout-content-holder-bc *::before, .layout-content-holder-bc *::after, .sectionTitle::before, .sectionTitle::after, .sectionTitleText::before, .sectionTitleText::after { animation: none !important; }
    }`;

  const st = document.createElement('style');
  st.id = 'xmas-test-v10';
  st.textContent = css;
  document.head.appendChild(st);

  // ── Rapor
  console.log(SEP);
  console.log(`🎄 Gala Gecesi v10 | ${isMob ? 'MOBILE' : 'WEB'} | viewport ${innerWidth}×${innerHeight}`);
  log.forEach((l) => console.log(l));
  const chk = (s, p) => { const el = $(s); if (!el) return `❌ ${s} yok`; const c = getComputedStyle(el, p);
    return `${c.content !== 'none' ? '🟢' : '⚪'} ${s}${p} anim=${c.animationName} ${c.width}×${c.height}`; };
  ['.logo::after', '.logo::before', '.header-bc::after', '.header-bc::before', '.hdr-main-content-bc::before', '.hdr-main-content-bc::after',
    '.layout-header-holder-bc::before', '.layout-header-holder-bc::after', '.logo-container::before', '.logo-container::after']
    .forEach((x) => { const [s, p] = x.split('::'); console.log('  ' + chk(s, '::' + p)); });
  console.log('🧹 Kaldır: document.getElementById("xmas-test-v10").remove()');
  console.log(SEP);
})();
