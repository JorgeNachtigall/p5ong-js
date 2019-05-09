class Player extends Rect {
    constructor(x, y, color) {
        super(20, 100);
        this.position.x = x;
        this.position.y = y;
        this.color = color;
        this.score = 0;
    }
    draw() {
        fill(this.color);
        rect(this.left, this.top, this.size.x, this.size.y);
    }
}