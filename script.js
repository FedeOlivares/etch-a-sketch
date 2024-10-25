const view = document.querySelector(".view"); 
const inp = document.getElementById("myRange");
const side = inp.value;

const totalDivs = side * side; 


const slider = document.querySelector(".slider");

function createDivs(totalDivs) {
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
    createDivs(totalDivs);
}

slider.addEventListener("input", updateSliderValue);


window.onload = () => { createDivs }




/* -

add for each loop to add on hover, change color 
need to figure out logic as to how to fill the grid correctly
if the div is smaller, it doesnt fill the view vertically, 
only horizontally
- */