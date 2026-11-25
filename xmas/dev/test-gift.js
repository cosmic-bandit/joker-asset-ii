// 🎁 Yılbaşı TEST — Sol menü: border yerine hediye kutusu (WEB, kompakt menü)
(() => {
  document.getElementById('xmas-test-gift')?.remove();
  const CDN = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@c34fc94b7488/xmas/';
  const I = '[class*="is-web"] .asideMenuCompact > .asideMenuNavItem';
  const tilt = [[-5, -1], [3, 1], [-2, 0], [5, -1], [-4, 1], [2, 0], [-3, 1]];   // [derece, px]
  const css = `
    /* Dönen border + zemin kapatılır */
    ${I}.asideMenuNavItem { background:none !important; border-color:transparent !important; box-shadow:none !important;
      animation:none !important; overflow:visible !important; transition: transform .25s ease !important; }
    /* Hediye kutusu — ikonun arkasında */
    ${I}::after { content:'' !important; display:block !important; position:absolute !important; pointer-events:none !important; z-index:-1 !important;
      left:-4px; top:-12px; width:50px; height:58px; background:var(--xmas-box) center bottom / contain no-repeat;
      filter: drop-shadow(0 4px 5px rgba(0,0,0,.55)); }
    ${I}:nth-child(3n+1) { --xmas-box: url("${CDN}xmas-gbox-red.webp"); }
    ${I}:nth-child(3n+2) { --xmas-box: url("${CDN}xmas-gbox-violet.webp"); }
    ${I}:nth-child(3n)   { --xmas-box: url("${CDN}xmas-gbox-green.webp"); }
    /* Hafif düzensiz duruş */
    ${tilt.map(([r, x], k) => `${I}:nth-child(7n+${k + 1}) { transform: translateX(${x}px) rotate(${r}deg) !important; }`).join('\n    ')}
    /* Hover: kutu düzelir, hafif büyür */
    ${I}:hover { transform: rotate(0) scale(1.1) !important; }
  `;
  const s = document.createElement('style'); s.id = 'xmas-test-gift'; s.textContent = css; document.head.appendChild(s);
  const n = document.querySelectorAll(I).length;
  console.log(`🎁 Hediye kutuları: ${n} buton ${n ? '✅' : '❌ (menü açık modda olabilir — kompakt moda al)'} | Kaldır: document.getElementById("xmas-test-gift").remove()`);
})();
