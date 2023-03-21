/* arrays */
const lista = [1,2,3,4,5]
console.log(lista)
console.log(typeof lista)
const itens = ["Celso", true, 3, 6.8, []]
console.log(itens)

/* mais sobre arrays */
const arr = ["a","b", "c", "d", "e", "f"]
console.log(arr[0])
console.log(arr[2])
console.log(arr[20])

/* propriedades */
const numbers = [5,6,7]
console.log(numbers.length)
console.log(numbers["length"])
const myName = "Celso"
console.log(myName)

/* metodos */
const otherNumbers = [1,2,3]
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "Texto algum"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

/* objetos */
const person = {
    name: "Celso",
    idade: 18,
    job: "Desenvolvedor",
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

/* criando e deletando propriedades */
const car = {
    engine: 2.0,
    brand: "BMW",
    model: "Tiangular",
    km: 3000,
}
console.log(car)
delete car.km
console.log(car)

/* mais sobre objetos */
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)
const obj2 ={
    c: [],
}

Object.assign(obj2, obj)
console.log(obj2)
console.log(obj)

/* conhecendo melhor os objetos */
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))

/* mutação */
const a = {
    name: "Celso"
}

const b = a
console.log(a)
console.log(b)
console.log(a === b)
a.age = 18

console.log(a)
console.log(b)
delete b.age

console.log(a)
console.log(b)  

/* loop m array */
const users = ["Celso", "João", "Osvaldo", "António"]
for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

/* pup e push */
const array = ["a", "b", "c", "d"]
array.push("e")
console.log(array)
console.log(array.length)
array.pop()
console.log(array)

const   itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)
array.push("z", "x", "y")
console.log(array)

/* shift e unshift */
const letters = ["a", "b", "c"]
const letter = letters.shift()

console.log(letter)
console.log(letters)
letters.unshift("p","q","r")
letters.unshift("z")
console.log(letters)

/* indexOf e lastIndexOf*/
const myElements = ["Morango", "Maçã", "Abacate", "Perâ"]
console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])
console.log(myElements.lastIndexOf("Abacate"))
console.log(myElements.indexOf("Mamão"))
console.log(myElements.lastIndexOf("Mamão"))

/* suplice */
const testeSuplice = ["a", "b", "c", "d", "e"]
const subArray = testeSuplice.slice(2,3)

console.log(subArray)
console.log(testeSuplice)

const subArray2 = testeSuplice.slice(2, 3 + 2)
console.log(subArray2)

const subArray3 = subArray2.slice(10,20)
console.log(subArray3)

const subArray4 = subArray3.slice(2)
console.log(subArray4)

/* foreach */
const nums = [1,2,3,4,5,6]

nums.forEach((nums) => {
    console.log(`O número ${nums}`)
})

const post = [
    {title: "Primeiro Post", category: "CSS"},
    {title: "Segundo Post", category: "JS"},
    {title: "Terceiro Post", category: "Json"},
]

post.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)    
})

/* includes */
const brands = ["BMW", "Volvo", "Fiat"]
console.log(brands.includes("Mercedes"))
console.log(brands.includes("LandCrusier"))
console.log(brands.includes("Kia"))
    if(brands.includes("BMW")){
        console.log("Há carros da marca BMW")
    }

/* reverse */
const reverter = [1,2,3,4,5,6,7,8]
reverter.reverse()
console.log(reverter)
/* trim */

const trimTest = "   Testando   \n   "
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length())

/* padstart */
const testePadStart  = "1"
const number = testePadStart.padStart(2,"0")

console.log(testePadStart)
console.log(number)

const padEnd = number.padEnd(10, "1")

/*  split */
const frase = "O mundo vai conhecer a verdadeira dor"
const arrayFrase = frase.split(" ")
console.log(arrayFrase)

/* join */
const novaFrase = arrayFrase.join(" ")
console.log(novaFrase)

const itensComprar = ["Mouse", "Teclado", "Monitor"]
const fraseCompra = `Precisamos de comprar: ${itensComprar.join(", ")}`
console.log(fraseCompra)

/* repeat */
const palavra = "Teste"
console.log(palavra.repeat(9))

/* rest operator */
const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1,2,3))

console.log(somaInfinita(1,3,5,6,7,1))

/* for of */
const somaInfinita2 = (...args) =>{
    let total = 0
    for (num of args) {
        total += nums
    }
    return total
}
console.log(somaInfinita2(1,2,3))

console.log(somaInfinita2(1,3,5,6,7,1))

/* destructuring em objetos */
const userDetails = {
    firstName: "Celso",
    lastname: "Vicente",
    job: "Programador",
}

const {firstName, lastname, job} = userDetails

const {firstName: primeiroNome} = userDetails
console.log(firstName)

/* desxtructuring em arrays */
const myList = ["Avião", "Carro", "Trator", "Mota"]
const [veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC)


/* json */
const myjson = 
    '{"name:", "Celso", "age": 18, "skills": ["PHP", "JS", "Lua"]}'
    console.log(myjson)
    console.log(typeof myjson)

/* json para objeto */
const myObject = JSON.parse(myjson)

console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)


const badJson = '{"name:", "Celso", "age", 18}'
/* const myBadObject = JSON.parse(badJson) */

myObject.isOpenToWork = true
console.log(myObject)
const newJson = JSON.stringify(myObject)
console.log(newJson)
console.log(typeof newJson)