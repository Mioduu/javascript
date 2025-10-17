const dog = {
    name: "Ozzy",
    speed: 2000,
    showText() {
        return "Lubie spać"
    }
}


console.log(dog.name)
console.log(dog.speed)
console.log(dog.showText())


dog.type = "Labrador"
dog.legs = 4
dog.eat = function() {
    return "Mniam"
}

console.log(dog.type)

console.log(dog["legs"])
console.log(dog["type"])

const car = {
    brand: "Mercedes",
    color: "Czerwony",
    drive() {
        console.log(this)
        console.log(`${this.brand} sobie jedzie`)
    },
    showText() {
        console.log(`${this.brand} koloru ${this.color}`)
    }
}

car.drive()
car.showText()

// for(const key in car) {
//         console.log(key)
//     }


class Uczen {
    #Pesel = null
    constructor(imie, klasa) {
        this.imie = imie
        this.klasa = klasa
        this.#Pesel = 123321
    }
    getData() {
        document.writeln(`Twoje dane to: <br> Imie: ${this.imie} <br> Klasa: ${this.klasa} <br> Pesel: ${this.#Pesel}`)
    }
}

const uczen1 = new Uczen("Maciej", "4TIA")
// uczen1.#Pesel = 123456 // Error
uczen1.getData()


// function Enemy(speed, power) {
//     this.live = 3
//     this.speed = speed
//     this.power = power
//     this.print = function() {
//         console.log(`Przeciwnik ma ${this.live} życia, ${this.speed}, szybkości i ${this.power} ataku`)
//     }
// }

// const enemy1 = new Enemy(3, 10)
// enemy1.print()
// const enemy2 = new Enemy(5, 15)
// enemy2.print()

class Animal {
    constructor(name) {
        this.name = name
        this.legs = 4
        this.type = "animal"
        console.log("Tekst w konstuktorze")
    }
    show() {
        console.log(`Zwierze nazywa się ${this.name} i ma ${this.legs} nóg`)
    }
}

const pet1 = new Animal("Koń")
pet1.show()


class SimpleClass {
    #privateNumber = 102
    publicNumber = null

    constructor(nr) {
        this.publicNumber = nr
        this.#privateNumber = 102
    }

    publicMethod() {
        console.log(this.publicNumber)
    }

    #privateMethod() {
        console.log(this.#privateNumber)
    }
}

const class1 = new SimpleClass(400)

class1.publicMethod()
// class1.#privateMethod() cannot use it cause of it being private