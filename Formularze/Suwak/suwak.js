let zakres = document.getElementById("zakres")
zakres.addEventListener("change", wybierz)

function wybierz() {
    document.getElementById("wynik").innerHTML = zakres.value
}