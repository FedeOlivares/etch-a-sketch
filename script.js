const view = document.querySelector(".view"); 
const inp = document.getElementById("myRange");
const side = inp.value; 

const totalDivs = side * side; 


const slider = document.querySelector(".slider");


function updateSliderValue() {
    document.documentElement.style.setProperty('--slider-value', `${slider.value}px`);
}

slider.addEventListener("input", updateSliderValue);


 window.onload = () => {
    for (let i = 1; i<=totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("functionDiv");
        view.appendChild(div);
    }
}