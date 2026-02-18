let newText = document.createElement("h2")

newText.textContent = "Nowy znacznik h2"
newText.setAttribute("style", "color: blue;")
document.body.appendChild(newText)


let textElement = document.createElement("p")
let newDiv = document.createElement("div")

textElement.textContent = "Giga fajny tekst"
newDiv.append(textElement)
document.body.appendChild(newDiv)