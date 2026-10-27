
let images = [];
let currentIndex = 0;

function filterImages(category, button) {
    let allImages = document.querySelectorAll(".gallery img");

    allImages.forEach(function(img) {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });

    document.querySelectorAll(".filters button").forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

function openImage(img) {
    images = Array.from(document.querySelectorAll(".gallery img"))
        .filter(function(item) {
            return item.style.display !== "none";
        });

    currentIndex = images.indexOf(img);
    showImage();

    document.getElementById("viewer").classList.add("show");
}

function showImage() {
    document.getElementById("largeImage").src = images[currentIndex].src;

    document.getElementById("imageCount").textContent =
        (currentIndex + 1) + " / " + images.length;
}

function changeImage(direction) {
    currentIndex =
        (currentIndex + direction + images.length) % images.length;

    showImage();
}

function closeImage() {
    document.getElementById("viewer").classList.remove("show");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeImage();

    if (event.key === "ArrowRight") changeImage(1);

    if (event.key === "ArrowLeft") changeImage(-1);
});
