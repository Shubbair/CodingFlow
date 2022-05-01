float x = 0,y = 0;
int spacing = 20;

void setup() {
    size(500, 500);
    background(0);
}

void draw() {
    stroke(255);
    if(random(1) < 0.5){
      line(x,y,x + spacing,y + spacing);
    }else{
        line(x,y + spacing,x + spacing,y);
    }
    x = x + spacing;
    if(x > width){
        x = 0;
        y = y + spacing;
    }
    if(y > height){
        noLoop();
    }
}
