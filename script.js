





let divN = document.getElementById("numberb").value


const containDiv = document.querySelector(".container")




function addDiv () {
    for (let i = 0; i < divN*divN; i++) {
        const divA = document.createElement("div")
        divA.setAttribute("style", `width: ${(1/divN)*600}px; height: ${(1/divN)*600}px; border: dashed 0.5px gray;`)
        containDiv.appendChild(divA)
    }
}

addDiv()

console.log(divA)
console.log(divN)