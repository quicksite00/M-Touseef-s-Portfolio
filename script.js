// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Popup Functionality
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
const popupCloseButtons = document.querySelectorAll('.popup-close');
const projectPopups = document.querySelectorAll('.project-popup');
const galleryThumbs = document.querySelectorAll('.gallery-thumb');

// Open popup when view details button is clicked
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const popup = document.getElementById(`project-popup-${projectId}`);
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close popup when close button is clicked
popupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.project-popup');
        popup.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});

// Close popup when clicking outside the content
projectPopups.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
});

// Gallery thumbnail functionality
galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const imgSrc = thumb.getAttribute('data-img');
        const popup = thumb.closest('.project-popup');
        const mainImg = popup.querySelector('.gallery-main img');

        // Update main image
        mainImg.src = imgSrc;

        // Update active state
        const allThumbs = popup.querySelectorAll('.gallery-thumb');
        allThumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

/////////////////////////////////////////////////////////////////////
// Additional JavaScript for Contact Section Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to contact items
    const contactItems = document.querySelectorAll('.contact-item-horizontal');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a temporary active state
            this.style.transform = 'translateY(-3px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Map placeholder interaction
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            // You can add functionality to open a real map here
            alert('This would open a Google Maps integration in a real implementation.');
        });
    }
    
    // Smooth scroll for credits links
    document.querySelectorAll('.credits-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            // External links will open normally
        });
    });
});