// Wait for the entire page to load before hiding the preloader
window.onload = function() {
    const preloader = document.querySelector('.preloader');
    // Add the 'preloader-hidden' class to fade it out
    preloader.classList.add('preloader-hidden');
};

// Initialize the Animate On Scroll (AOS) library
AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: false,   // *** This is the change *** - Animation now happens every time
    offset: 100,   // Offset (in px) from the original trigger point
});
