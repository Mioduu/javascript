function sendMessage() {
    let input = document.getElementById("messageInput").value
    let chat = document.querySelector("#chat")
    let newMessage = document.createElement("div")
    if (!input) {
        return
    }
    newMessage.classList.add("message", "krzysztof")
    newMessage.innerHTML = `<img src="Krzysiek.jpg" alt="Krzysztof Łukasiński"><p>${input}</p>`
    chat.appendChild(newMessage)
    document.getElementById("messageInput").value = ""
}

function generateRandomReply() {
    let respond = ["W takim razie widzimy się jutro!", "Trzymaj się!", "Skibidi"]
    let respondIndex = Math.floor(Math.random() * respond.length)
    let chat = document.querySelector("#chat")
    let message = document.createElement("div")
    let image = document.createElement("img")
    image.src = "Jolanta.jpg"
    image.alt = "Jolanta Nowak"
    
    message.textContent = respond[respondIndex] 
    
    chat.appendChild(image)
    chat.appendChild(message)
}