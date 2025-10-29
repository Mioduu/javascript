// Hrefy w konsoli

let lista = document.querySelectorAll("a")
console.log(lista)
console.log(`Pierwszy: ${lista[0].getAttribute("href")}`)
console.log(`Drugi: ${lista[1].getAttribute("href")}`)

// Zmianka atrybutów
var i = 0
imageList = ["jslogo.png", "javalogo.png"]

lista[0].setAttribute("href", "https://kursjs.pl")

let button = document.getElementById("changePhoto")

function changeImg() {
    var img = document.querySelector("img")
    img.setAttribute("src", imageList[i])
    i++
    if(i > 1) {
        i = 0
    }
}

button.addEventListener("click", changeImg)