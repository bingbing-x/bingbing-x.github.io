/* 主页交互：深浅色主题切换 */
(function () {
  'use strict';

  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var moon = document.getElementById('icon-moon');
  var sun = document.getElementById('icon-sun');

  if (!btn || !moon || !sun) return;

  function paint() {
    var dark = root.classList.contains('dark');
    // 深色时显示太阳（点击回到浅色），浅色时显示月亮
    sun.classList.toggle('hidden', !dark);
    moon.classList.toggle('hidden', dark);
  }

  paint();

  btn.addEventListener('click', function () {
    root.classList.toggle('dark');
    localStorage.setItem('color-theme', root.classList.contains('dark') ? 'dark' : 'light');
    paint();
  });
})();
