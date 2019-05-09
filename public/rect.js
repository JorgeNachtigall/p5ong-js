class Rect {
    constructor(w, h) {
        this.position = createVector();
        this.size = createVector(w, h);
    }

    get left() {
        return this.position.x - this.size.x / 2;
    }

    get right() {
        return this.position.x + this.size.x / 2;
    }

    get top() {
        return this.position.y - this.size.y / 2;
    }

    get bottom() {
        return this.position.y + this.size.y / 2;
    }
}