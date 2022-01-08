float increment = 0.01;

void setup(){
  size(400,400);
}

void draw(){
  float yoff = 0;

  loadPixels();
  for(int x = 0 ; x < width ; x++ ){
    float xoff = 0;
    for(int y = 0 ; y < width ; y++ ){
      int index = (x + y * width);
      float col = noise(xoff,yoff) * 255;
      pixels[index] = color(col,255);
      xoff += increment;
    }
    yoff += increment;
  }
  
  updatePixels();
  
  noLoop();
}
