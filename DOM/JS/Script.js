/* movendo-se pelo dom */
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

/* selecionando por tags */
const listIntens = document.getElementsByTagName("li")
console.log(listIntens)

/* selecionando por ids */
const title = document.getElementById("title")
console.log(title)

/* slecionando elements por classe */
const produtos = document.querySelectorAll(".produto")
console.log(produtos)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

/* insert before */
const p = document.createElement("p")
const header = title.parentElement
header.insertBefore(p, title)

/* appendChild */
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)

/* replaceChild */
const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo"
header.replaceChild(h2, title)


/* createTextNode */
const myText = document.createTextNode("Agora vamos adiconar um novo titulo")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)

console.log(h3)
mainContainer.appendChild(h3)

/* trabalhando com atributos */
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https:www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

/*altura e largura  */
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

/* posição do elemento */
const produto1 = produtos[0]
console.log(produto1.getBoundingClientRect())

/* CSS com JS */
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

/* alterando o estilo d vários elementos */
for(const li of listIntens){
    li.backgroundColor = "blue"
}