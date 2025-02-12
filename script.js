document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("messageText").innerText = "YEAYYY ASIKNYA, OKEYY JUMAT YAA BOCILKU CAYAANGKU CANTIKKUUU!!😘😘🌹🌹❤️💕";
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let button = document.getElementById("noBtn");
    let container = document.querySelector(".container");

    let maxX = container.clientWidth - button.clientWidth;
    let maxY = container.clientHeight - button.clientHeight;

    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("messageText").innerText = "sumpah juahat niat banget kamu hah? bisa bisanya berusaha pencet ini! 😡";
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    const heartContainer = document.querySelector(".heart-container");
    heart.style.left = Math.random() * 100 + "vw"; // Posisi acak secara horizontal
    heart.style.top = Math.random() * 100 + "vh"; // Posisi acak secara vertikal
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Durasi animasi antara 3-5 detik

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Menghapus hati setelah animasi selesai
    }, 5000);
}

setInterval(createHeart, 500); // Munculkan hati setiap 0.5 detik
