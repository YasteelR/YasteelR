// Typing animation functionality
const texts = [" an Electrical Engineer", " a Software Engineer", "an Automation and Control Engineer", " a Team Leader", " an Aspiring Monke ;)"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeWriter() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    typingText.textContent = currentText.substring(0, charIndex) + "|";
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.animationPlayState = 'paused';
    observer.observe(section);
});

// Mobile navigation functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const mobileNavClose = document.getElementById('mobile-nav-close');

function openMobileNav() {
    mobileNav.classList.add('active');
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Add event listeners if elements exist
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileNav);
}

if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
}

if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMobileNav);
}

// Close mobile nav when clicking on a navigation link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileNav();
        // If it's an anchor link, handle smooth scrolling
        if (link.getAttribute('href').startsWith('#')) {
            setTimeout(() => {
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    });
});

// Initialize typing animation when window loads
window.onload = typeWriter;