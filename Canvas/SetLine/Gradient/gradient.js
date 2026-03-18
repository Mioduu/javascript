const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const gradient = ctx.createLinearGradient(20, 0, 220, 0)

// 3 Color Step
gradient.addColorStop(0, "green")
gradient.addColorStop(0.5, "cyan")
gradient.addColorStop(1, "green")

// Filling rectangle with gradient
ctx.fillStyle = gradient
ctx.fillRect(20, 20, 200, 100)