// 🎄 Tematik logo TEST — window.XMAS_LOGO = 'santa' | 'snow' (varsayılan: santa)
(() => {
  document.getElementById('xmas-test-logo')?.remove();
  const v = window.XMAS_LOGO || 'santa';
  const url = 'https://cdn.jsdelivr.net/gh/cosmic-bandit/joker-asset-ii@958fb0f1db4c/xmas/xmas-logo-' + v + '.webp';
  const s = document.createElement('style'); s.id = 'xmas-test-logo';
  s.textContent = `
    /* Orijinal logo görünmez olur, aynı kutuya tematik logo gelir */
    img.hdr-logo-bc { object-position: -99999px 0 !important;
      background: url("${url}") left center / contain no-repeat border-box !important; }
    /* Eski Jester parlaması / havai fişeği tematik logoda kapatılır */
    .logo::before, .logo::after { content: none !important; }`;
  document.head.appendChild(s);
  console.log('🎄 Tematik logo: ' + v + ' | diğeri için: window.XMAS_LOGO="' + (v === 'santa' ? 'snow' : 'santa') + '" ve tekrar çalıştır | kaldır: document.getElementById("xmas-test-logo").remove()');
})();
