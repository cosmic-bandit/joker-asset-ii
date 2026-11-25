// 🎄 Yılbaşı "Gala Gecesi" TEST v5 — konseptin TAMAMI | WEB + MOBILE (otomatik algılar)
(() => {
  ['xmas-test-v1', 'xmas-test-v2', 'xmas-test-v3', 'xmas-test-v4', 'xmas-test-v5'].forEach((id) => document.getElementById(id)?.remove());
  const CDN = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@8af8652640bf/xmas/';
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

  // ── 2) Asılı süs topları
  const orn = (sel, file, pos, w, h, dur, delay) => `
    ${sel} { content:'' !important; position:absolute !important; pointer-events:none !important; ${pos}
      width:${w}px !important; height:${h}px !important; ${/right:/.test(pos) ? '' : 'right:auto !important;'}
      background:url("${CDN}${file}") center top / contain no-repeat !important;
      transform-origin:50% 0 !important; filter: drop-shadow(0 8px 10px rgba(0,0,0,.45));
      animation: xmasSwing ${dur}s ease-in-out ${delay}s infinite alternate !important; }`;
  if (isMob) {
    css += orn('.header-bc::before', 'xmas-orn-violet.webp', 'left:10px !important; top:calc(100% + 4px) !important; z-index:1 !important;', 34, 72, 3.4, 0);
    css += orn('.hdr-main-content-bc::before', 'xmas-orn-gold.webp', `right:12px !important; top:${hdrBottomInHm + 4}px !important; z-index:1 !important;`, 30, 61, 4.1, .6);
  } else {
    css += orn('.layout-header-holder-bc::before', 'xmas-orn-violet.webp', 'left:150px !important; top:calc(100% - 40px) !important; z-index:-1 !important;', 74, 157, 3.4, 0);
    css += orn('.layout-header-holder-bc::after', 'xmas-orn-gold.webp', 'right:250px !important; top:calc(100% - 56px) !important; z-index:-1 !important;', 76, 154, 4.1, .5);
    css += orn('.header-bc::before', 'xmas-orn-teal.webp', 'right:150px !important; top:calc(100% - 30px) !important; z-index:-1 !important;', 44, 159, 2.9, 1);
  }

  // ── 1) Hediye fiyonku + ışık geçişi
  const bowEl = isMob ? null : $('.hm-row-bc.has-slider');   // mobile'da sayaç rozetiyle çakışıyor → yalnız web
  if (bowEl) {
    const bs = cls(bowEl);
    const b = isMob ? { w: 78, t: 4, r: 4 } : { w: 150, t: -34, r: -26 };
    const box = `top:${b.t}px !important; right:${b.r}px !important; width:${b.w}px !important; height:${Math.round(b.w * 1.18)}px !important;`;
    const okA = free(bowEl, '::after'), okB = free(bowEl, '::before');
    css += `
    /* 1 · Hediye fiyonku */
    ${bs} { position: relative !important; }
    ${bs}::after { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:5 !important; ${box}
      background:url("${CDN}xmas-bow.webp") center / contain no-repeat !important;
      transform-origin:60% 25% !important; filter: drop-shadow(0 6px 12px rgba(0,0,0,.45));
      animation: xmasBow 4s ease-in-out infinite !important; }
    /* 1 · Fiyonk üstünden ışık geçişi (fiyonk şekliyle maskeli) */
    ${bs}::before { content:'' !important; position:absolute !important; pointer-events:none !important; z-index:6 !important; ${box}
      background:${SHEEN} !important;
      mask:url("${CDN}xmas-bow.webp") center / contain no-repeat;
      transform-origin:60% 25% !important;
      animation: xmasBow 4s ease-in-out infinite, xmasSweep 5s ease-in-out 1s infinite !important; }`;
    log.push(`🎀 Fiyonk: ${bs} | ::after ${okA ? 'boş' : 'DOLU!'} | ::before ${okB ? 'boş' : 'DOLU!'}`);
  } else log.push(isMob ? '🎀 Fiyonk: mobile\'da kapalı (slider sayacıyla çakışıyor)' : '🎀 ❌ Slider bulunamadı');

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
      background:${SHEEN} !important; mask:url("${CDN}xmas-2027-text.webp") center / contain no-repeat;
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

  // ── 5a) Kartlarda altın varak süpürmesi (sırayla)
  const CARD = isMob ? '.product-banner-container-bc.col-1 .product-banner-info-bc' : '.product-banner-container-bc.product-banner-without-titles .product-banner-info-bc';
  const cards = [...document.querySelectorAll(CARD)].filter((e) => R(e).width > 0);
  const cardFree = cards[0] && free(cards[0], '::after');
  log.push(`✨ Kartlar: ${cards.length} adet | ${CARD} | ::after ${cardFree ? 'kullanılabilir' : 'DOLU!'} | radius ${cards[0] ? getComputedStyle(cards[0]).borderRadius : '-'}`);
  if (cards.length && cardFree) {
    const wrap = isMob ? '.product-banner-container-bc.col-1 .swiper-slide' : '.product-banner-container-bc.product-banner-without-titles >';
    css += `
    /* 5 · Kartlarda altın varak süpürmesi */
    ${CARD} { position: relative !important; }
    ${CARD}::after { content:'' !important; display:block !important; position:absolute !important; inset:0 !important; pointer-events:none !important; z-index:3 !important;
      border-radius:inherit !important; mix-blend-mode: soft-light;
      background:linear-gradient(115deg, transparent 38%, rgba(255,226,140,0) 42%, rgba(255,236,170,.95) 50%, rgba(255,226,140,0) 58%, transparent 62%) 0 0 / 300% 100% no-repeat !important;
      animation: xmasSweep 6s ease-in-out infinite !important; }
    ${[1, 2, 3, 4, 5].map((k) => `${wrap}${isMob ? '' : ' '}:nth-child(${k}) .product-banner-info-bc::after { animation-delay: ${((k - 1) * 0.35).toFixed(2)}s !important; }`).join('\n    ')}`;
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

  // ── Hareket azaltma
  css += `
    @media (prefers-reduced-motion: reduce) {
      .logo::before, .logo::after, .header-bc::before, .header-bc::after, .hdr-main-content-bc::before, .hdr-main-content-bc::after,
      .layout-header-holder-bc::before, .layout-header-holder-bc::after, .logo-container::before, .logo-container::after,
      .layout-content-holder-bc *::before, .layout-content-holder-bc *::after { animation: none !important; }
    }`;

  const st = document.createElement('style');
  st.id = 'xmas-test-v5';
  st.textContent = css;
  document.head.appendChild(st);

  // ── Rapor
  console.log(SEP);
  console.log(`🎄 Gala Gecesi v5 | ${isMob ? 'MOBILE' : 'WEB'} | viewport ${innerWidth}×${innerHeight}`);
  log.forEach((l) => console.log(l));
  const chk = (s, p) => { const el = $(s); if (!el) return `❌ ${s} yok`; const c = getComputedStyle(el, p);
    return `${c.content !== 'none' ? '🟢' : '⚪'} ${s}${p} anim=${c.animationName} ${c.width}×${c.height}`; };
  ['.logo::after', '.logo::before', '.header-bc::after', '.header-bc::before', '.hdr-main-content-bc::before', '.hdr-main-content-bc::after',
    '.layout-header-holder-bc::before', '.layout-header-holder-bc::after', '.logo-container::before', '.logo-container::after']
    .forEach((x) => { const [s, p] = x.split('::'); console.log('  ' + chk(s, '::' + p)); });
  console.log('🧹 Kaldır: document.getElementById("xmas-test-v5").remove()');
  console.log(SEP);
})();
