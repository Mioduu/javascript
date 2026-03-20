const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.save()
ctx.fillStyle = "#0095DD"
ctx.fillRect(30, 30, 100, 100)
ctx.rotate((Math.PI / 180) * 25)

ctx.fillStyle = "#4D4E53"
ctx.fillRect(30, 30, 100, 100)
ctx.restore()