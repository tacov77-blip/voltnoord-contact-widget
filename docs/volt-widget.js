(function () {
    "use strict";

    // Niet twee keer laden
    if (document.getElementById("volt-widget")) return;

    // CSS laden
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://tacov77-blip.github.io/voltnoord-contact-widget/widget.css";
    document.head.appendChild(css);

    // HTML ophalen
    fetch("https://tacov77-blip.github.io/voltnoord-contact-widget/index.html")
        .then(response => response.text())
        .then(html => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const widget = doc.getElementById("volt-widget");

if (!widget) {
    console.error("Volt Widget niet gevonden.");
    return;
}

// Afbeeldingen omzetten naar absolute GitHub URL's
widget.querySelectorAll("img").forEach(img => {

    const src = img.getAttribute("src");

    if (src && !src.startsWith("http")) {

        img.src =
            "https://tacov77-blip.github.io/voltnoord-contact-widget/" + src;

    }

});

document.body.appendChild(widget);

            // Logica laden
            const script = document.createElement("script");
            script.src = "https://tacov77-blip.github.io/voltnoord-contact-widget/widget-core.js";

            script.onload = function () {
                if (window.initVoltWidget) {
                    window.initVoltWidget();
                }
            };

            document.body.appendChild(script);

        });

})();