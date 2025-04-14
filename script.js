// script.js

// For basic interactivity, e.g., navigation toggling for smaller screens (responsive behavior)

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    // Toggle the navigation menu on small screens
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
