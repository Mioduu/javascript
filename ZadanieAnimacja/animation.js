const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
 
let angle = 0
 
function drawAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
 
    ctx.save()
    ctx.translate(250, 250)
    ctx.rotate(angle)
 
    let grad = ctx.createLinearGradient(-100, -100, 100, 100)
    grad.addColorStop(0, "cyan")
    grad.addColorStop(1, "purple")
 
    ctx.strokeStyle = grad
    ctx.lineWidth = 5
    ctx.shadowColor = "cyan"
    ctx.shadowBlur = 20
 
    ctx.beginPath()
    ctx.arc(0, 0, 150, 0, Math.PI * 2)
    ctx.stroke()
 
    ctx.setLineDash([10, 5])
    for(let i = 0; i < 12; i++) {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -120)
        ctx.stroke()
        ctx.rotate(Math.PI / 6)
    }
 
    ctx.setLineDash([])
 
    ctx.strokeStyle = "yellow"
    ctx.beginPath()
    ctx.moveTo(50, -200)
 
    ctx.bezierCurveTo(100, -250, 0, -100, -80, -200)
    ctx.stroke()
 
    ctx.fillStyle = "rgba(255,255,255,0.2)"
    ctx.fillRect(-20, -20, 40, 40)
 
    ctx.strokeStyle = "cyan"
    ctx.strokeRect(-25, -25, 50, 50)
 
    const textX = -35
    const textY = -200
 
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.strokeGap = "5px"
    ctx.font = "20px Arial"
    ctx.lineWidth = 2
    ctx.fillText("Portal", textX, textY)
    ctx.strokeText("Portal", textX, textY)
 
    ctx.restore()
 
    angle += 0.01
    requestAnimationFrame(drawAnimation)
}
 
drawAnimation()