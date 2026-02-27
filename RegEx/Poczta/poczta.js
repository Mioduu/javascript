let tekst = "34-200 Sucha Beskidzka"
var kod_pocztowy = /\d{2}-\d{3}/
// Sposób nr. 1
var pozycja = tekst.search(kod_pocztowy)
document.writeln(tekst.slice(pozycja, pozycja+6) + "<br> <br>")
// Sposób nr. 2
var kod = tekst.match(kod_pocztowy) 
document.writeln(kod) 