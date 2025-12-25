// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = prompt('Search for products:');
        if (searchTerm && searchTerm.trim() !== '') {
            console.log('Searching for:', searchTerm);
            alert(`Searching for: "${searchTerm}"\n\nThis would show search results.`);
        }
    });
}

// ==========================================
// CART FUNCTIONALITY
// ==========================================
let cartItems = 0;
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.querySelector('.cart-btn');

function updateCart(count) {
    cartItems = count;
    if (cartCount) {
        cartCount.textContent = cartItems;

        // Animate cart count
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Add to cart when clicking product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't add to cart if clicking quick view
        if (!e.target.classList.contains('quick-view-btn')) {
            const productName = card.querySelector('h3').textContent;
            updateCart(cartItems + 1);
            showNotification(`"${productName}" added to cart!`);
        }
    });
});

// ==========================================
// QUICK VIEW FUNCTIONALITY
// ==========================================
const quickViewBtns = document.querySelectorAll('.quick-view-btn');

quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;

        alert(`Quick View\n\n${productName}\n${productPrice}\n\nThis would open a modal with detailed product information.`);
    });
});

// ==========================================
// NEWSLETTER FORM
// ==========================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email) {
            showNotification(`Thank you for subscribing!\n\nWe'll send updates to: ${email}`);
            emailInput.value = '';
        }
    });
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #1a1a1a;
        color: white;
        padding: 20px 30px;
        border-radius: 4px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        max-width: 350px;
        animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only prevent default for actual anchor links, not just "#"
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ==========================================
// LAZY LOAD IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // If image has data-src, load it
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// FADE IN ANIMATION ON SCROLL
// ==========================================
const fadeElements = document.querySelectorAll('.product-card, .category-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ==========================================
// HERO SLIDER (Simple version)
// ==========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-play slider every 5 seconds
if (slides.length > 1) {
    setInterval(nextSlide, 5000);
}

// ==========================================
// MOBILE RESPONSIVENESS
// ==========================================
function handleResize() {
    const width = window.innerWidth;

    if (width <= 768) {
        // Mobile adjustments
        console.log('Mobile view');
    } else if (width <= 992) {
        // Tablet adjustments
        console.log('Tablet view');
    } else {
        // Desktop
        console.log('Desktop view');
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Run on load

// ==========================================
// COUNTER ANIMATION FOR STATS
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            // Format decimal numbers
            if (target % 1 !== 0) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }
    }, 16);
}

// Observe stats section and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });

            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==========================================
// CONSOLE LOG
// ==========================================
console.log('SmartRent website loaded successfully!');
console.log('Stats counter animation ready');