let currentImageIndex = 0;
const images = [
    "/Store/Pictures/Screenshots/TP2/TPSS1.jpg",
    "/Store/Pictures/Screenshots/TP2/TPSS2.jpg",
    "/Store/Pictures/Screenshots/TP2/TPSS3.jpg",
    "/Store/Pictures/Screenshots/TP2/TPSS4.jpg",
    "/Store/Pictures/Screenshots/TP2/TPSS5.jpg",
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

