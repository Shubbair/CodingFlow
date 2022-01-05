int size = 200;

void setup() {
  size(600, 600);
  background(180,20,200);
  stroke(255);
  strokeWeight(1);

  translate(width / 2 - size / 2, height / 2 - size / 2);

  generateSierpinskiCarpet(size);
}

void draw() {
}

void generateSierpinskiCarpet(int size) {

  if (size > 4) {

    rect(0, 0, size, size);

    size /= 3;

    //Left
    pushMatrix();
    translate(0 - size * 3 + size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Right
    pushMatrix();
    translate(0 + size * 5 - size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Top
    pushMatrix();
    translate(0 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Bottom
    pushMatrix();
    translate(0 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Top Left
    pushMatrix();
    translate(0 - size * 3 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Top Right
    pushMatrix();
    translate(0 + size * 5 - size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Bottom Left
    pushMatrix();
    translate(0 - size * 3 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();

    //Bottom Right
    pushMatrix();
    translate(0 + size * 5 - size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    popMatrix();
  }
}
