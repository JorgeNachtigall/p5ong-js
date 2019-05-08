class Ball extends Player {
    constructor() {
        super(10, 10);
        this.velocity = createVector();
    }

    draw() {
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}