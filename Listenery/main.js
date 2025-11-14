// Obsluga zdarzen
document.addEventListener("DOMContentLoaded", () => {
    let akapit = document.createElement("p")
akapit.textContent = "Lubie placki"

akapit.addEventListener("click", () => {
    akapit.textContent = "Maciej"
})

document.body.appendChild(akapit)


// Date update
let timeBtn = document.getElementById("timeButton")
let timeContainer = document.getElementById("demo")

function displayDate() {
    timeContainer.textContent = `Aktualna data to: ${Date()}`
}

timeBtn.addEventListener("click", displayDate)
})

// Uppercase firstname

let firstName = document.getElementById("fname")
let secondName = document.getElementById("sname")

function firstNameUpper() {
    firstName.value = firstName.value.toUpperCase()
}

function updateBgColor() {
    secondName.style.backgroundColor = "yellow"
}

firstName.addEventListener("change", firstNameUpper)
secondName.addEventListener("focus", updateBgColor)
