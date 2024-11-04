const targetDate = new Date();
targetDate.setSeconds(targetDate.getSeconds() + 5);

const countdownTimer = document.getElementById("countdownTimer");
const giftHead = document.querySelector(".gift-head");
const hbdCard = document.getElementById("hbdCard");

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);

        hbdCard.classList.remove("hidden");
        hbdCard.classList.add("visible");

        giftHead.classList.add("animate-open");
    } else {
        const hours = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(
            2,
            "0"
        );
        const minutes = String(
            Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
            Math.floor((timeLeft % (1000 * 60)) / 1000)
        ).padStart(2, "0");
        countdownTimer.textContent = `${hours}hrs ${minutes}min ${seconds}sec`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
