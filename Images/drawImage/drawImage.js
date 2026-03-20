const img = new Image()
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
img.src = "backdrop.png"
img.onload = () => {
    ctx.drawImage(img, 0, 0)
    ctx.strokeStyle = "red"
    ctx.lineWidth = 3 
    ctx.beginPath()
    ctx.moveTo(30, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
}
