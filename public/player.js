class Player {
    constructor(w, h) {
        this.position = createVector();
        this.size = createVector(w, h);
    }

    get left() {
        return this.position.x;
    }

    get right() {
        return this.position.x + this.size.x;
    }

    get top() {
        return this.position.y;
    }

    get bottom() {
        return this.position.y + this.size.y;
    }
}