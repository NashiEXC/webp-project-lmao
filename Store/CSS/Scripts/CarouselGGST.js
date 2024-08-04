let currentImageIndex = 0;
const images = [
    "/Store/Pictures/Screenshots/GGST/GGSS1.jpg",
    "/Store/Pictures/Screenshots/GGST/GGSS2.jpg",
    "/Store/Pictures/Screenshots/GGST/GGSS3.jpg",
    "/Store/Pictures/Screenshots/GGST/GGSS4.jpg",
    "/Store/Pictures/Screenshots/GGST/GGSS5.jpg",
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

