const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70)

gradient.addColorStop(0, "pink")
gradient.addColorStop(0.9, "white")
gradient.addColorStop(1, "green")

ctx.fillStyle = gradient
ctx.fillRect(20, 20, 160, 160)