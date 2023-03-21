/* adicionando eventos  */
const btn = document.querySelector("#my-button")
btn.addEventListener("click", function(){
        console.log("Clicou em mim!")
})

/* removendo eventos */
const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Tenstando")
}

secondBtn.addEventListener("click", imprimirMensagem())

const thrid = document.querySelector("#other-btn")
thrid.addEventListener("", function(){
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

/* argumento do evento */
const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

/* propagação */
const containerBtn = document.querySelector("#btn-container")
const btnInsidecontainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", function(){
    console.log("Evento 1")
})

btnInsidecontainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

/* removendo evento padrão */
const a = document.querySelector("a")
a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Não alterou a página")
})

/* eventos de tecla */
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.keyup}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

/* eventos do mouse */
const mouseEventos = document.querySelector("#mouse")

mouseEventos.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})

mouseEventos.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouseEventos.addEventListener("dbcick", () => {
    console.log("Click duplo")
})

/* movimento do mouse */
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo X: ${e.y}`)
})

/* Evento de scroll */
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

/* evento de focus */
const input = document.querySelector("my-input");
input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

/* evento de carregamento */
window.addEventListener("load", (e) => {
    console.log("A página carregou!")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = "Teste"
})

/*debounce  */
const debounce = (f, delay) => {
    let timeout

    return(...argumentos) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() =>{
            f.apply(argumentos)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(()=>{
    console.log("Executando a cada 400ms")
}, 400)
)