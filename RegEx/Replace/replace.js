let text = "Visit Microsoft!"
document.writeln(`Tekst przed edycją: ${text} <br>`)
let result = text.replace(/Microsoft/i, "W3Schools")
document.writeln(`Tekst po edycji: ${result}`)