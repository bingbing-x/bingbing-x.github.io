/* 主页交互：主题切换 / News 折叠 / 论文 Summary 展开 */
(function () {
  'use strict';

  // ---------- 深色模式 ----------
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var moon = document.getElementById('icon-moon');
  var sun = document.getElementById('icon-sun');

  function paintIcon() {
    var dark = root.classList.contains('dark');
    // 深色模式下显示太阳（点击切回浅色），反之显示月亮
    sun.classList.toggle('hidden', !dark);
    moon.classList.toggle('hidden', dark);
  }

  if (btn) {
    paintIcon();
    btn.addEventListener('click', function () {
      root.classList.toggle('dark');
      localStorage.setItem('color-theme', root.classList.contains('dark') ? 'dark' : 'light');
      paintIcon();
    });
  }

  // ---------- News 展开 / 收起 ----------
  var more = document.getElementById('news-more');
  if (more) {
    more.addEventListener('click', function () {
      var extras = document.querySelectorAll('.news-extra');
      var opening = extras.length > 0 && extras[0].hidden;
      for (var i = 0; i < extras.length; i++) extras[i].hidden = !opening;
      more.innerHTML = opening ? more.dataset.less : more.dataset.more;
    });
  }

  // ---------- 论文 Summary ----------
  var btns = document.querySelectorAll('.summary-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var box = document.getElementById(this.dataset.target);
      if (box) box.classList.toggle('open');
    });
  }
})();
