let currentImageIndex = 0;
const images = [
    "../Pictures/Screenshots/Rust/RSS1.png",
    "../Pictures/Screenshots/Rust/RSS2.png",
    "../Pictures/Screenshots/Rust/RSS3.png",
    "../Pictures/Screenshots/Rust/RSS4.png",
    "../Pictures/Screenshots/Rust/RSS5.png",
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

