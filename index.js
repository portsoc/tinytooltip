let tip;

function reposition(e) {
    tip.textContent = e.target.dataset.tip
    tip.style.setProperty("visibility", "inherit");
    document.documentElement.style.setProperty('--left', e.clientX+"px" );
    document.documentElement.style.setProperty('--top', e.clientY+"px" );
}
  
function hide(e) {
    tip.style.setProperty("visibility", "hidden");
}

function prep() {
    let things = document.querySelectorAll("[data-tip]");

    for (const thing of things) {
        thing.addEventListener("mousemove", reposition);
        thing.addEventListener("mouseout", hide);
    }

    tip = document.createElement("p")
    tip.id="tinytooltip";
    document.body.appendChild(tip);
    hide();   
}

window.addEventListener("load", prep);
