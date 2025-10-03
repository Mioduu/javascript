let i = 10
let table = document.createElement("table") // Tworzy tabele
document.body.append(table) // Dodaje tabele do HTML'a
while (i >= 0) { // LOOP
    var tr = document.createElement("tr") // Tworzy rząd poziomy
    var td = document.createElement("td") // Dodaje elementy tabeli
    tr.append(td) // Dodaje do rządu elementy
    table.append(tr) // Dodaje rząd do tabeli
    td.append(i++) // Dodaje do elementów liczby
}

for(let j = 10; j >= 1; j--) {
    console.log(j)
}