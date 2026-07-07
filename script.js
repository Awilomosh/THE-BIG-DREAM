// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    const icon = mobileBtn.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'cursor-dot';
document.body.appendChild(cursor);

if (window.innerWidth > 768) {
    cursor.style.display = 'block';
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// Form Handler (example)
function submitForm() {
    alert("Thank you! We'll get back to you soon.");
}

// Scroll animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.service-card, .portfolio-item').forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});