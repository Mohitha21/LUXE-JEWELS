const STORAGE_KEYS = {
  cart: 'luxeJewelsCart',
  wishlist: 'luxeJewelsWishlist',
  users: 'luxeJewelsDemoUsers',
  currentUser: 'luxeJewelsCurrentUser',
  orders: 'luxeJewelsOrders',
  latestOrder: 'luxeJewelsLatestOrder'
};

function getFromStorage(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function generateId(prefix = 'LJ') {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function showToast(message) {
  let toast = document.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

function setupMobileNav() {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleButton || !navLinks) return;

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function updateHeaderCounters() {
  const cart = getFromStorage(STORAGE_KEYS.cart, []);
  const wishlist = getFromStorage(STORAGE_KEYS.wishlist, []);

  const cartCount = document.querySelectorAll('.cart-count');
  const wishlistCount = document.querySelectorAll('.wishlist-count');

  cartCount.forEach((el) => {
    el.textContent = cart.length || 0;
  });

  wishlistCount.forEach((el) => {
    el.textContent = wishlist.length || 0;
  });
}

function getCartItemsWithProducts() {
  const cart = getFromStorage(STORAGE_KEYS.cart, []);
  const products = window.jewelProducts || [];
  const productMap = new Map(products.map((product) => [product.id, product]));

  return cart
    .map((item) => ({ ...item, product: productMap.get(item.id) }))
    .filter((item) => item.product);
}

function getCartTotals() {
  const cartItems = getCartItemsWithProducts();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => sum + (
    (item.product.originalPrice - item.product.price) * item.quantity
  ), 0);
  const delivery = subtotal > 0 ? (subtotal >= 25000 ? 0 : 499) : 0;
  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total
  };
}

function addToCart(productId, quantity = 1, redirectToCheckout = false) {
  const cart = getFromStorage(STORAGE_KEYS.cart, []);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveToStorage(STORAGE_KEYS.cart, cart);
  updateHeaderCounters();
  showToast('Added to cart');

  if (redirectToCheckout) {
    window.location.href = 'checkout.html';
  }
}

function removeFromCart(productId) {
  const cart = getFromStorage(STORAGE_KEYS.cart, []).filter((item) => item.id !== productId);
  saveToStorage(STORAGE_KEYS.cart, cart);
  updateHeaderCounters();
  window.location.reload();
}

function updateCartItemQuantity(productId, newQuantity) {
  const cart = getFromStorage(STORAGE_KEYS.cart, []);
  const item = cart.find((entry) => entry.id === productId);

  if (!item) return;

  item.quantity = Math.max(1, newQuantity);
  saveToStorage(STORAGE_KEYS.cart, cart);
  updateHeaderCounters();
  window.location.reload();
}

function toggleWishlist(productId) {
  const wishlist = getFromStorage(STORAGE_KEYS.wishlist, []);
  const exists = wishlist.includes(productId);
  const updated = exists ? wishlist.filter((id) => id !== productId) : [...wishlist, productId];
  saveToStorage(STORAGE_KEYS.wishlist, updated);
  updateHeaderCounters();

  document.querySelectorAll('.wishlist-toggle').forEach((button) => {
    const id = button.dataset.id;
    button.classList.toggle('active', updated.includes(id));
    button.innerHTML = updated.includes(id) ? '♥' : '♡';
  });

  showToast(exists ? 'Removed from wishlist' : 'Added to wishlist');
}

function isProductWishlisted(productId) {
  const wishlist = getFromStorage(STORAGE_KEYS.wishlist, []);
  return wishlist.includes(productId);
}

function handleProductActionClicks() {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-cart');
    const buyButton = event.target.closest('.buy-now');
    const wishlistButton = event.target.closest('.wishlist-toggle');

    if (addButton) {
      event.preventDefault();
      addToCart(addButton.dataset.id, 1, false);
    }

    if (buyButton) {
      event.preventDefault();
      addToCart(buyButton.dataset.id, 1, true);
    }

    if (wishlistButton) {
      event.preventDefault();
      toggleWishlist(wishlistButton.dataset.id);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupMobileNav();
  updateHeaderCounters();
  handleProductActionClicks();

  const currentUser = getFromStorage(STORAGE_KEYS.currentUser, null);
  const userNameEl = document.querySelector('[data-user-name]');

  if (userNameEl) {
    userNameEl.textContent = currentUser ? currentUser.name.split(' ')[0] : 'Guest';
  }
});
