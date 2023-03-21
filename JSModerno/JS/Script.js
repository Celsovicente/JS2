/* var, let e const */
var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}
console.log(x)

let a = 10 
let c = 15
if(c > 10){
   let a = 5
   console.log(a)
}
console.log(a)

function logName(){
    const name = "Osvaldo"
    console.log(name)
}

const name = "João"
logName()
console.log(name)

/* arrow functions */
const sum = function(a, b){
    return a + b
}

const arrowSum = (a,b) => a + b
console.log(sum(4,4))
console.log(arrowSum(3,4))

const greeting = (nome) => {
    if(nome){
        return `Olá ${nome}`
    }else{
        return "Olá"
    }
}

console.log(greeting("Marcos"))
console.log(greeting())

const user = {
    name: "Celso",
    sayUsername(){
        setTimeout(function(){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUsernameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`) 
        }, 3000)
    },
}
user.sayUsername()
user.sayUsernameArrow()

/* filter */
const arr = [1,2,3,4,5,6]

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)
const users = [
    {name: "Celso", available: false},
    {name: "Osvaldo", available: true},
    {name: "André", available: false},
    {name: "João", available: true},
    {name: "Mauro", available: false},
]

/* map */
const produtos = [
{nome: "Tshirt", preco: 2500, categoria: "Roupas"},
{nome: "Tenis", preco: 12500, categoria: "Calçados"},
{nome: "Calça", preco: 7500, categoria: "Roupas"},
{nome: "Fogão", preco: 50000, categoria: "Electrodomestico"},
]


/* templates literals */
const username = "Celso"
const age = 18
console.log(`O nome do usuário é ${username} e tem ${age} anos`)


/* destruct */
const frutas =  ["Manga", "Uva", "Banana"]

const {f1,f2,f3} = frutas

const produtosDetails = {
    name: "Mouse",
    price: 4000,
    category: "Periferico",
    color: "Preta",
}

const {name: produtoName, price, category, color} = produtosDetails

console.log(`O nome do produto é: ${produtoName}, ele custa: ${price}  e é da cor ${color}`)


/* classes */
class Produto{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    produtoComDesconto(desconto){
        return this.price*((100 - desconto)/100)    
    }
}

const tshirt = new Produto("Camisa", 6500)
console.log(tshirt)

console.log(tshirt.produtoComDesconto(30))
console.log(tshirt.produtoComDesconto(50))


/* heranca */
class PrdutoComAtributos extends Produto{
    constructor(name, price, color){
        super(name, price)
        this.color = color
    }

    showColors(){
        console.log("As cores são:")
        this.color.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new PrdutoComAtributos("Tenis", 13000, [
    "Branco", "Preto", "Cinzento"
])
console.log(hat)
console.log(hat.name)