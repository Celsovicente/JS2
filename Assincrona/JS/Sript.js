/* setTimeout */
console.log("Ainda não executou")

setTimeout( function(){
    console.log("Requesição assincrona")
}, 2000)
console.log("Ainda não executou 2")

/* setInterval */
console.log("Ainda não executou")

/* 
    setInteval(function(){
        console.log("Intervao assíncrono")
    }, 3000)
 */
console.log("Ainda não comeou a executar 2")


/* promesi */
const promessa = Promise.resolve(2+3)
console.log("Alguma coisa")

promessa.then((value) => {
    console.log(`A soma é ${value}`)
    return value
}).then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))
console.log("Outro código")

/* erro na promesi */
Promise.resolve(4* "Ola").then((n) => {
    if( Number.isNaN(n)){
        throw new Error("Valores inválidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))


/* rejeição */
function checkNumber(n){
    return new Promise((resolve, rejet) => {
        if(n > 10){
            resolve(`O número é mior que 10`)
        }else{
            rejet("O Número é bixo")
        }
    })
}

const a = checkNumber(10)
const b = checkNumber(8)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => {
    console.log(`Um erro ocorreu ${ err}`)
})

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => {
    console.log(`Um erro ocorreu ${ err}`)
})

/* resolvendo várias promesis */
const p = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    },3000)
})
const p2 = Promise.resolve(20 + 10)
const p3 = new Promise((resolve, recjet) => {
    if(30 > 10){
        resolve(30)
    }else{
        recjet("Erro")
    }
})

Promise.all([p,p2,p3]).then((values) => console.log(values))

/* async function */
async function somarComDelay(a, b){
    return a + b
}

somarComDelay(3,4).then((value) => {
    console.log(`A soma é ${value}`)
})

console.log("Teste async")

/* async await */
function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve("Resolveu a promesi")
        }, 3000)
    })
}

function chamadaAsync(){
    console.log("Chamando a promesi e esperando o resultado")
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

/* generators */
function* generator() {
    yield 1
    yield 3
    yield 3
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value=)