let currentImageIndex = 0;
const images = [
    "/Store/Pictures/Screenshots/Sekiro/SSS1.png",
    "/Store/Pictures/Screenshots/Sekiro/SSS2.png",
    "/Store/Pictures/Screenshots/Sekiro/SSS3.png",
    "/Store/Pictures/Screenshots/Sekiro/SSS4.png",
    "/Store/Pictures/Screenshots/Sekiro/SSS5.png",
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
