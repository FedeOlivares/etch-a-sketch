const view = document.querySelector(".view"); 
const inp = document.getElementById("myRange");
let side = inp.value;
let totalDivs = side * side; 


const slider = document.querySelector(".slider");

function createDivs() {
    side = inp.value;
    totalDivs = side * side; 
    view.innerHTML = "";
    for (let i = 1; i<=totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("functionDiv");
        div.innerText = "";
        view.appendChild(div);
    }
}

function updateSliderValue() {
    view.style.setProperty('--slider-value', slider.value);
    createDivs();
}

slider.addEventListener("input", updateSliderValue);


window.onload = () => { 
    view.style.setProperty('--slider-value', slider.value);
    createDivs();};


