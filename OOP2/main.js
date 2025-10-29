class Enemy {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.type = "Normalny"
    }

    fly() {
        return this.type + " - lecę"
    }
}

var enemy1 = new Enemy(5,10)

console.log(enemy1.fly())

class EnemyShooter extends Enemy {
    constructor(x, y) {
        super(x, y)
        this.type = "Strzelający"
    }
    shoot() {
        return this.type + " - strzelam"
    }
}

var enemyShooter = new EnemyShooter(10,20)

console.log(enemyShooter.fly())
console.log(enemyShooter.shoot())