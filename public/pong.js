class Pong {
    constructor(width, height, backgroundColor, ball) {
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.ball = ball;
        this.players = [new Player(20, height / 2, "black"), new Player(width - 20, height / 2, "black")];
        this.lastTime;
        this.deltaTime = 0;
    }
    draw() {
        if (this.lastTime) {
            this.ball.draw(this.deltaTime = (millis() - this.lastTime) / 1000, this.players);
        }
        this.lastTime = millis();

        for (let i = 0; i < this.players.length; i++) {
            this.players[i].draw();
        }

        if (mouseY) {
            this.players[0].position.y = mouseY;
        }
        this.players[1].position.y = this.ball.position.y;

        for (let i = 0; i < this.players.length; i++) {
            this.collide(this.players[i]);
        }
    }

    collide(player) {
        if (player.left < this.ball.right && player.right > this.ball.left &&
            player.top < this.ball.bottom && player.bottom > this.ball.top) {
            this.ball.velocity.x = -this.ball.velocity.x;
            this.ball.valueLen *= 1.05;
            this.ball.changeLen();
        }
    }

}