const widget = document.getElementById("volt-widget");
const launcher = document.getElementById("volt-launcher");
const card = document.querySelector(".volt-card");
const closeBtn = document.querySelector(".volt-close");

const STORAGE_KEY = "volt-widget-closed";
const EXPIRE_HOURS = 24;

/* ---------------------------------
   Controle localStorage
---------------------------------- */

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

/* ---------------------------------
   Widget openen
---------------------------------- */

function openWidget(){

    launcher.classList.add("active");

    card.style.display="block";

    requestAnimationFrame(()=>{

        card.classList.add("open");

    });

}



/* ---------------------------------
   Widget sluiten
---------------------------------- */

function closeWidget(save = false){

    card.classList.remove("open");

    card.classList.add("closing");

    setTimeout(() => {

        card.style.display = "none";

launcher.classList.remove("active");

requestAnimationFrame(()=>{

    launcher.classList.remove("active");

});

        card.classList.remove("closing");

        if(save){

            localStorage.setItem(
                STORAGE_KEY,
                Date.now()
            );

        }

    },350);

}

/* ---------------------------------
   Launcher
---------------------------------- */

launcher.addEventListener("click",openWidget);

/* ---------------------------------
   Sluitknop
---------------------------------- */

closeBtn.addEventListener("click",()=>{

    closeWidget(true);

});

/* ---------------------------------
   ESC sluiten
---------------------------------- */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        if(card.style.display==="block"){

            closeWidget(false);

        }

    }

});

/* ---------------------------------
   Klik buiten widget
---------------------------------- */

document.addEventListener("click",(e)=>{

    if(card.style.display!=="block") return;

    if(card.contains(e.target)) return;

    if(launcher.contains(e.target)) return;

    closeWidget(false);

});