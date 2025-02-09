// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("February 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Kai is back! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        ${days}d ${hours}h ${minutes}m ${seconds}s;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Toggle NINI Content
document.getElementById("niniBtn").addEventListener("click", function() {
    document.getElementById("niniContent").classList.toggle("hidden");
});

// Store and Display Messages for Kai
document.getElementById("sendMessage").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messagesList = document.getElementById("messagesList");
        const messageElement = document.createElement("p");
        messageElement.textContent = messageText;
        messagesList.appendChild(messageElement);
        messageInput.value = "";
    }
});

// Vue.js Image Carousel
new Vue({
    el: '#app',
    data: {
        images: [
            "assets/kai1.jpg",
            "assets/kai2.jpg",
            "assets/kai3.jpg"
        ]
    },
    components: {
        'carousel-3d': window['carousel-3d'].Carousel3d,
        'slide': window['carousel-3d'].Slide
    }
});