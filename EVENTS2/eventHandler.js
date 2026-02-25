function changeText(id) {
    id.innerHTML = "Nowy zmieniony tekst"
}

document.querySelector("#myButton").onclick = displayDate

function displayDate() {
    document.querySelector("#demo").innerHTML = Date()
}

function myFunction() {
    let x = document.querySelector("#fname")
    x.value = x.value.toUpperCase()
}

