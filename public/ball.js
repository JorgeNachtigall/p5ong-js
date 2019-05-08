class Ball extends Player {
    constructor() {
        super(10, 10);
        this.velocity = createVector();
        this.velocity.x = 100;
        this.velocity.y = 100;
    }

    draw(dt) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;

        if (this.left < 0 || this.right > width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.top < 0 || this.bottom > height) {
            this.velocity.y = -this.velocity.y;
        }

        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}