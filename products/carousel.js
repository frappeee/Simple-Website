let slideIndex = 1; // Set the initial slide index to 1
let timer; // Variable to hold the timer ID

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) {
        slideIndex = 1; // Reset to the first slide if reached the end
    }
    if (n < 1) {
        slideIndex = slides.length; // Go to the last slide if reached the beginning
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

function moveSlide(n) {
    clearTimeout(timer); // Clear the timer when manually navigating
    showSlides(slideIndex += n); // Move to the next or previous slide
}

function automaticSlide() {
    moveSlide(1); // Move to the next slide
    timer = setTimeout(automaticSlide, 30000); // Change slide every 2 seconds
}

// Call the function when the page loads
window.onload = function() {
    showSlides(slideIndex); // Show the first slide when the page initially loads
    automaticSlide(); // Start the automatic slideshow
};
