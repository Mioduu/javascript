import { elements } from "./elements.js"

document.addEventListener("DOMContentLoaded", () => {
    const {scoreDisplay, grid, top, left, bottom, right, popup} = elements

    let snake = document.createElement("div")
    snake.style.width = "25px"
    snake.style.height = "25px"
    snake.style.left = "0px"
    snake.style.top = "0px"
    snake.style.position = "absolute"
    snake.classList.add("snake")
    
    grid.appendChild(snake)

    let currentSnakeWidth = parseInt(snake.style.width)
    let currentLeft = parseInt(snake.style.left)
    let currentTop = parseInt(snake.style.top)
    let currentDirection = "right"
    const gridWidth = grid.clientWidth
    const gridHeight = grid.clientHeight
    const cellSize = 25
    let gameState = true

    left.addEventListener("click", () => {
        currentDirection = "left"
    })
    
    right.addEventListener("click", () => {
        currentDirection = "right" 
    })

    top.addEventListener("click", () => {
        currentDirection = "top" 
    })
    
    bottom.addEventListener("click", () => {
        currentDirection = "bottom" 
    })

    function increaseSnakeSize() {
        currentSnakeWidth += 25
        snake.style.width = currentSnakeWidth + "px"
    }

    if (currentLeft < 0 || currentTop < 0) {
        popup.style.display = "flex"
    }


    function gameLoop() {
        switch(currentDirection) {
            case "left":
                currentLeft -= 25
                break
            case "right":
                currentLeft += 25
                break
            case "top":
                currentTop -= 25
                break
            case "bottom":
                currentTop += 25
                break
        }

        if (currentLeft < 0 || currentTop < 0 || 
            currentLeft >= gridWidth ||
            currentTop >= gridHeight) {
                popup.style.display = "flex"
                clearInterval(game)
                return
            }

        snake.style.left = currentLeft + "px"
        snake.style.top = currentTop + "px"
    }

    function playAgain() {
        snake.style.width = "25px"
        snake.style.height = "25px"
        snake.style.left = "0px"
        snake.style.top = "0px"
        setInterval(gameLoop, 200)
    }

    const game = setInterval(gameLoop, 200)
})