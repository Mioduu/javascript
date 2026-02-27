let tekst = "tel. 656433445"
var wzorzec = /\d/
var pozycja = tekst.search(wzorzec)
document.writeln(`Numer telefonu na pozycji: ${pozycja}`)