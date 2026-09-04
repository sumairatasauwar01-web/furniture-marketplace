const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dots button')];
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeSlide));
}

function restartCarousel() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide((activeSlide + 1) % slides.length), 5000);
}

dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); restartCarousel(); }));
restartCarousel();

const listings = [
  ['Beds', 'Teakwood King Platform Bed', 38999, 'Solid teak wood, warm honey finish and sturdy slatted support for restful nights.', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85'],
  ['Beds', 'Upholstered Storage Bed', 45999, 'Soft linen headboard with deep hydraulic storage and custom fabric options.', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'],
  ['Beds', 'Minimalist Queen Bed', 27999, 'Clean-lined engineered wood bed with a calm oak texture for modern bedrooms.', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85'],
  ['Beds', 'Canopy Four Poster Bed', 54999, 'A statement four-poster silhouette crafted for spacious, elegant bedrooms.', 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=85'],
  ['Wardrobes', 'Classic 3 Door Wardrobe', 32500, 'Teak finish wardrobe with soft-close shutters, drawers and adjustable shelving.', 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85'],
  ['Wardrobes', 'Sliding Mirror Wardrobe', 41999, 'Space-saving two-door wardrobe with full-length mirrors and smooth rollers.', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85'],
  ['Wardrobes', 'Fluted Glass Almirah', 36999, 'Contemporary fluted glass doors, brass handles and a generous hanging rail.', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85'],
  ['Wardrobes', 'Compact Entry Armoire', 21999, 'A versatile storage piece for linens, clothes or entryway essentials.', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85'],
  ['Study Tables', 'Walnut Executive Desk', 18999, 'Spacious walnut worktop with cable management and two soft-close drawers.', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'],
  ['Study Tables', 'Ladder Study Workstation', 14999, 'Smart vertical storage with a compact desk surface for small rooms.', 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6b1?auto=format&fit=crop&w=900&q=85'],
  ['Study Tables', 'Kids Homework Desk', 9999, 'Rounded-edge study table with easy-clean finish and cheerful open storage.', 'https://images.unsplash.com/photo-1616627988036-7e4c1c0eabde?auto=format&fit=crop&w=900&q=85'],
  ['Study Tables', 'Cane Writing Table', 16499, 'Natural cane details and a solid wood top for a warm, focused workspace.', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85'],
  ['Side Tables', 'Round Marble Side Table', 7499, 'Compact powder-coated frame with a timeless white marble-look top.', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=85'],
  ['Side Tables', 'Nesting Side Table Set', 8999, 'Two versatile nesting tables in contrasting wood tones for flexible hosting.', 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85'],
  ['Side Tables', 'Cane Bedside Table', 6799, 'Handwoven cane front, hidden drawer and a gently rounded bedside profile.', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85'],
  ['Side Tables', 'Oak C-Shaped Table', 5999, 'A slim pull-up table made for coffee, books and laptop-side comfort.', 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85'],
  ['TV Units', 'Warm Oak TV Unit', 18499, 'Floating storage, cable concealment and open shelves for a calm media wall.', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85'],
  ['TV Units', 'Ribbed Wood Media Console', 23999, 'Textured ribbed doors with roomy cabinets and a low modern silhouette.', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85'],
  ['TV Units', 'Compact Wall TV Cabinet', 14999, 'A neat wall-mounted solution for apartments and compact living rooms.', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85'],
  ['TV Units', 'Classic Display TV Unit', 29999, 'A statement unit with display niches, drawers and a rich walnut finish.', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85'],
  ['Kitchen', 'Modular Sage Kitchen', 89999, 'Functional modular layout with soft-close cabinets and durable quartz counter.', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85'],
  ['Kitchen', 'Woodgrain Kitchen Set', 109999, 'Warm woodgrain fronts, tall pantry storage and practical work triangle planning.', 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85'],
  ['Kitchen', 'Compact Apartment Kitchen', 69999, 'A bright, efficient kitchen designed to make every centimetre work harder.', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85'],
  ['Kitchen', 'Island Kitchen Collection', 139999, 'Premium island layout with deep drawers, breakfast seating and tall storage.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85'],
  ['Sofa', 'Everyday Lounge Sofa', 28999, 'Deep cushions, premium upholstery and a relaxed three-seater for daily comfort.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85'],
  ['Sofa', 'L Shape Family Sofa', 52999, 'Roomy L-shaped seating with reversible chaise and stain-resistant fabric.', 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85'],
  ['Sofa', 'Boucle Accent Loveseat', 21999, 'A soft boucle loveseat with curved arms for cosy corners and reading nooks.', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85'],
  ['Sofa', 'Modern Recliner Sofa', 35999, 'Supportive reclining comfort with clean lines and easy-care performance fabric.', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=85'],
  ['Other Furniture', 'Solid Wood Shoe Cabinet', 11999, 'Slim ventilated shoe storage with a useful drawer and natural wood grain.', 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85'],
  ['Other Furniture', 'Cane Accent Chair', 12999, 'Handwoven cane back and a comfortable upholstered seat for relaxed lounging.', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85'],
  ['Other Furniture', 'Round Dining Table', 24999, 'A welcoming four-seater dining table with a softly curved solid wood base.', 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=900&q=85'],
  ['Other Furniture', 'Entryway Console Table', 13999, 'Slim console with drawers for keys, mail and a beautifully styled entrance.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85']
].map(([category, title, price, description, image], index) => ({ id: index + 1, category, title, price, description, image, rating: (4.6 + (index % 5) * 0.1).toFixed(1) }));

const searchInput = document.getElementById('designSearch');
const clearSearch = document.getElementById('clearSearch');
const productGrid = document.getElementById('productGrid');
const emptyResults = document.getElementById('emptyResults');
const designTitle = document.getElementById('designTitle');
const designKicker = document.getElementById('designKicker');
let activeCategory = 'All';
let savedDesignIds = JSON.parse(localStorage.getItem('al-amin-wishlist') || '[]');
let currentUser = JSON.parse(localStorage.getItem('al-amin-user') || 'null');
let enquiries = JSON.parse(localStorage.getItem('al-amin-enquiries') || '[]');
const panelBackdrop = document.getElementById('panelBackdrop');
const panelContent = document.getElementById('panelContent');

function persistUserData() {
  localStorage.setItem('al-amin-wishlist', JSON.stringify(savedDesignIds));
  localStorage.setItem('al-amin-enquiries', JSON.stringify(enquiries));
  if (currentUser) localStorage.setItem('al-amin-user', JSON.stringify(currentUser));
}

function openPanel(content) {
  panelContent.innerHTML = content;
  panelBackdrop.hidden = false;
  document.body.classList.add('panel-open');
}

function closePanel() {
  panelBackdrop.hidden = true;
  document.body.classList.remove('panel-open');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function whatsappUrl(product) {
  const message = product
    ? `Hello Al Amin Furniture, I am interested in ${product.title}. Price: ${rupees(product.price)}. Design image: ${product.image}`
    : 'Hello Al Amin Furniture, I would like to discuss a custom furniture design.';
  return `https://wa.me/919918405258?text=${encodeURIComponent(message)}`;
}

function rupees(value) { return `₹${value.toLocaleString('en-IN')}`; }

function renderListings() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = listings.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const searchable = `${item.title} ${item.category} ${item.description}`.toLowerCase();
    return matchesCategory && (!term || searchable.includes(term));
  });
  productGrid.innerHTML = visible.map(item => `<article class="product-card" data-category="${item.category}"><div class="product-image" style="background-image:url('${item.image}')"><span class="new-badge">NEW</span><button class="heart ${savedDesignIds.includes(item.id) ? 'saved' : ''}" aria-label="Save ${item.title}">${savedDesignIds.includes(item.id) ? '♥' : '♡'}</button></div><div class="product-info"><span class="listing-category">${item.category}</span><h3>${item.title}</h3><div class="rating">★ ${item.rating} <span>(New design)</span></div><p>${item.description}</p><strong>From ${rupees(item.price)}</strong><div class="product-actions"><button class="enquiry-button" data-product-id="${item.id}">Enquire</button><a class="whatsapp-button" href="${whatsappUrl(item)}" target="_blank" rel="noreferrer">WhatsApp</a></div></div></article>`).join('');
  designTitle.textContent = activeCategory === 'All' ? 'New Designs' : activeCategory;
  designKicker.textContent = `${activeCategory === 'All' ? 'Fresh from the workshop' : 'Handpicked collection'} · ${visible.length} designs`;
  emptyResults.hidden = visible.length > 0;
  productGrid.querySelectorAll('.heart').forEach(button => button.addEventListener('click', saveDesign));
  productGrid.querySelectorAll('.enquiry-button').forEach(button => button.addEventListener('click', () => openEnquiryForm(Number(button.dataset.productId))));
}

function saveDesign(event) {
  const button = event.currentTarget;
  const productId = Number(button.closest('.product-card').querySelector('[data-product-id]')?.dataset.productId);
  button.classList.toggle('saved');
  button.textContent = button.classList.contains('saved') ? '♥' : '♡';
  savedDesignIds = button.classList.contains('saved') ? [...new Set([...savedDesignIds, productId])] : savedDesignIds.filter(id => id !== productId);
  persistUserData();
  showToast(button.classList.contains('saved') ? 'Design saved to My Enquiry' : 'Design removed');
}

function filterDesigns() {
  renderListings();
  clearSearch.style.display = searchInput.value.trim() ? 'block' : 'none';
}

searchInput.addEventListener('input', filterDesigns);
clearSearch.addEventListener('click', () => { searchInput.value = ''; filterDesigns(); searchInput.focus(); });

document.querySelectorAll('.category-card').forEach(card => card.addEventListener('click', () => {
  activeCategory = card.dataset.category;
  renderListings();
}));

document.getElementById('showAll').addEventListener('click', () => {
  activeCategory = 'All';
  searchInput.value = '';
  renderListings();
});

renderListings();

function openAuth(mode = 'login') {
  openPanel(`<p class="kicker green">Al Amin Furniture account</p><h2 class="panel-title">${mode === 'signup' ? 'Create your profile' : 'Welcome back'}</h2><p class="panel-subtitle">Save designs, manage delivery details and track your furniture enquiries.</p><form class="panel-form" id="authForm">${mode === 'signup' ? '<label>Your name<input name="name" required placeholder="Your full name"></label>' : ''}<label>Mobile number<input name="phone" required type="tel" pattern="[0-9+ ()-]{10,}" placeholder="+91 99184 05258"></label>${mode === 'signup' ? '<label>Delivery / installation address<textarea name="address" required placeholder="House number, street, city"></textarea></label>' : ''}<button class="panel-submit" type="submit">${mode === 'signup' ? 'Create account' : 'Login with mobile'} →</button></form><button class="panel-switch" id="authSwitch">${mode === 'signup' ? 'Already have an account? Login' : 'New here? Create an account'}</button>`);
  document.getElementById('authSwitch').addEventListener('click', () => openAuth(mode === 'signup' ? 'login' : 'signup'));
  document.getElementById('authForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    currentUser = { name: form.get('name') || 'Al Amin customer', phone: form.get('phone'), address: form.get('address') || currentUser?.address || '' };
    persistUserData();
    closePanel();
    showToast(`Welcome, ${currentUser.name}`);
  });
}

function openProfile() {
  if (!currentUser) return openAuth('login');
  const saved = listings.filter(item => savedDesignIds.includes(item.id));
  openPanel(`<p class="kicker green">Your account</p><div class="profile-head"><div class="profile-avatar">${currentUser.name.charAt(0).toUpperCase()}</div><div><h2 class="panel-title" id="panelTitle">${currentUser.name}</h2><p class="panel-subtitle">${currentUser.phone}</p></div></div><form class="panel-form" id="profileForm"><label>Name<input name="name" required value="${currentUser.name}"></label><label>Phone number<input name="phone" required type="tel" value="${currentUser.phone}"></label><label>Delivery / installation address<textarea name="address" required>${currentUser.address || ''}</textarea></label><button class="panel-submit" type="submit">Save profile →</button></form><p class="panel-section-label">Saved wishlist · ${saved.length}</p><div class="saved-list">${saved.length ? saved.map(item => `<div class="saved-item"><img src="${item.image}" alt="${item.title}"><div><h3>${item.title}</h3><p>${rupees(item.price)} · ${item.category}</p></div></div>`).join('') : '<div class="panel-empty">Tap the heart on any design to save it here.</div>'}</div><button class="panel-switch" id="logoutButton">Log out</button>`);
  document.getElementById('profileForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    currentUser = { name: form.get('name'), phone: form.get('phone'), address: form.get('address') };
    persistUserData();
    closePanel();
    showToast('Profile updated');
  });
  document.getElementById('logoutButton').addEventListener('click', () => { currentUser = null; localStorage.removeItem('al-amin-user'); closePanel(); showToast('You are logged out'); });
}

function openEnquiryForm(productId = null) {
  const product = listings.find(item => item.id === productId);
  openPanel(`<p class="kicker green">Custom furniture studio</p><h2 class="panel-title">Tell us what to make</h2><p class="panel-subtitle">Share your requirements and our team will call you with a design and estimate.</p><form class="panel-form" id="enquiryForm"><label>Furniture category<select name="category">${['Beds', 'Wardrobes', 'Study Tables', 'Side Tables', 'TV Units', 'Kitchen', 'Sofa', 'Other Furniture'].map(category => `<option ${product?.category === category ? 'selected' : ''}>${category}</option>`).join('')}</select></label><label>Budget in INR<input name="budget" required type="number" min="1000" placeholder="e.g. 50000" value="${product?.price || ''}"></label><label>Custom dimensions / notes<textarea name="notes" required placeholder="Tell us about size, finish, colour and delivery needs">${product ? `Interested in ${product.title}. ` : ''}</textarea></label><label>Phone number<input name="phone" required type="tel" pattern="[0-9+ ()-]{10,}" value="${currentUser?.phone || ''}" placeholder="+91 99184 05258"></label><button class="panel-submit" type="submit">Submit enquiry →</button></form>`);
  document.getElementById('enquiryForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    enquiries = [{ id: Date.now(), category: form.get('category'), budget: Number(form.get('budget')), notes: form.get('notes'), phone: form.get('phone'), status: 'Active', created: new Date().toLocaleDateString('en-IN') }, ...enquiries];
    persistUserData();
    closePanel();
    showToast('Enquiry submitted successfully');
  });
}

function openEnquiries() {
  openPanel(`<p class="kicker green">Your furniture journey</p><h2 class="panel-title" id="panelTitle">My Enquiry</h2><p class="panel-subtitle">Track custom requests and start a new conversation with our team.</p><button class="panel-action" id="newEnquiryButton">＋ Submit a new requirement</button><p class="panel-section-label">Active & past enquiries · ${enquiries.length}</p><div class="enquiry-list">${enquiries.length ? enquiries.map(item => `<div class="enquiry-item"><div><h3>${item.category} · ₹${item.budget.toLocaleString('en-IN')}</h3><p>${item.notes}<br>${item.phone} · ${item.status} · ${item.created}</p></div></div>`).join('') : '<div class="panel-empty">No enquiries yet. Tell us what you would like to build.</div>'}</div>`);
  document.getElementById('newEnquiryButton').addEventListener('click', () => openEnquiryForm());
}

document.querySelectorAll('.bottom-nav a').forEach(link => link.addEventListener('click', event => {
  const tab = link.dataset.tab;
  document.querySelectorAll('.bottom-nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
  if (tab === 'profile') { event.preventDefault(); openProfile(); }
  if (tab === 'enquiry') { event.preventDefault(); openEnquiries(); }
}));

document.getElementById('panelClose').addEventListener('click', closePanel);
panelBackdrop.addEventListener('click', event => { if (event.target === panelBackdrop) closePanel(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closePanel(); });
document.getElementById('filterToggle').addEventListener('click', () => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' }));
document.getElementById('whatsappContact').addEventListener('click', event => { event.preventDefault(); window.open(whatsappUrl(), '_blank', 'noopener'); });
