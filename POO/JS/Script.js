/* metodos */
const animal = {
    nome: "Precioso",
    latir: function(){
        console.log("Auau")
    }
}
console.log(animal.nome)
animal.latir()

/* aprofundando em metodos */
const pessoa = {
    nome: "Celso",
    getNome: function(){
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
}
console.log(pessoa.nome)
console.log(pessoa.getNome())
pessoa.setNome("Osvaldo")
console.log(pessoa.getNome())

/* prototype */
const texto = "Ola"
console.log(Object.getPrototypeOf(texto))
const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(arr.length)
console.log(Object.getPrototypeOf(arr))

/* mais sobre prototype */
const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.getPrototype)
const mySecondObject = Object.create(myObject)

console.log(mySecondObject)
console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === Object)

/* classes básica */
const cao = {
    raca: null,
    patas: 4,
}

const hiskysiberiano = Object.create(cao)
hiskysiberiano.raca = "Hiskysiberiano"
console.log(hiskysiberiano.patas)

const pastorBelga = Object.create(cao)
pastorBelga.raca = "Pastor Belga"
console.log(pastorBelga)

/* função como classe função contrutora */
function criarCao(nome, raca) {
    const cao = Object.create({})

    cao.nome = nome
    cao.raca = raca
    return cao
}

const william = criarCao("William", "Rafeiro")
console.log(william)

const jack = criarCao("Jack", "Pastor Alemão")
console.log(jack)
console.log(Object.getPrototypeOf(jack))

/* funçóes como classes */
function Cao(nome, raca){
    this.nome = nome
    this.raca = raca
}

const pitt = new Cao("Pitt", "Pitbull")
console.log(pitt)

/* metodos na funcao construtora */
Cao.prototype.uivar = function(){
    console.log("Auaua")
}
console.log(Cao.prototype)
pitt.uivar()

/* classes em JS */
class   CaoClasse{
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const beck = new CaoClasse("Beck", "Rotwailer")
console.log(beck)
console.log(Object.getPrototypeOf(beck))

/* mais sobre classes */
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} é da cor ${this.cor}`)
    }
}


const scania = new Caminhao(7, "Verde")
console.log(scania)
scania.descreverCaminhao()
Caminhao.motor = 4
const c2 = new Caminhao(3, "Azul")
console.log(c2)
console.log(c2.motor)

Caminhao.prototype.motor = 2.0

const c3 = new Caminhao(4, "Preta")
console.log(c3.motor)

/* override */
class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const celso = new Humano("Celso", 18)

console.log(celso)
console.log(Humano.prototype.idade)

Humano.prototype.idade = "Idade não definida"

console.log(celso.idade)
console.log(Humano.prototype.idade)

/* symbol */
class Aviao{
    constructor(marca, turbina){
        this.turbina = turbina
        this.marca = marca
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 5

const boing = new Aviao("Boing", "18")
console.log(boing)
console.log(boing[asas])
console.log(boing[pilotos])

class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Primeiro post", "É um post sobre programação")
console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programação Orientada a objectos"
console.log(myPost)

/* herança */
class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
            this.nome = nome
        
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)
console.log(shark.patas)

/* instanceof */
console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4, "Teste") instanceof Mamifero)
console.log(new Post("a", "b") instanceof Lobo)
