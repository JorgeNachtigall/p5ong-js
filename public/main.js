let width = 600;
let height = 400;

function setup() {
    pong = new Pong(width, height, 220, new Ball("black"));
    createCanvas(pong.width, pong.height);
    pong.ball.reset();
}

function draw() {
    background(pong.backgroundColor);
    pong.draw();
}

function mouseClicked() {
    pong.ball.start();
}