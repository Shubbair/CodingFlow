void setup(){
  size(500,500);
}

float sgn(float val){
if (val == 0) {
    return 0;
  }
  return val / abs(val);
}

void draw(){
  background(51);
  translate(width/2,height/2);
  
  float a = 100;
  float b = 100;
  float n = map((mouseX),0,width,0.3,8);

  noFill();
  stroke(255);
  
  beginShape();
  for(float angle = 0 ; angle < TWO_PI ; angle +=0.1){
    float x = pow(abs(cos(angle)),2/n) * a * sgn(cos(angle));
    float y = pow(abs(sin(angle)),2/n) * b * sgn(sin(angle));
    vertex(x,y);
  }
  endShape(CLOSE);
}
