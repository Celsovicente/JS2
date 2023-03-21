/* seleção de elementos */
const formMultiplication = document.querySelector("#form-multiplication")
const numberForm = document.querySelector("#number")
const multiplicationInput = document.querySelector("multiplicator")
const multiplicationTable = document.querySelector("#multipication-operation")
const multiplicationTitle = document.querySelector("#multipication-title")

/* funções */

const createTable = (number,multiplicationNumber) =>{
    multiplicationTable.innerHTML = "";

    for(let i = 1; i <= multiplicationNumber; i++){
        const result = number*i
   
        const template = `
        <div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row) 
    }
    
}

/* eventos */
formMultiplication.addEventListener("submit", (e)=> {
    e.preventDefault()
    const multiplicationNumber = +numberForm.value

    const multiplicatorNumber = +numberForm.value
    if(!multiplicationNumber || !multiplicatorNumber)return

    console.log(multiplicationNumber, multiplicatorNumber)
})