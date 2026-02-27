let tekst = "Być albo nie być"
var wzorzec = /być/i
var pozycja = tekst.search(wzorzec)
document.writeln(`Wyraz znaleziono na pozycji: ${pozycja}`)