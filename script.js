const view = document.querySelector(".view");
const inp = document.getElementById("myRange");
const color = document.getElementById("randomColor");
const slider = document.querySelector(".slider");
const sliderValueBubble = document.getElementById("sliderValueBubble"); // Bubble element

let randomColor = color.value;
let side = inp.value;
let totalDivs = side * side;

function createDivs() {
    side = inp.value;
    totalDivs = side * side; 
    view.innerHTML = "";
    for (let i = 1; i <= totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("functionDiv")
        div.style.backgroundColor = "whitesmoke";
        div.innerText = "";
        view.appendChild(div);
    }
    const functionalDivs = document.querySelectorAll(".functionDiv");
    functionalDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            if (randomColor == true) { // if button value true, sets random color instead of black
                setRandomColor(div);
            } else if (div.style.backgroundColor == "whitesmoke") {
                setColor(div);
            }
            if (div.style.opacity < 1) {
                increaseOpacity(div);
            }
        });
    });
}

function updateSliderValue() {
    view.style.setProperty('--slider-value', slider.value);
    createDivs();
    updateBubble(); // Update bubble as well
}

function updateBubble() {
    const value = slider.value;
    sliderValueBubble.innerText = value;
    
    // Calculate the position of the bubble relative to the slider's thumb
    const percent = (value - slider.min) / (slider.max - slider.min);
    sliderValueBubble.style.left = `calc(${percent * 100}% - 20px)`;
}

// Add event listeners
slider.addEventListener("input", () => {
    updateSliderValue();
    updateBubble();
});

// Set initial states when the page loads
window.onload = () => { 
    view.style.setProperty('--slider-value', slider.value);
    createDivs();
    updateBubble();
}

function setColor(div) {
    div.style.backgroundColor = "black";
    div.style.opacity = 0.1;
}

function increaseOpacity(div) {
    let currentOpacity = window.getComputedStyle(div).getPropertyValue('opacity');
    let newOpacity = parseFloat(currentOpacity) + 0.1;
    div.style.opacity = newOpacity;
}


function setColor(div) {
    div.style.backgroundColor = "black";
    div.style.opacity = 0.1;
}

function setRandomColor(div) {
        const hex = Math.floor(Math.random() * 16777215).toString(16); // Random hex (0-16777215)
        div.style.backgroundColor = `#${hex.padStart(6, '0')}`; // Ensure the result is always 6 digits
}
