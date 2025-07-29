// Wait for the entire page to load
window.onload = function() {
    const preloader = document.querySelector('.preloader');
    // Add the 'preloader-hidden' class to fade it out
    preloader.classList.add('preloader-hidden');
};

// Initialize the Animate On Scroll (AOS) library
AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true,    // Whether animation should happen only once - while scrolling down
    offset: 50,    // Offset (in px) from the original trigger point
});