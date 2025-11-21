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

    // Listeners
    let myBtn = document.querySelector("#myButton")
    myBtn.addEventListener("mouseover", mover)
    myBtn.addEventListener("click", mclick)

    function mover() {
        document.querySelector("#demo2").innerHTML += "over <br>"
    }

    function mclick() {
        document.querySelector("#demo2").innerHTML += "click <br>"
    }

    

    // Remove Listener

    document.querySelector("#test").addEventListener("mousemove", numberGen)

    function numberGen() {
        document.querySelector("#demo3").innerHTML = Math.random()
    }
    
    let eventBtn = document.getElementById("eventBtn")
    function removeEvent() {
        document.querySelector("#test").removeEventListener("mousemove", numberGen)
    }
    eventBtn.addEventListener("click", removeEvent)

    // Hide placeholder
    let invisibleInput = document.getElementById("invisName")
    function hidePlaceholder() {
        invisibleInput.setAttribute("placeholder", "")
    }
    invisibleInput.addEventListener("focus", hidePlaceholder)

    invisibleInput.addEventListener("focusout", () => {
        invisibleInput.setAttribute("placeholder", "Wpisz swoje imię")
    })

    // Display date
    function displayDate() {
        timeContainer.textContent = `Aktualna data to: ${Date()}`
    }

    timeBtn.addEventListener("click", displayDate)  
    

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
    
    // Obramowanie
    let borderDiv = document.getElementById("obramowanieDiv")
    let borderBtn = document.getElementById("obramowanieBtn")

    borderBtn.addEventListener("click", () => {
        borderDiv.style.border = "3px solid red"
    })

    // Listy
    let coffeeList = document.getElementById("coffeeList")
    let coffeeBtn = document.getElementById("coffeeBtn")
    let coffee = ["Expresso", "Latte", "Cappucino", "Flat white"]
    let index = 0
    coffeeBtn.addEventListener("click", () => {
        if(index < coffee.length) {
            let li = document.createElement("li")
            li.textContent = coffee[index]
            coffeeList.appendChild(li)
            index++
        } else if(index == coffee.length) {
            let text = document.createElement("p")
            text.textContent = "Lista jest pełna"
            coffeeList.appendChild(text)
        }
    })

    // Lista numerowana
    let elementList = document.getElementById("elementList")
    let elementBtn = document.getElementById("elementBtn")
    let counter = 1
    elementBtn.addEventListener("click", () => {
        let li = document.createElement("li")
        li.textContent = `element ${counter}`
        elementList.appendChild(li)
        counter++
    }) 
})