class Cell {
  PVector pos;
  float r;
  color c;
  float xdir = -5;
  float ydir = -5;

  Cell(PVector pos, float r, color c) {
    this.pos = pos.copy();
    this.r = r;
    this.c = c;
  }

  Cell() {
    this.pos  = new PVector(random(width), random(height));
    this.r = 60;
    this.c =  color(0, random(100, 255),random(100, 255), 100);
  }


  boolean clicked(int x, int y) {
    float d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  Cell mitosis() {
    this.pos.x +=xdir;
    this.pos.x +=ydir;
    Cell cell = new Cell(this.pos, this.r*0.8, this.c);
    xdir *= -1;
    ydir *= -1;
    return cell;
  }

  void move() {
    PVector vel = PVector.random2D();
    this.pos.add(vel);
    this.pos.x = constrain(this.pos.x,0,width-this.r);
    this.pos.y = constrain(this.pos.y,0,height-this.r);
  }

  void show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
  
  void maketangent(Cell other){
    int limit = 0;
    while (overlap(other)) {
      if (limit > 1000) {
        break;
      }
      if (r < other.r) {
        pos.x += random(-5, +5);
        pos.y += random(-5, +5);
      } else {
        other.pos.x += random(-5, +5);
        other.pos.y += random(-5, +5);
      }
    }
  }

  boolean overlap(Cell other){
    float d = dist(pos.x, pos.y, other.pos.x, other.pos.y);
    return (d < r/2 + other.r/2);
  }
}
