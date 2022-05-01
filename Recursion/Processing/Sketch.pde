void setup() {
    size(600, 600);
  }
  
  void draw() {
    background(0);
    stroke(255);
    strokeWeight(0.5);
    noFill();
    drawCircle(300, 300, 300);
    noLoop();
  }
  
  void drawCircle(float x, float y, float d) {
    ellipse(x, y, d,d);
    if (d > 2) {
      float newD = d * 0.5;
      drawCircle(x + newD, y, newD);
      drawCircle(x - newD, y, newD);
      drawCircle(x, y + d * 0.4, d * 0.4);
      drawCircle(x, y - d * 0.4, d * 0.4);
    }
  }
  
