class Pong {
    constructor(width, height, backgroundColor, ball) {
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.ball = ball;
        this.player;
        this.lastTime;
        this.deltaTime = 0;
    }
    draw() {
        if (this.lastTime) {
            this.ball.draw(this.deltaTime = (millis() - this.lastTime) / 1000);
        }
        this.lastTime = millis();
    }
}