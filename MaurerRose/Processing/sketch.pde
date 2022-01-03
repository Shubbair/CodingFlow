int n = 6;
int d = 71;

void setup() {
  size(400, 400);
}

void draw() {
  background(0);
  translate(width/2,height/2);
  stroke(255);
  noFill();
  beginShape();
  strokeWeight(0.5);
  for (int i = 0; i < 361; i++) {
    float k = i * d * PI / 180;
    float r = 150 * sin(n*k);
    float x = r * cos(k);
    float y = r * sin(k);
    vertex(x,y);    
  }
  endShape();
}
