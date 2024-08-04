let currentImageIndex = 0;
const images = [
    "/Store/Pictures/Screenshots/SF6/SFSS1.jpg",
    "/Store/Pictures/Screenshots/SF6/SFSS2.jpg",
    "/Store/Pictures/Screenshots/SF6/SFSS3.jpg",
    "/Store/Pictures/Screenshots/SF6/SFSS4.jpg",
    "/Store/Pictures/Screenshots/SF6/SFSS5.jpg",
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

