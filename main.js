// const tablica = [1,2,3,4,5]
// console.log(`Tablica liczb: ${tablica}`)

// const tab = []
// console.log(`Pusty tab: ${tab}`)

// const imiona = ["Ania", "Ola", "Kasia"]
// console.log(`Imiona: ${imiona[0]}`)

// const tab = new Array(10)

// console.log(tab)

// const tab2 = new Array("Ala", "Bolek", "Olek")

// console.log(tab2)

// const tab = ["Ala", "ma", "rudego", "kota"]

// let rozmiar = tab.length

// console.log(rozmiar)

// console.log(tab[tab.length-1])

// var liczby = [1,2,3,4]
// document.writeln(liczby + "<br>")
// liczby.push(5,6)
// document.writeln(liczby + "<br>")
document.writeln("pop() - Usuwa ostatni element z listy" + "<br>")
var liczby = [1,2,3,4]
document.writeln(liczby + "<br>")
var ostatnia_usunieta_liczba = liczby.pop()
document.writeln(liczby + "<br>")
document.writeln(` Ostatnia usunięta: ${ostatnia_usunieta_liczba} <br>`)

var pierwsza_usunieta_liczba = liczby.shift()
document.writeln(` Pierwsza usunięta: ${pierwsza_usunieta_liczba} <br>`)

var dodana_liczba = liczby.unshift(0)
document.writeln(dodana_liczba + "<br>")

document.writeln(liczby + "<br>")