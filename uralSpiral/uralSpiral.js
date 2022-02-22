let x, y;
let num = 1;

function setup() {
    createCanvas(500,500);
    x = width/2;
    y = height/2;
}

function draw() {
    background(0);
    // Draw the numbers in the cetre of the canvas
    textsize(64); 
    testAlign(CENTER, CENTER);
    fill(255);
    text(num, x, y);
}
