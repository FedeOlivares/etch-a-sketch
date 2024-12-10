const view = document.querySelector(".view");
const inp = document.getElementById("myRange");
const colorButton = document.getElementById("randomColor");
const slider = document.querySelector(".slider");
const sliderValueBubble = document.getElementById("sliderValueBubble"); // Bubble element
const clearGid = document.getElementById("clearGrid");

let side = inp.value;
let totalDivs = side * side;
let isRandomColor = false; // Track whether random color mode is on

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
        div.addEventListener("mouseover", () => {
            // Apply random color only if not set
            if (isRandomColor && !div.hasAttribute('data-random-color')) {
                setRandomColor(div);
            } else if (!isRandomColor && div.style.backgroundColor !== "black") {
                setColor(div);
            }

            // Always increase opacity if not fully opaque
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

// Toggle random color mode on button click
colorButton.onclick = () => {
    isRandomColor = !isRandomColor; // Toggle between true and false
    colorButton.textContent = isRandomColor ? "Rainbow on" : "Rainbow off";
}

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

function setRandomColor(div) {
    // Generate a random hex color
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = `#${hex.padStart(6, '0')}`; // Ensure it's always 6 digits long
    div.style.opacity = 0.1;
    div.setAttribute('data-random-color', 'true'); // Mark this div as having a random color
}

clearGrid.onclick = () => {createDivs()};