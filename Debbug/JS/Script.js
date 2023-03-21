/* use strict */
"use strict"

/* a = "Ola" */

const a = "Olá Mundo"

/* const undefined = 10
delete [].length */

let v = 1
let b = 2
if(v == 1){
    v = b + 2
}

console.log(v)

for(let i = 0; i < b; i++){
    v += 2
    console.log(v)
}
 if(v > 5){
    v = 25
 }
console.log(v)

/* debugger */
let c = 1
let d = 2

if(c == 1){
    c = d +2
}
/* debugger */
for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("Executou o loop")
/* debugger */

if(c > 5){
    c = 25
}

/* tratamento de dados */
function checkNumber(n){
        const result = Number(n)
        if(Number.isNaN(n)){
            console.log("Valor incorreto")
            return
        }
        
        console.log("Valor correto")
        return
}

checkNumber(2)
checkNumber("9")
checkNumber({})
checkNumber("teste")

/* exceptions */
let x = 10
if(x != 11){
   throw new Error("O valor de x não pode ser diferente de 11")
}

/* trycath */
try{
    const soma = x + y
}catch(error){
    console.log("Erro no programa")
}

/* finally */
try {
    const value = checkNumber("9")
    if(!value){
        throw new Error("Valores inválidos")
    }
} catch (error) {
    console.log("Ocorreu um erro", error)
}finally{
    console.log("O código foi executado")
}

/* assertion */
function checkArray(arr){
    if(arr.lenth){
        throw new Error("O array precisa de elementos")
    }else{
        console.log(`O array tem ${arr.lenth} elementos`)
    }
}

/* checkArray */
checkArray([1,2,3])