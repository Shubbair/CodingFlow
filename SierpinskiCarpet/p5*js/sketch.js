let size = 200;

function setup() {
  createCanvas(600, 600, P2D);
  background(180,20,200);
  stroke(255);
  strokeWeight(1);

  translate(width / 2 - size / 2, height / 2 - size / 2);

  generateSierpinskiCarpet(size);
}

function draw() {
}

function generateSierpinskiCarpet(size) {

  if (size > 4) {

    rect(0, 0, size, size);

    size /= 3;

    //Left
    push()
    translate(0 - size * 3 + size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Right
    push()
    translate(0 + size * 5 - size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top
    push()
    translate(0 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom
    push()
    translate(0 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top Left
    push()
    translate(0 - size * 3 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top Right
    push()
    translate(0 + size * 5 - size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom Left
    push()
    translate(0 - size * 3 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom Right
    push()
    translate(0 + size * 5 - size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();
  }
}