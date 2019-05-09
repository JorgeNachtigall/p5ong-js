class Ball extends Rect {
    constructor(color) {
        super(10, 10);
        this.color = color;
        this.velocity = createVector();
        this.velocity.x = 100;
        this.velocity.y = 100;
        this.position.x = width / 2;
        this.position.y = height / 2;
        this.valueLen;
        this.len;
    }

    changeLen() {
        this.len = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
        const fact = this.valueLen / this.len;
        this.velocity.x *= fact;
        this.velocity.y *= fact;
    }

    draw(dt, players) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;

        if (this.left < 0 || this.right > width) {
            const playerId = this.velocity.x < 0 | 0;
            players[playerId].score++;
            this.reset();
        }
        if (this.top < 0 || this.bottom > height) {
            this.velocity.y = -this.velocity.y;
        }

        fill(this.color);
        rect(this.left, this.top, this.size.x, this.size.y);
    }

    reset() {
        this.position.x = width / 2;
        this.position.y = height / 2;
        this.velocity.x = 0;
        this.velocity.y = 0;
    }

    start() {
        if (this.velocity.x === 0 && this.velocity.y === 0) {
            this.velocity.x = 100 * (Math.random() > .5 ? 1 : -1);
            this.velocity.y = 100 * (Math.random() * 2 - 1);
            this.valueLen = 200;
        }
    }
}