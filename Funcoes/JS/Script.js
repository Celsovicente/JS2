/* criando funções */
function minhaFuncao(){
    console.log("Testando")
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoCOmParametro(txt){
    console.log(`Imprimindo: ${txt}`)
}

funcaoCOmParametro("Imprimindo alguma coisa")
funcaoCOmParametro("Outra função")

/* return */
const a = 5
const b = 10
const c = 15
const d = 20

function soma(n1, n2){
    return n1 + n2
}
const resutado = soma(a, b)
console.log(resutado)
console.log(soma(c,d))

/* escopo da função */
let y = 10
function testandoEscopo(){
    let y = 30
    console.log(`Y dentro da função é: ${y}`)
}
testandoEscopo()

y = 23
console.log(`Y fora da função é: ${y}`)
testandoEscopo()

/* escopo alinhado */
let m = 10
function escopoAlinhado(){
    let m = 20
    if(true){
        let m = 30
        if(true){
            m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoAlinhado()
console.log(m)

/* arrow function */
const testeArrow = () => {
    console.log("Está é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par")
        return
    }
}

parOuImpar(4)
parOuImpar(13)

/* mais sobre arrow function */
const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))
const raizQuadrada2 = (x) => x*x;

console.log(raizQuadrada2(17))
console.log(raizQuadrada2(13))
const helloWord = () => console.log("Olá Mundo")
helloWord()

/* parametro opcional */
const multiplication = function(m,n){
    if(n === undefined){
        return m*2
    }
    else{
        return m*n
    }
}
console.log(multiplication(4))
console.log(multiplication(3,4))

const greeting = (name) => {
    if(!name){
        console.log("Olá")
        return
    }
    console.log(`Olá ${name}`)
}

greeting()
greeting("Celso")

/* vvalor default */
const customGreeting = (name,greet = "Olá") => {
    return `${greet}, ${$name}`
}

console.log(customGreeting("Celso"))
console.log(customGreeting("Osvaldo", "Bom dia"))
const repeatText = (text, reapet = 2) => {
    for(let i = 0; i < reapet; i++){
        console.log(text)
    }
}

repeatText("Testando")
repeatText("Agora repete 7 vezes", 7)

/* closure */
function someFunction(){
    let txt = "Alguma coisa"    

    function dispaly(){
        console.log(txt)
    }

    dispaly()
}

someFunction()

/* mais sobre closure */
const multiplicationClosure = (n) => {
    return (m) =>{
        return n*m
    }
}

const c1 = multiplicationClosure(7)
const c2 = multiplicationClosure(10)
console.log(c1)
console.log(c2)
console.log(c1(2))
console.log(c2(8))

/* recursão */
const untilten = (n,m) => {
    if(n < 10){
        console.log("A função paou de executar")
    }
    else{
        const x = n - m 
        console.log(x)
        untilten(x, m)
    }
}

untilten(100, 12)

/*recursao infinita 
function run(){
    console.log("Executando")
    run()
} */

function fatorial(x){
    if(x === 0){
        return 1
    }else{
        return x*fatorial(x -1)
    }
}

const num = 7
const result = fatorial(num)
console.log(`O fatorial do núemro é ${num} é ${result}`)