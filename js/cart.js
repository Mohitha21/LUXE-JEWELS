document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');

  if (!cartItemsContainer || !cartSummary) return;

  const cart = getFromStorage(STORAGE_KEYS.cart, []);
  const productMap = new Map((window.jewelProducts || []).map((product) => [product.id, product]));
  const items = cart
    .map((item) => ({ ...item, product: productMap.get(item.id) }))
    .filter((item) => item.product);

  if (!items.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is empty</h3>
        <p>Discover timeless pieces and add your favourites to begin shopping.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 18px;">Start Shopping</a>
      </div>
    `;
    cartSummary.innerHTML = `
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(0)}</strong></div>
      <div class="summary-row"><span>Discount</span><strong>${formatPrice(0)}</strong></div>
      <div class="summary-row"><span>Delivery</span><strong>${formatPrice(0)}</strong></div>
      <div class="summary-row total"><span>Total</span><strong>${formatPrice(0)}</strong></div>
      <a href="products.html" class="btn btn-primary" style="width: 100%; margin-top: 18px;">Continue Shopping</a>
    `;
    return;
  }

  const totals = getCartTotals();

  cartItemsContainer.innerHTML = items.map((item) => `
    <div class="cart-item" data-cart-id="${item.id}">
      <img src="${item.product.image}" alt="${item.product.name}">
      <div>
        <h3>${item.product.name}</h3>
        <div class="cart-item-meta">${item.product.category} • ${formatPrice(item.product.price)}</div>
        <div class="cart-actions">
          <div class="qty-box">
            <button type="button" class="qty-adjust" data-action="decrease" data-id="${item.id}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button type="button" class="qty-adjust" data-action="increase" data-id="${item.id}">+</button>
          </div>
          <button class="btn btn-outline remove-cart-item" data-id="${item.id}">Remove</button>
        </div>
      </div>
      <div class="cart-price">${formatPrice(item.product.price * item.quantity)}</div>
    </div>
  `).join('');

  cartSummary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(totals.subtotal)}</strong></div>
    <div class="summary-row"><span>Discount</span><strong>- ${formatPrice(totals.discount)}</strong></div>
    <div class="summary-row"><span>Delivery</span><strong>${formatPrice(totals.delivery)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${formatPrice(totals.total)}</strong></div>
    <a href="checkout.html" class="btn btn-primary" style="width: 100%; margin-top: 18px;">Proceed to Checkout</a>
  `;

  document.querySelectorAll('.remove-cart-item').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.id));
  });

  document.querySelectorAll('.qty-adjust').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      const action = button.dataset.action;
      const cartEntry = getFromStorage(STORAGE_KEYS.cart, []).find((item) => item.id === productId);
      const nextQty = action === 'increase' ? (cartEntry?.quantity || 1) + 1 : (cartEntry?.quantity || 1) - 1;
      updateCartItemQuantity(productId, Math.max(1, nextQty));
    });
  });
});
