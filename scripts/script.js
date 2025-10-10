window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 40) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const header = document.querySelector('header');
    const navContainer = document.querySelector('.nav-container');
    const contactContainer = document.querySelector('.contact-container');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    header.classList.toggle('mobile-menu-open');
    menuToggle.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Close mobile menu when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-container a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const header = document.querySelector('header');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const body = document.body;
            header.classList.remove('mobile-menu-open');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});

