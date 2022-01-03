float angle = 100;
float branch_ratio = 0.67;


void setup(){
  size(400,400);
}

void draw(){
  background(51);
  stroke(255);
  translate(width/2, height);
  branch(100);
}

void branch(float len){
  line(0,0,0,-len);
  translate(0, -len);
  if (len > 4){
    pushMatrix();
    rotate(angle);
    branch(len * branch_ratio);
    popMatrix();
    pushMatrix();
    rotate(-angle);
    branch(len * branch_ratio);
    popMatrix();
  }
}
