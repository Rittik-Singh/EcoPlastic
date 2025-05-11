// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: true
});

scrollReveal.reveal('.card, .form-group, .partner-card', {
    origin: 'bottom',
    interval: 200
});

// Form Validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            form.classList.add('was-validated');
        }
    });

    form.addEventListener('input', (e) => {
        const input = e.target;
        input.classList.toggle('invalid', !input.checkValidity());
    });
});