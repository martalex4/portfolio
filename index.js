const buttons = document.querySelectorAll("main button");

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function setButtonContent() {
    buttons.forEach(e => e.style.content = e.id);
}

setButtonContent();