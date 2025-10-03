document.writeln("sort() - sortowanie elementów<br>")

var fruits = ["Banana", "Orange", "Apple", "Mango"]

document.writeln(`Lista przed sortowaniem<br> ${fruits}<br>`)
fruits.sort()
document.writeln(`Lista po sortowaniu<br> ${fruits}<br>`)

fruits.reverse()
document.writeln(`Lista po odwróceniu<br> ${fruits}<br>`)

const animals = ["ant", "bison", "camel", "duck", "elephant"]
document.writeln(`Animals: ${animals}<br>`)
document.writeln(`Animals.slice(2, 4): ${animals.slice(2, 4)}<br>`)
document.writeln(`Animals.slice(-2): ${animals.slice(-2)}<br>`)
document.writeln(`Animals.slice(2, -1): ${animals.slice(2, -1)}<br>`)
document.writeln(`Animals.slice(): ${animals.slice()}<br>`)

const names = ["Marcin", "Ania", "Agnieszka"]

document.writeln(`names.join(): ${names.join()}<br>`)
document.writeln(`names.join(" - "): ${names.join(" - ")}<br>`)
document.writeln(`names.join(" <--> "): ${names.join(" <--> ")}<br>`)

const txt = "kartofel"
const tab = [...txt]
document.writeln(`${tab} <br>`)

const tekst = "Ala ma kota"
const tabela = tekst.split(" ")
document.writeln(`${tabela} <br>`)

// let text = "Stoi na stacji lokomotywa, <br>"
// text += "Ciężka ogromna i pot z niej spływa, <br>"
// text += "Tłusta oliwa"

// Mozna zrobic tez to samo ale z + pomiędzy zamiast używać +=

// document.writeln(`Tekst: ${text}`)

// Output: Tekst: Stoi na stacji lokomotywa,
// Ciężka ogromna i pot z niej spływa,
// Tłusta oliwa

const age = 10
const text = "Ten pies ma " + age + " lat"
console.log(text)
const text1 = 'Ten kot ma ' + age + ' lat'
console.log(text1)

const text2 = `Ten chomik ma ${age} lat<br>`
document.writeln(text2)

document.writeln(`Długość tekstu (text2): ${text2.length}`)
document.writeln(`Litera w indexie 4: ${text2.charAt(4)}`) 

document.writeln("Typ string nie jest mutowalny - nie mozna zmieniac w nim liter")