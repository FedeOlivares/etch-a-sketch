const view = document.querySelector(".view");
const inp = document.getElementById("myRange");
const color = document.getElementById("randomColor");
let side = inp.value;
let totalDivs = side * side;

const slider = document.querySelector(".slider");
const sliderValueBubble = document.getElementById("sliderValueBubble"); // Bubble element

function createDivs() {
    side = inp.value;
    totalDivs = side * side; 
    view.innerHTML = "";
    for (let i = 1; i <= totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("functionDiv");
        div.innerText = "";
        view.appendChild(div);
    }
    const functionalDivs = document.querySelectorAll(".functionDiv");
    functionalDivs.forEach((div) => {
        div.addEventListener("mouseover", () => setColor(div));
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
}
