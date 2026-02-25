function createInputInfo() {
    let input = document.querySelector("#fname");
    let text = input.value;

    if (text.length > 0) {
        text = text.charAt(0).toUpperCase() + text.slice(1);
        input.value = text;
    }
    addInfo()
}

function addInfo() {
    let info = document.querySelector("#infoInput")
    info.innerHTML = "Imię"
}