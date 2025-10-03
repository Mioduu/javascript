// let liczba = prompt("Podaj liczbe")

// if (liczba % 2 == 0) {
//     alert("Liczba jest parzysta")
// } else {
//     alert("Liczba nie jest parzysta")
// }

// let wynik = (liczba %2 == 0)?alert("Liczba jest parzysta"):alert("Liczba nie jest parzysta")

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max)
// }

// let liczba = prompt("Podaj liczbe")
// let losowa = getRandomInt(10)
// let wynik = (liczba == losowa) ? alert("Poprawna odpowiedź") : alert("Niepoprawna odpowiedź")


// switch(new Date().getDay()) {
//     case 5:
//         text = "Today is Friday"
//         break
//     case 0:
//         text = "Today is Sunday"
//         break
//     default:
//         text = "Looking forward to the weekend"
// }

// document.writeln(text)

let liczba1 = Number((prompt("Podaj pierwsza liczbe")))
let liczba2 = Number((prompt("Podaj druga liczbe")))
let operacja = prompt("wybierz rodzaj operacji")
switch (operacja) {
    case "+":
        wynik = liczba1 + liczba2
        break
    case "-":
        wynik = liczba1 - liczba2
        break
    case "*":
        wynik = liczba1 * liczba2
        break
    case "/":
        wynik = liczba1 / liczba2
        break
    default:
        alert("Podaj poprawny typ operacji, (+,-,*,/)")
}

document.writeln(`Oto twój wynik: ${wynik}`)