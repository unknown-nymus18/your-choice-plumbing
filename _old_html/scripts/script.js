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
        link.addEventListener('click', function(e) {
            const header = document.querySelector('header');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const body = document.body;
            const navContainer = document.querySelector('.nav-container');
            
            // Check if it's a phone link (should not close menu for phone calls)
            if (this.getAttribute('href').startsWith('tel:')) {
                return;
            }
            
            // Instantly remove classes without waiting for animation
            header.classList.remove('mobile-menu-open');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Force immediate style update for faster response
            if (navContainer) {
                navContainer.style.transition = 'none';
                setTimeout(() => {
                    navContainer.style.transition = '';
                }, 50);
            }
        });
    });
});

