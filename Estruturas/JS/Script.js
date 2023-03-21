/* variaveis */
let nome = "Celso"
console.log(nome)

nome = "Celso Vicente"
console.log(nome)

const age = 18
console.log(age)

console.log(typeof nome)
console.log(typeof age)

/* mais sobre variaveis*/
let a = 12, b = 1, c = 4
console.log(a,b,c)
const nomeCompleto = "Celso Vicente"
const nomecompleto = "Osvaldo Bernardo"
console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = "Olá"
let $d = "Boa noite"
console.log(_teste, $d)

/* prompt */
const idade = prompt("Digite a sua idade")
console.log(`Você tem ${idade} anos`)

/* alert */
alert("Bem vindo")
const x = 19
alert(`O número é ${x}`)

/* math */
console.log(Math.max(3,4,5,6,7,8,0))
console.log(Math.floor(2.13))
console.log(Math.ceil(1.2))

/* console */
console.log("Teste")
console.warn("Aviso")
console.error("Erro")

/* if */
const v = 10
if(v > 5){
    console.log("v é maior")
}

const user = "Celso"
if(user === "Celso"){
    console.log("Bem vindo Celso")
}

if(user === "Maria"){
    console.log("Olá Celso")
}
console.log(user === "Celso", user === "Maria")

/* else */
const logar = false
if(logar){
    console.log("Está autenticado")
}else{
    console.log("Ñ está autenticado")
}

const q = 18
const y = 8
if(q > 5 && y > 20){
    console.log("Números mais altos")
}else{
    console.log("Os Números ñ são mais altos")
}

/* else if */
if(1 > 3){
    console.log("Teste")
}else if(2 > 3){
    console.log("Teste 2")
}else if(5 > 1){
    console.log("Agora sim")
}

const userName = "Celso Vicente"
const userAge = 18
if(userName === "José"){
    console.log("Bem vindo José")
}else if(userName === "Celso Vicente" && userAge === 18){
    console.log("Olá Celso, você tem 18 anos")
}else{
    console.log("Nenhuma codificação aceite")
}

/* while */
let l = 0
while(l < 6){
    console.log(`Repetindo ${l}`)
    l++
}
/* 
let z = 10
while(z > 5){
    console.log(`Imprmindo ${z}`)
} */

/* do while */
let p = 10
do{
    console.log(`Valor de p: ${p}`)
    p--
}while(p > 1)


/* for */
let k = 10
for(k; k > 0; k--){
    console.log(`O valor de k está diminuindo: ${k}`)
}

/* identação */
for(let i = 0; i < 10; i++){
    if(i*2 > 10){
        console.log(`Maior que 10! ${i}`)
    }else{
        if(i / 2 === 0){
            console.log("O número é par")
        }
    }
}

/* brak */
for(let i = 20; i > 10; i--){
    console.log(`O valor de i: ${i}`)
    if(i === 12){
        console.log("O valor de i é 12")
        break;
    }
}

/* continue */
for(let i = 1; i < 9; i++){
    if(i % 2 == 0){
        console.log("O número é par")
        continue
    }

    console.log(i)
}

/* switch */
const par = 100
switch(par){
    case 1:
        console.log("O valor de par é  300")
        break;
        case 2:
            console.log("O valor de par é  300")
            break;
            case 3:
            console.log("O valor de par é  300")
            break;
            default:
                console.log("valor não encontrado")
}