let i = 1
document.writeln("<h1>Incrementation<h1> <br>")
document.writeln(`Liczba i= ${++i} <br>`)
document.writeln(`Liczba i= ${i++} <br>`)
document.writeln(`Liczba i= ${i} <br>`)

let j = 5
document.writeln("<h1>Decrementation<h1> <br>")
document.writeln(`Liczba i= ${--j} <br>`)
document.writeln(`Liczba i= ${j--} <br>`)
document.writeln(`Liczba i= ${j} <br>`)

let teraz = new Date()
document.writeln(`Data niesformatowana: ${teraz}`)

document.writeln(`Teraz jest: ${teraz.getHours()}:${teraz.getMinutes()} Rok: ${teraz.getFullYear()}<br>`)

document.writeln(`Nowy rok: ${new Date(2025, 0, 1)}`)

const miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']

let nr_miesiaca = teraz.getMonth()
let miesiac = miesiace[nr_miesiaca]
document.writeln(`Aktualny miesiąc: ${miesiac}`)

const dzien_tygodnia = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
let today = new Date(2023,11,24)
const day = today.getDay()
document.writeln(`Dziś jest ${dzien_tygodnia[day]}`) 

let teraz_ms = teraz.getTime()
const tydzien_ms = 7*24*60*60*1000

let tydzien_pozniej = new Date(teraz_ms + tydzien_ms)
document.writeln(`${tydzien_pozniej.getDate()}.${tydzien_pozniej.getMonth()}.${tydzien_pozniej.getFullYear()}`)