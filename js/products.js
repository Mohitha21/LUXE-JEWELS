const jewelProducts = [
  {
    id: 'aurora-halo-ring',
    name: 'Aurora Halo Ring',
    category: 'Rings',
    price: 12800,
    originalPrice: 18500,
    rating: 4.9,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: true,
    description: 'A radiant ring featuring a sculpted halo setting that catches light beautifully for everyday elegance.',
    material: '18K Gold Vermeil',
    weight: '4.2 g',
    size: '6-8',
    availability: 'In Stock'
  },
  {
    id: 'celestine-pendant',
    name: 'Celestine Pendant',
    category: 'Necklaces',
    price: 15400,
    originalPrice: 22400,
    rating: 4.8,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: true,
    description: 'A delicate pendant created to sit elegantly at the neckline with a graceful luminous silhouette.',
    material: 'Gold Plated Brass',
    weight: '6.1 g',
    size: '18 inch',
    availability: 'In Stock'
  },
  {
    id: 'solstice-drop-earrings',
    name: 'Solstice Drop Earrings',
    category: 'Earrings',
    price: 9900,
    originalPrice: 14900,
    rating: 4.7,
    discount: 34,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80',
    isNew: false,
    isPopular: true,
    description: 'Lightweight statement earrings crafted to sway gently and bring a refined glow to your look.',
    material: 'Sterling Silver',
    weight: '3.8 g',
    size: 'Standard',
    availability: 'Limited Stock'
  },
  {
    id: 'royale-link-bracelet',
    name: 'Royale Link Bracelet',
    category: 'Bracelets',
    price: 14200,
    originalPrice: 19800,
    rating: 4.9,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: true,
    description: 'A polished chain bracelet made for elevated daily wear with clean lines and graceful shine.',
    material: '18K Gold',
    weight: '7.4 g',
    size: '7 inch',
    availability: 'In Stock'
  },
  {
    id: 'moonlit-bangle',
    name: 'Moonlit Bangle',
    category: 'Bangles',
    price: 16800,
    originalPrice: 23300,
    rating: 4.8,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: false,
    isPopular: true,
    description: 'An iconic bangle with subtle craftsmanship and a soft sheen designed for ceremonial elegance.',
    material: 'Gold Finish',
    weight: '8.2 g',
    size: 'Adjustable',
    availability: 'In Stock'
  },
  {
    id: 'summit-gold-chain',
    name: 'Summit Gold Chain',
    category: 'Gold Jewellery',
    price: 19200,
    originalPrice: 26800,
    rating: 5,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: false,
    isPopular: true,
    description: 'A signature gold chain with a timeless profile suited to layering and gifting moments.',
    material: 'Pure Gold',
    weight: '9.6 g',
    size: '20 inch',
    availability: 'In Stock'
  },
  {
    id: 'prism-diamond-band',
    name: 'Prism Diamond Band',
    category: 'Diamond Jewellery',
    price: 24600,
    originalPrice: 33200,
    rating: 4.9,
    discount: 26,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: true,
    description: 'A diamond band that blends brilliance and minimalist design for modern heirloom appeal.',
    material: 'Diamond & Gold',
    weight: '5.0 g',
    size: '5-9',
    availability: 'In Stock'
  },
  {
    id: 'velvet-silver-cuff',
    name: 'Velvet Silver Cuff',
    category: 'Silver Jewellery',
    price: 10900,
    originalPrice: 15900,
    rating: 4.6,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: false,
    isPopular: false,
    description: 'A silver cuff designed for effortless polish and a sleek statement during day-to-night styling.',
    material: 'Sterling Silver',
    weight: '6.3 g',
    size: 'Adjustable',
    availability: 'In Stock'
  },
  {
    id: 'eclipse-pearl-earrings',
    name: 'Eclipse Pearl Earrings',
    category: 'Earrings',
    price: 11700,
    originalPrice: 17200,
    rating: 4.8,
    discount: 32,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: false,
    description: 'Pearl accents and clean goldwork combine in an elegant pair made for graceful sophistication.',
    material: 'Pearl & Gold',
    weight: '4.0 g',
    size: 'Standard',
    availability: 'In Stock'
  },
  {
    id: 'luna-cascade-necklace',
    name: 'Luna Cascade Necklace',
    category: 'Necklaces',
    price: 17800,
    originalPrice: 24800,
    rating: 4.9,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: true,
    description: 'An elegant cascading necklace with layered beauty and a refined finish for statement occasions.',
    material: 'Gold Plated Alloy',
    weight: '10.5 g',
    size: '18 inch',
    availability: 'In Stock'
  },
  {
    id: 'marble-rose-ring',
    name: 'Marble Rose Ring',
    category: 'Rings',
    price: 13600,
    originalPrice: 19900,
    rating: 4.7,
    discount: 32,
    image: 'https://images.unsplash.com/photo-1602751584542-3a6f5b45f9b2?auto=format&fit=crop&w=900&q=80',
    isNew: false,
    isPopular: false,
    description: 'A softly sculpted ring with romantic detailing and a polished presence for modern styling.',
    material: 'Rose Gold Finish',
    weight: '4.6 g',
    size: '6-8',
    availability: 'Limited Stock'
  },
  {
    id: 'seraphine-gold-bracelet',
    name: 'Seraphine Gold Bracelet',
    category: 'Gold Jewellery',
    price: 16900,
    originalPrice: 23400,
    rating: 4.8,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    isPopular: false,
    description: 'A refined gold bracelet with timeless polish that pairs seamlessly with both festive and daily looks.',
    material: '18K Gold',
    weight: '7.8 g',
    size: '7.5 inch',
    availability: 'In Stock'
  }
];

