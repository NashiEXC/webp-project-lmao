let currentImageIndex = 0;
const images = [
    "/Store/Pictures/Screenshots/ER/ERSS1.jpg",
    "/Store/Pictures/Screenshots/ER/ERSS2.jpg",
    "/Store/Pictures/Screenshots/ER/ERSS3.jpg",
    "/Store/Pictures/Screenshots/ER/ERSS4.jpg",
    "/Store/Pictures/Screenshots/ER/ERSS5.jpg",
];
const carousel = document.getElementById('Carousel');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carousel.src = images[currentImageIndex];
}

function changeImage(index) {
    currentImageIndex = index;
    carousel.src = images[currentImageIndex];
}

setInterval(showNextImage, 5000); // Change image every 5 seconds

