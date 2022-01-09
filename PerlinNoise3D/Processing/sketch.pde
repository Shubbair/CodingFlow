int cols,rows;
int scl = 20;
int w = 1800;
int h = 1600;
float moving = 0;
float terrain[][];

void setup(){
  size(600,600,P3D);
  
  rows = w / scl;
  cols =  h / scl;
  
  terrain = new float[cols][rows];
  
}


void draw(){
  background(1,170,255);
  
  moving -= 0.05;
  
  float yoff = moving;
  for(int y = 0 ; y < rows ; y++){
    float xoff=  0;
     for(int x = 0 ; x < cols ; x++){
       terrain[x][y] = map(noise(xoff,yoff),0,1,-100,100);
       xoff += 0.09;
     }
     yoff += 0.09;
  }
  lights();
  noStroke();
  fill(185,85,0);
  
  translate(width/2,height/2+50);
  rotateX(PI/3);

  translate(-w/2,-h/2);
  for(int y = 0 ; y < rows-1 ; y++){
    beginShape(TRIANGLE_STRIP);
     for(int x = 0 ; x < cols ; x++){
        vertex(x*scl,y*scl,terrain[x][y]);
        vertex(x*scl,(y+1)*scl,terrain[x][y+1]);
     }
    endShape();
  }   
}