function getProductById(productId) {
  return jewelProducts.find((product) => product.id === productId);
}

function buildProductCard(product) {
  const isWishlisted = isProductWishlisted(product.id);
  const ratingHtml = Array.from({ length: 5 }, (_, index) => {
    const fill = index < Math.round(product.rating) ? '★' : '☆';
    return `<span>${fill}</span>`;
  }).join('');

  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-badge">${product.isNew ? 'New' : product.isPopular ? 'Popular' : 'Classic'}</span>
        <button class="wishlist-btn wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
          ${isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div class="product-body">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${ratingHtml}</span>
          <span>${product.rating}</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          <span class="product-original">${formatPrice(product.originalPrice)}</span>
          <span class="product-discount">${product.discount}% off</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
          <button class="btn btn-secondary buy-now" data-id="${product.id}">Buy Now</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(products, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  target.innerHTML = products.map(buildProductCard).join('');
}

function renderFeaturedProducts() {
  const featured = jewelProducts.filter((product) => product.isPopular).slice(0, 4);
  renderProducts(featured, '#featured-products-grid');
  renderProducts(jewelProducts.slice(0, 4), '#new-arrivals-grid');
  renderProducts(jewelProducts.filter((product) => product.isPopular).slice(0, 4), '#best-sellers-grid');
}

function renderShopProducts() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const sortFilter = document.getElementById('sort-filter');
  const productGrid = document.getElementById('shop-product-grid');

  if (!productGrid) return;

  const filtered = jewelProducts.filter((product) => {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value : 'all';
    const minRating = ratingFilter ? Number(ratingFilter.value) : 0;
    const priceRange = priceFilter ? priceFilter.value : 'all';

    const matchesSearch = !searchTerm || product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesRating = product.rating >= minRating;

    let matchesPrice = true;
    if (priceRange === 'under-10000') matchesPrice = product.price < 10000;
    if (priceRange === '10000-20000') matchesPrice = product.price >= 10000 && product.price <= 20000;
    if (priceRange === '20000-30000') matchesPrice = product.price > 20000 && product.price <= 30000;
    if (priceRange === 'above-30000') matchesPrice = product.price > 30000;

    return matchesSearch && matchesCategory && matchesRating && matchesPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    const sorter = sortFilter ? sortFilter.value : 'featured';

    if (sorter === 'low-high') return a.price - b.price;
    if (sorter === 'high-low') return b.price - a.price;
    if (sorter === 'newest') return Number(b.isNew) - Number(a.isNew);
    if (sorter === 'popular') return b.rating - a.rating;

    return b.isPopular - a.isPopular;
  });

  productGrid.innerHTML = sorted.length
    ? sorted.map(buildProductCard).join('')
    : `<div class="empty-state" style="grid-column: 1 / -1;"><h3>No Jewellery Found</h3><p>Try another search or filter combination.</p></div>`;
}

function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const categories = [
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&w=900&q=80' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80' },
    { name: 'Bangles', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
    { name: 'Gold Jewellery', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' }
  ];

  container.innerHTML = categories.map((category) => `
    <a href="products.html?category=${encodeURIComponent(category.name)}" class="category-card">
      <img src="${category.image}" alt="${category.name}">
      <div>
        <h3>${category.name}</h3>
        <p>Curated pieces for distinct moments.</p>
      </div>
    </a>
  `).join('');
}

function renderProductDetail() {
  const detailRoot = document.getElementById('product-detail');
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);

  if (!product) {
    detailRoot.innerHTML = '<div class="empty-state"><h3>Product not found</h3><p>The selected jewellery item could not be located.</p></div>';
    return;
  }

  const isWishlisted = isProductWishlisted(product.id);

  detailRoot.innerHTML = `
    <div class="product-detail-layout">
      <div class="detail-gallery">
        <div class="detail-main-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
      </div>
      <div class="detail-info">
        <p class="product-category">${product.category}</p>
        <h1>${product.name}</h1>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating} / 5</span>
        </div>
        <div class="detail-price-row">
          <span class="detail-price">${formatPrice(product.price)}</span>
          <span class="product-original">${formatPrice(product.originalPrice)}</span>
          <span class="product-discount">${product.discount}% off</span>
        </div>
        <p>${product.description}</p>
        <div class="meta-row">
          <div class="meta-item"><strong>Material</strong><span>${product.material}</span></div>
          <div class="meta-item"><strong>Weight</strong><span>${product.weight}</span></div>
          <div class="meta-item"><strong>Size</strong><span>${product.size}</span></div>
          <div class="meta-item"><strong>Availability</strong><span>${product.availability}</span></div>
        </div>
        <div class="detail-cta">
          <div class="qty-box">
            <button type="button" data-qty-action="minus">-</button>
            <span class="qty-value">1</span>
            <button type="button" data-qty-action="plus">+</button>
          </div>
          <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
          <button class="btn btn-secondary buy-now" data-id="${product.id}">Buy Now</button>
          <button class="btn btn-outline wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}">${isWishlisted ? '♥ Wishlisted' : '♡ Wishlist'}</button>
        </div>
      </div>
    </div>
  `;

  const qtyValue = detailRoot.querySelector('.qty-value');
  detailRoot.querySelectorAll('[data-qty-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const currentValue = Number(qtyValue.textContent);
      const nextValue = button.dataset.qtyAction === 'plus' ? currentValue + 1 : Math.max(1, currentValue - 1);
      qtyValue.textContent = nextValue;
    });
  });

  detailRoot.querySelector('.add-to-cart')?.addEventListener('click', () => {
    const quantity = Number(detailRoot.querySelector('.qty-value').textContent);
    addToCart(product.id, quantity, false);
  });

  detailRoot.querySelector('.buy-now')?.addEventListener('click', () => {
    const quantity = Number(detailRoot.querySelector('.qty-value').textContent);
    const cart = getFromStorage(STORAGE_KEYS.cart, []);
    const item = cart.find((entry) => entry.id === product.id);

    if (item) {
      item.quantity += quantity;
    } else {
      cart.push({ id: product.id, quantity });
    }

    saveToStorage(STORAGE_KEYS.cart, cart);
    updateHeaderCounters();
    window.location.href = 'checkout.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCategories();
  renderShopProducts();
  renderProductDetail();

  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const sortFilter = document.getElementById('sort-filter');

  [searchInput, categoryFilter, priceFilter, ratingFilter, sortFilter].forEach((element) => {
    if (element) {
      element.addEventListener('input', renderShopProducts);
      element.addEventListener('change', renderShopProducts);
    }
  });

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (category && categoryFilter) {
    categoryFilter.value = category;
  }

  if (window.location.pathname.endsWith('products.html')) {
    const productGrid = document.getElementById('shop-product-grid');
    if (productGrid) {
      setTimeout(() => renderShopProducts(), 0);
    }
  }
});

window.jewelProducts = jewelProducts;
