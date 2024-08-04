let currentImageIndex = 0;
const images = [
    "/Store/Pictures/SSS1.png",
    "/Store/Pictures/SSS2.png",
    "/Store/Pictures/SSS3.png",
    "/Store/Pictures/SSS4.png",
    "/Store/Pictures/SSS5.png",
    "/Store/Pictures/RSS1.png",
    "/Store/Pictures/RSS2.png",
    "/Store/Pictures/RSS3.png",
    "/Store/Pictures/RSS4.png",
    "/Store/Pictures/RSS5.png",
    "/Store/Pictures/DSS1.png",
    "/Store/Pictures/DSS2.png",
    "/Store/Pictures/DSS3.png",
    "/Store/Pictures/DSS4.png",
    "/Store/Pictures/DSS5.png",
    "/Store/Pictures/DRGSS1.png",
    "/Store/Pictures/DRGSS2.png",
    "/Store/Pictures/DRGSS3.png",
    "/Store/Pictures/DRGSS4.png",
    "/Store/Pictures/DRGSS5.png"
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

