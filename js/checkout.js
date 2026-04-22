/* ============================================================
   AMX Luxury — Pricing Toggle, Image Switcher, Sticky Bar
   (Cart & checkout logic now handled by cart.js)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Pricing toggle ---------- */
  document.querySelectorAll('.pricing__tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var parent = tab.closest('.pricing');
      parent.querySelectorAll('.pricing__tab').forEach(function (t) {
        t.classList.remove('pricing__tab--active');
      });
      tab.classList.add('pricing__tab--active');

      var plan = tab.getAttribute('data-plan');
      parent.querySelectorAll('.pricing__plan').forEach(function (p) {
        p.classList.toggle('pricing__plan--active', p.getAttribute('data-plan') === plan);
      });
    });
  });

  /* ---------- Image switcher ---------- */
  window.switchImage = function (thumb, src) {
    var heroImg = document.getElementById('heroImg');
    if (heroImg) heroImg.src = src;
    document.querySelectorAll('.ph__thumb').forEach(function (t) {
      t.classList.remove('ph__thumb--active');
    });
    thumb.classList.add('ph__thumb--active');
  };

  /* ---------- Sticky bar visibility ---------- */
  var stickyBar = document.getElementById('stickyBar');
  if (stickyBar) {
    var pricing = document.querySelector('.pricing');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          stickyBar.classList.toggle('sticky-bar--visible', !e.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    if (pricing) observer.observe(pricing);
  }
})();
