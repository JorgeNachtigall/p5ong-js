let width = 600;
let height = 400;
let backgroundColor = 220;
let ball, player;

function setup() {
    ball = new Ball();
    createCanvas(width, height);
}

function draw() {
    background(backgroundColor);
    ball.draw();
}