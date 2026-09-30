function getCheckoutFormData() {
  const form = document.getElementById('checkout-form');
  if (!form) return null;

  const formData = new FormData(form);
  return {
    fullName: String(formData.get('fullName') || '').trim(),
    mobile: String(formData.get('mobile') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    house: String(formData.get('house') || '').trim(),
    street: String(formData.get('street') || '').trim(),
    area: String(formData.get('area') || '').trim(),
    city: String(formData.get('city') || '').trim(),
    state: String(formData.get('state') || '').trim(),
    pincode: String(formData.get('pincode') || '').trim(),
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value || 'UPI / PhonePe'
  };
}

function renderCheckoutSummary() {
  const summaryContainer = document.getElementById('checkout-summary');
  if (!summaryContainer) return;

  const totals = getCartTotals();
  const items = getCartItemsWithProducts();

  summaryContainer.innerHTML = `
    <h3>Order Summary</h3>
    ${items.map((item) => `
      <div class="checkout-item">
        <div>
          <strong>${item.product.name}</strong>
          <p>Qty: ${item.quantity}</p>
        </div>
        <strong>${formatPrice(item.product.price * item.quantity)}</strong>
      </div>
    `).join('')}
    <div class="summary-row">
      <span>Subtotal</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="summary-row">
      <span>Discount</span>
      <strong>- ${formatPrice(totals.discount)}</strong>
    </div>
    <div class="summary-row">
      <span>Delivery</span>
      <strong>${formatPrice(totals.delivery)}</strong>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <strong>${formatPrice(totals.total)}</strong>
    </div>
  `;
}

function validateCheckoutData(data) {
  if (!data.fullName || !data.mobile || !data.email || !data.house || !data.street || !data.area || !data.city || !data.state || !data.pincode) {
    return 'Please fill in all delivery details.';
  }

  if (!/^\d{10}$/.test(data.mobile)) {
    return 'Mobile number should be 10 digits.';
  }

  if (!validateEmail(data.email)) {
    return 'Enter a valid email address.';
  }

  if (!/^\d{6}$/.test(data.pincode)) {
    return 'Pincode should be 6 digits.';
  }

  return '';
}

function placeOrder() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const orderData = getCheckoutFormData();
    const validationError = validateCheckoutData(orderData);

    if (validationError) {
      showToast(validationError);
      return;
    }

    const cartItems = getCartItemsWithProducts();
    if (!cartItems.length) {
      showToast('Your cart is empty.');
      return;
    }

    const totals = getCartTotals();
    const orderId = generateId('LJORD');
    const verificationCode = Math.random().toString(36).toUpperCase().slice(2, 8);
    const estimatedDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const order = {
      orderId,
      verificationCode,
      customerName: orderData.fullName,
      items: cartItems.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      deliveryAddress: {
        house: orderData.house,
        street: orderData.street,
        area: orderData.area,
        city: orderData.city,
        state: orderData.state,
        pincode: orderData.pincode
      },
      paymentMethod: orderData.paymentMethod,
      totalAmount: totals.total,
      estimatedDeliveryDate: estimatedDate,
      createdAt: new Date().toISOString()
    };

    const orders = getFromStorage(STORAGE_KEYS.orders, []);
    orders.push(order);
    saveToStorage(STORAGE_KEYS.orders, orders);
    saveToStorage(STORAGE_KEYS.latestOrder, order);
    saveToStorage(STORAGE_KEYS.cart, []);
    updateHeaderCounters();

    window.location.href = `order-confirmation.html?orderId=${orderId}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  placeOrder();
});
