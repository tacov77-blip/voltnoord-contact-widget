const widget = document.getElementById("volt-widget");
const closeBtn = document.querySelector(".volt-close");
const launcher = document.getElementById("volt-launcher");
const card = document.querySelector(".volt-card");
const STORAGE_KEY = "volt-widget-closed";
const EXPIRE_HOURS = 24;

// Controleren of widget eerder is gesloten
const closedAt = localStorage.getItem(STORAGE_KEY);

if (closedAt) {
    const hoursPassed =
        (Date.now() - Number(closedAt)) / (1000 * 60 * 60);

    if (hoursPassed < EXPIRE_HOURS) {
        widget.style.display = "none";
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }
}

// Sluiten
closeBtn.addEventListener("click", () => {
card.classList.remove("open");
    card.classList.add("closing");

    setTimeout(() => {

        card.style.display = "none";
        card.style.opacity = "";
card.style.transform = "";
        launcher.style.display = "block";

        card.classList.remove("closing");

    }, 350);

});
launcher.addEventListener("click", () => {

    launcher.style.display = "none";

    card.style.display = "block";

    requestAnimationFrame(() => {

        card.classList.add("open");

    });

});