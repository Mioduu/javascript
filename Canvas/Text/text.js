const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.font = "30px serif"
ctx.fillText("Maciej", 30, 30)

ctx.font = "48px serif"
ctx.strokeText("Hello World", 10, 50)


// Shadow
ctx.shadowOffsetX = 2
ctx.shadowOffsetY = 2
ctx.shadowBlur = 2
ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
ctx.font = "30px Times New Roman"
ctx.fillStyle = "Black"
ctx.fillText("Sample String", 5, 30)