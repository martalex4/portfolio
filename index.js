const buttons = document.querySelectorAll("main button");

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function setButtonContent() {
    buttons.forEach(e => e.style.content = e.id);
}

setButtonContent();

function slideIn() {
    const sliders = document.getElementsByClassName("slide-in");
    let delay = 0;
    let parent = sliders[0].parentElement;
    for (let index = 0; index < sliders.length; index++) {
        if (sliders[index].parentElement != parent)
        {
            parent = sliders[index].parentElement;
            delay += 0.3;
        }
        sliders[index].style.animationDelay = `${delay}s`;
        console.log(delay);
        delay += 0.1;
        console.log(`Parent element: ${parent.nodeName}`);
    }
}

slideIn();