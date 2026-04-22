/* ============================================================
   AMX Luxury — Shopping Cart
   ============================================================ */
(function () {
  'use strict';

  var BASE = location.pathname.indexOf('/products/') !== -1 ? '../' : '';

  var PRODUCTS = {
    'set-men':          { name: 'Men\'s Set',           namePl: 'Zestaw Męski',          price: 119, priceSub: 99,  img: 'images/peptidermox-men.png',   desc: 'Peptidermax + CollanActive Q28',              descPl: 'Peptidermax + CollanActive Q28' },
    'set-women':        { name: 'Women\'s Set',         namePl: 'Zestaw Damski',         price: 119, priceSub: 99,  img: 'images/peptidermox-women.png', desc: 'Peptidermax + Collasax Q28',                  descPl: 'Peptidermax + Collasax Q28' },
    'set-3-men':        { name: 'Men\'s Complete Set',  namePl: 'Pełny Zestaw Męski',    price: 199, priceSub: 169, img: 'images/peptidermox-men.png',   desc: 'Cream + Capsules + Serum · Save €18',         descPl: 'Krem + Kapsułki + Serum · Oszczędź €18' },
    'set-3-women':      { name: 'Women\'s Complete Set',namePl: 'Pełny Zestaw Damski',   price: 199, priceSub: 169, img: 'images/peptidermox-women.png', desc: 'Cream + Capsules + Serum · Save €18',         descPl: 'Krem + Kapsułki + Serum · Oszczędź €18' },
    'set-cs-men':       { name: 'Cream + Serum Men',    namePl: 'Krem + Serum Męski',    price: 149, priceSub: 125, img: 'images/peptidermox-men.png',   desc: 'Peptidermax + Serum · Save €19',              descPl: 'Peptidermax + Serum · Oszczędź €19' },
    'set-cs-women':     { name: 'Cream + Serum Women',  namePl: 'Krem + Serum Damski',   price: 149, priceSub: 125, img: 'images/peptidermox-women.png', desc: 'Peptidermax + Serum · Save €19',              descPl: 'Peptidermax + Serum · Oszczędź €19' },
    'cream-men':        { name: 'Peptidermax Men',      namePl: 'Peptidermax Men',       price: 79,  priceSub: 65,  img: 'images/peptidermox-men.png',   desc: 'Advanced Peptide Cream · 50ml',               descPl: 'Zaawansowany krem peptydowy · 50ml' },
    'cream-women':      { name: 'Peptidermax Women',    namePl: 'Peptidermax Women',     price: 79,  priceSub: 65,  img: 'images/peptidermox-women.png', desc: 'Advanced Peptide Cream · 50ml',               descPl: 'Zaawansowany krem peptydowy · 50ml' },
    'caps-men':         { name: 'CollanActive Q28 Men', namePl: 'CollanActive Q28 Men',  price: 49,  priceSub: 39,  img: 'images/collasax-men.png',     desc: 'Vegan Collagen Capsules · 60 caps',           descPl: 'Wegańskie kapsułki kolagenowe · 60 szt.' },
    'caps-women':       { name: 'Collasax Q28 Women',   namePl: 'Collasax Q28 Women',    price: 49,  priceSub: 39,  img: 'images/collasax-women.png',   desc: 'Vegan Collagen Capsules · 60 caps',           descPl: 'Wegańskie kapsułki kolagenowe · 60 szt.' },
    'serum-men':        { name: 'Serum Men',            namePl: 'Serum Men',             price: 89,  priceSub: 75,  img: 'images/serum-men.png',        desc: 'Rejuvenating Serum · 30ml',                   descPl: 'Serum odmładzające · 30ml' },
    'serum-women':      { name: 'Serum Women',          namePl: 'Serum Women',           price: 89,  priceSub: 75,  img: 'images/serum-women.png',      desc: 'Rejuvenating Serum · 30ml',                   descPl: 'Serum odmładzające · 30ml' }
  };

  window.AMX_PRODUCTS = PRODUCTS;

  function lang() { return localStorage.getItem('amx_lang') || 'en'; }
  function t(en, pl) { return lang() === 'pl' ? pl : en; }

  /* ---------- Cart data ---------- */
  function getCart() {
    try { return JSON.parse(localStorage.getItem('amx_cart')) || []; }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem('amx_cart', JSON.stringify(cart));
    render();
    updateBadge();
  }
  window.AMX_getCart = getCart;
  window.AMX_updateQty = updateQty;
  window.AMX_removeItem = removeItem;

  function addItem(productId, isSub) {
    var cart = getCart();
    var key = productId + (isSub ? '-sub' : '');
    var existing = cart.find(function (i) { return i.key === key; });
    if (existing) { existing.qty++; }
    else { cart.push({ key: key, productId: productId, isSub: !!isSub, qty: 1 }); }
    saveCart(cart);
    openDrawer();
  }

  function removeItem(key) {
    saveCart(getCart().filter(function (i) { return i.key !== key; }));
  }

  function updateQty(key, delta) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.key === key; });
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }

  function cartTotal() {
    return getCart().reduce(function (sum, i) {
      var p = PRODUCTS[i.productId];
      return sum + (i.isSub ? p.priceSub : p.price) * i.qty;
    }, 0);
  }

  function cartCount() {
    return getCart().reduce(function (s, i) { return s + i.qty; }, 0);
  }

  /* ---------- Drawer HTML (injected once) ---------- */
  function createDrawer() {
    if (document.getElementById('cartDrawer')) return;

    var overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cartOverlay';
    overlay.addEventListener('click', closeDrawer);

    var drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    drawer.id = 'cartDrawer';
    drawer.innerHTML =
      '<div class="cart-drawer__header">' +
        '<h3 id="cartTitle">' + t('Your Cart', 'Twój Koszyk') + '</h3>' +
        '<button class="cart-drawer__close" id="cartClose" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="cart-drawer__body" id="cartBody"></div>' +
      '<div class="cart-drawer__footer" id="cartFooter"></div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    document.getElementById('cartClose').addEventListener('click', closeDrawer);
  }

  function openDrawer() {
    createDrawer();
    render();
    document.getElementById('cartOverlay').classList.add('cart-overlay--visible');
    document.getElementById('cartDrawer').classList.add('cart-drawer--open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    var o = document.getElementById('cartOverlay');
    var d = document.getElementById('cartDrawer');
    if (o) o.classList.remove('cart-overlay--visible');
    if (d) d.classList.remove('cart-drawer--open');
    document.body.style.overflow = '';
  }

  window.AMX_openCart = openDrawer;

  /* ---------- Render cart items ---------- */
  function render() {
    var body = document.getElementById('cartBody');
    var footer = document.getElementById('cartFooter');
    var title = document.getElementById('cartTitle');
    if (!body) return;

    if (title) title.textContent = t('Your Cart', 'Twój Koszyk');

    var cart = getCart();
    if (cart.length === 0) {
      body.innerHTML =
        '<div class="cart-drawer__empty">' +
          '<svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="54" r="4"/><circle cx="48" cy="54" r="4"/><path d="M2 6h8l6 32h36l6-24H18"/></svg>' +
          '<p>' + t('Your cart is empty', 'Twój koszyk jest pusty') + '</p>' +
        '</div>';
      footer.innerHTML = '';
      return;
    }

    var html = '';
    cart.forEach(function (item) {
      var p = PRODUCTS[item.productId];
      if (!p) return;
      var price = item.isSub ? p.priceSub : p.price;
      var pName = lang() === 'pl' ? p.namePl : p.name;
      var pDesc = lang() === 'pl' ? p.descPl : p.desc;
      html +=
        '<div class="cart-item">' +
          '<img src="' + BASE + p.img + '" alt="' + pName + '" class="cart-item__img">' +
          '<div class="cart-item__info">' +
            '<strong>' + pName + '</strong>' +
            '<span class="cart-item__desc">' + pDesc + '</span>' +
            (item.isSub ? '<span class="cart-item__sub">' + t('Monthly subscription', 'Subskrypcja miesięczna') + '</span>' : '') +
            '<div class="cart-item__qty">' +
              '<button class="cart-item__qty-btn" data-key="' + item.key + '" data-delta="-1">−</button>' +
              '<span>' + item.qty + '</span>' +
              '<button class="cart-item__qty-btn" data-key="' + item.key + '" data-delta="1">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="cart-item__right">' +
            '<span class="cart-item__price">€' + (price * item.qty) + '</span>' +
            '<button class="cart-item__remove" data-remove="' + item.key + '" aria-label="Remove">&times;</button>' +
          '</div>' +
        '</div>';
    });
    body.innerHTML = html;

    body.querySelectorAll('.cart-item__qty-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        updateQty(btn.getAttribute('data-key'), parseInt(btn.getAttribute('data-delta')));
      });
    });
    body.querySelectorAll('.cart-item__remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeItem(btn.getAttribute('data-remove'));
      });
    });

    var total = cartTotal();
    var checkoutUrl = BASE + 'checkout.html';
    footer.innerHTML =
      '<div class="cart-drawer__total">' +
        '<span>' + t('Total', 'Suma') + '</span>' +
        '<strong>€' + total + '</strong>' +
      '</div>' +
      '<a href="' + checkoutUrl + '" class="btn btn--gold btn--lg btn--full">' + t('Checkout', 'Przejdź do kasy') + '</a>' +
      '<p class="cart-drawer__shipping-note">' + t('Shipping calculated at checkout', 'Wysyłka obliczona przy kasie') + '</p>' +
      '<p class="cart-drawer__secure">' +
        '<svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M10 1a5 5 0 0 0-5 5v2H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V6a5 5 0 0 0-5-5zm-3 5a3 3 0 1 1 6 0v2H7V6z"/></svg> ' +
        t('Secure checkout · SSL encrypted', 'Bezpieczna kasa · Szyfrowanie SSL') +
      '</p>';
  }

  /* ---------- Badge on nav cart icon ---------- */
  function updateBadge() {
    var badges = document.querySelectorAll('.nav__cart-count');
    var count = cartCount();
    badges.forEach(function (b) {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  /* ---------- Wire up all [data-checkout] buttons ---------- */
  function wireButtons() {
    document.querySelectorAll('[data-checkout]').forEach(function (btn) {
      btn.removeEventListener('click', handleAdd);
      btn.addEventListener('click', handleAdd);
    });
  }

  function handleAdd(e) {
    e.preventDefault();
    var id = this.getAttribute('data-checkout');
    var isSub = id.indexOf('-sub') !== -1;
    var productId = id.replace('-onetime', '').replace('-sub', '');
    addItem(productId, isSub);
  }

  /* ---------- Nav cart icon click ---------- */
  function wireCartIcon() {
    document.querySelectorAll('.nav__cart-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openDrawer();
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    wireButtons();
    wireCartIcon();
    updateBadge();
  });
})();
