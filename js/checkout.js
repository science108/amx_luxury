/* ============================================================
   AMX Luxury — Pricing Toggle & Stripe Checkout
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Stripe Price IDs ----------
     Replace these with your actual Stripe price IDs.
     Create products & prices at https://dashboard.stripe.com/products
  */
  var STRIPE_KEY = 'pk_live_REPLACE_WITH_YOUR_KEY';

  var PRICES = {
    'set-men-onetime':   'price_REPLACE_SET_MEN_ONCE',
    'set-men-sub':       'price_REPLACE_SET_MEN_SUB',
    'set-women-onetime': 'price_REPLACE_SET_WOMEN_ONCE',
    'set-women-sub':     'price_REPLACE_SET_WOMEN_SUB',
    'cream-men-onetime': 'price_REPLACE_CREAM_MEN_ONCE',
    'cream-men-sub':     'price_REPLACE_CREAM_MEN_SUB',
    'cream-women-onetime':'price_REPLACE_CREAM_WOMEN_ONCE',
    'cream-women-sub':   'price_REPLACE_CREAM_WOMEN_SUB',
    'caps-men-onetime':  'price_REPLACE_CAPS_MEN_ONCE',
    'caps-men-sub':      'price_REPLACE_CAPS_MEN_SUB',
    'caps-women-onetime':'price_REPLACE_CAPS_WOMEN_ONCE',
    'caps-women-sub':    'price_REPLACE_CAPS_WOMEN_SUB'
  };

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

  /* ---------- Stripe Checkout ---------- */

  var stripeLoaded = false;
  var stripeInstance = null;

  function loadStripe(callback) {
    if (stripeLoaded) { callback(stripeInstance); return; }
    var s = document.createElement('script');
    s.src = 'https://js.stripe.com/v3/';
    s.onload = function () {
      stripeInstance = Stripe(STRIPE_KEY);
      stripeLoaded = true;
      callback(stripeInstance);
    };
    document.head.appendChild(s);
  }

  document.querySelectorAll('[data-checkout]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-checkout');
      var priceId = PRICES[id];

      if (!priceId || priceId.indexOf('REPLACE') !== -1) {
        alert(
          'Checkout coming soon!\n\n' +
          'Product: ' + id.replace(/-/g, ' ').toUpperCase() + '\n' +
          'This button will connect to Stripe once the store is configured.'
        );
        return;
      }

      var mode = id.indexOf('sub') !== -1 ? 'subscription' : 'payment';

      loadStripe(function (stripe) {
        stripe.redirectToCheckout({
          lineItems: [{ price: priceId, quantity: 1 }],
          mode: mode,
          successUrl: window.location.origin + '/amx_luxury/success.html',
          cancelUrl: window.location.href
        });
      });
    });
  });
})();
