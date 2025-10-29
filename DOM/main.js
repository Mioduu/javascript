// Wyszukiwanie po ID | Mozna uzyc tez document.getElementById()
const test = document.querySelector("#header")
console.log(test)
console.log(test.innerHTML)
console.log(test.textContent)

// Wyszukiwanie po klasie
const classTest = document.querySelector(".headerClass")
console.log(classTest)
console.log(classTest.innerHTML)

// Wyszukiwanie po tagu
const tagTest = document.querySelector("h1")
const tagTestAll = document.querySelectorAll("h1")
console.log(tagTest)
console.log(tagTestAll)
console.log(tagTestAll[0].innerHTML)
console.log(tagTestAll[1].innerHTML)

// Pobieranie elementu z atrybutem
const attrib = document.querySelector("[data]")
console.log(attrib.getAttribute("data"))