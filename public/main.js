function setup() {
    pong = new Pong(600, 400, 220, new Ball());
    pong.ball.position.x = 100;
    pong.ball.position.y = 50;
    createCanvas(pong.width, pong.height);
}

function draw() {
    background(pong.backgroundColor);
    pong.draw();
}