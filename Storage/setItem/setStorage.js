// Dodawanie i uzyskiwanie danych localStorage
localStorage.setItem("myElement", "Przykładowa wartość")
const element = localStorage.getItem("myElement")
console.log(element)

localStorage.myElement2 = "Drugi element"
const element2 = localStorage.myElement2
console.log(element2)

localStorage["myElement3"] = "Trzeci element"
const element3 = localStorage["myElement3"]
console.log(element3)

// NULL - nie dodana wartość poprzednio
const element4 = localStorage.getItem("myElement4")
console.log(element4)

localStorage.removeItem("myElement")
console.log(localStorage["myElement"])

// Usuwanie wszystkich elementów z localStorage
localStorage.clear()


// Złożone dane

const user = {
    name: "Karol",
    surname: "Nowak",
    age: 20
}

localStorage.setItem("myData", JSON.stringify(user))
const retrievedObject = JSON.parse(localStorage.getItem("myData"))
console.log(retrievedObject)