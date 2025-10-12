const buttons = document.querySelectorAll("main button");

function slideIn() {
    const sliders = document.getElementsByClassName("slide-in");
    let delay = 0;
    let parent = sliders[0].parentElement;
    for (let index = 0; index < sliders.length; index++) {
        if (sliders[index].parentElement != parent) {
            parent = sliders[index].parentElement;
            delay += 0.4;
        }
        sliders[index].style.animationDelay = `${delay}s`;
        delay += 0.2;
    }
}

slideIn();

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener("click", () => activateButton(element, index));
}

function activateButton(button, index) {
    const span = button.querySelector("span");
    const section = document.getElementsByTagName("section")[index];
    section.style.display = "flex";
    // button.setAttribute("disabled", true);
}