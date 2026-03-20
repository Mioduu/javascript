const image = new Image(24, 24)
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

image.src = "gwiazdka.png"

image.addEventListener("load", () => {
    animateFps(draw, 30)
})

function animateFps(callback, fps = 60) {
    const interval = 1000 / fps
    let lastTime = 0

    function update(time) {
        requestAnimationFrame(update)

        if (time - lastTime >= interval) {
            lastTime = time
            callback()
        }
    }

    requestAnimationFrame(update)
}

const star = {
    x: 0,
    y: 0,
    dirX: 1,
    dirY: 1,
    speed: 2
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    star.x += star.dirX * star.speed
    star.y += star.dirY * star.speed

    if (star.x <= 0 || star.x >= canvas.width - 24) {
        star.dirX *= -1
    }

    if (star.y <= 0 || star.y >= canvas.height - 24) {
        star.dirY *= -1
    }

    ctx.drawImage(image, star.x, star.y)
}