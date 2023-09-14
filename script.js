





let divN = document.getElementById("numberb").value
const containDiv = document.querySelector(".container")
let j;
let numberB = document.querySelector("#numberb")
addDiv(16);
var colorC = "#000"
var coloringChoice = 0;
console.log(coloringChoice)


function updateTextInput(val) {
    document.getElementById('nblocks').textContent = val; 
  }


numberB.addEventListener("input", (event) => {
    removeDiv(j)
    addDiv(event.target.value)
  });


let colorPick = document.getElementById("rgbButton")
colorPick.addEventListener('input', () => {
    console.log(colorPick.value)
    colorC = colorPick.value
    coloringChoice = 0;
});

const randomButton = document.getElementById('random-rgb')
randomButton.addEventListener("click", () => {
    coloringChoice = 1;
})

const ereaserButton = document.getElementById("eraser")
ereaserButton.addEventListener("click", () => {
  coloringChoice = 2;
})
 


function addDiv (value) {
    divN = value
    j = 0;
    for (let i = 0; i < divN*divN; i++) {
        const divA = document.createElement("div")
        divA.setAttribute("style", `width: ${(1/divN)*600}px; height: ${(1/divN)*600}px; border: dashed 0.5px darkgray;`)
        divA.addEventListener('mouseover', () => {
          if (coloringChoice == 0) {
            divA.style.backgroundColor =`${colorC}`
          } else if (coloringChoice == 1) {
            divA.style.backgroundColor = `${getRandomColor()}`
          } else if (coloringChoice == 2) {
            divA.style.backgroundColor = "#fff"
          }
        })
        containDiv.appendChild(divA)
        j++
    }
}

function removeDiv (j) {
   for (let k = 1; k<=j; k++) {
        containDiv.removeChild(containDiv.lastChild)
        
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


console.log(coloringChoice)