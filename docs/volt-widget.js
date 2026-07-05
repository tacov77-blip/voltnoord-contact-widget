(function () {

    "use strict";

    // Niet twee keer installeren
    if (document.getElementById("volt-widget")) return;

    // CSS laden
    const css = document.createElement("link");

    css.rel = "stylesheet";

    css.href =
        "https://tacov77-blip.github.io/voltnoord-contact-widget/widget.css";

    document.head.appendChild(css);

    // HTML injecteren

    document.body.insertAdjacentHTML(
        "beforeend",

`
<div id="volt-widget">

    <button id="volt-launcher" aria-label="Open widget">

        ⚡

    </button>

    <div class="volt-card">

        <button class="volt-close">

            ✕

        </button>

        <div class="volt-header">

            <div class="volt-brand">

                <img
                    src="https://tacov77-blip.github.io/voltnoord-contact-widget/assets/header-icon.png"
                    class="brand-icon"
                    alt="Volt Noord">

                <div class="brand-text">

                    <h3>Volt Noord</h3>

                    <span>Elektrotechniek</span>

                </div>

            </div>

            <h2>Heeft u een storing?</h2>

            <p>

                Wij helpen u direct verder.

                Bel ons of stuur een WhatsApp.

            </p>

            <div class="volt-status">

                <span class="status-dot"></span>

                Bereikbaar 17:00–22:00

            </div>

        </div>

        <div class="volt-actions">

            <a
                href="tel:0644513156"
                class="btn btn-primary">

                📞

                <span>Bel direct</span>

            </a>

            <a
                href="https://wa.me/31644513156"
                target="_blank"
                class="btn btn-secondary">

                💬

                <span>WhatsApp</span>

            </a>

        </div>

        <div class="volt-footer">

            Gemiddelde reactietijd ±15 minuten

        </div>

    </div>

</div>

`
    );

})();