let myName = document.createElement("h2")
let testDiv = document.getElementById("testDiv")
let testAkapit = document.getElementById("testAkapit")
myName.textContent = "Maciej"
document.body.appendChild(myName)
testDiv.replaceChild(myName, testAkapit)

