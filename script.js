const changeButton = document.querySelector(".change");
const resetButton = document.querySelector(".reset");
const container = document.querySelector(".container");

const generateDivs = (divsNumber) => {
    let arrayOfDivs = [];
    let auxArray = [];

    for(let i = 0; i < divsNumber; i++) {       
        for(let j = 0; j < divsNumber; j++) {
            auxArray[j] = document.createElement("div");        
        }
        arrayOfDivs[i] = auxArray;        
        auxArray = [];
    }

    return arrayOfDivs
}

const setDivsUI = (divs) => {
    container.style.setProperty('grid-template-columns', `repeat(${divs.length},1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${divs.length},1fr)`);

    for(let line = 0; line < divs.length; line++) {
        for(let column = 0; column < divs.length; column++) {
            container.appendChild(divs[line][column]);
        }
    }
}

const paintDivs = (clickedDiv) => {
    clickedDiv.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

const resetDivs = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const main = (input) => {
    let userInput = input;
    let genDivs = generateDivs(userInput);

    setDivsUI(genDivs);

    const nodeList = document.querySelectorAll(".container div");

    nodeList.forEach(div => {
            div.addEventListener("mouseover", e => {
            paintDivs(e.target);
        });
    });
}

changeButton.addEventListener("click", e => {
    let input = Number(prompt("Input the number of grids(from 16 to 100):"));
    if(input >= 16 && input <= 100) {
        resetDivs();
        main(input);
    }
    else {
        alert("Please, enter a number between 16 and 100");
    }
});
main(16);
