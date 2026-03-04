let kolorR = document.getElementById("zakresR")
let kolorG = document.getElementById("zakresG")
let kolorB = document.getElementById("zakresB")

kolorR.addEventListener("change", wybierz)
kolorG.addEventListener("change", wybierz)
kolorB.addEventListener("change", wybierz)

let div = document.querySelector("div")

function wybierz() {
    div.style.background = `rgb(${kolorR.value},${kolorG.value},${kolorB.value})`
}