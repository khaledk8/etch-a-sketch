





let divN = document.getElementById("numberb").value
const containDiv = document.querySelector(".container")
let j;
let numberB = document.querySelector("#numberb")
addDiv(16);


function updateTextInput(val) {
    document.getElementById('nblocks').textContent = val; 
  }

/* numberB.addEventListener('input', addDiv()) */

numberB.addEventListener("input", (event) => {
    removeDiv(j)
    console.log(event.target.value) 
    addDiv(event.target.value)
  });



function addDiv (value) {
    divN = value
    j = 0;
    for (let i = 0; i < divN*divN; i++) {
        const divA = document.createElement("div")
        divA.setAttribute("style", `width: ${(1/divN)*600}px; height: ${(1/divN)*600}px; border: dashed 0.5px gray;`)
        containDiv.appendChild(divA)
        j++
    }
}

function removeDiv (j) {
   for (let k = 1; k<=j; k++) {
        containDiv.removeChild(containDiv.lastChild)
        
    }
}


