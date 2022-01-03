int [][] field;
int resolution = 10;
int rows,cols;


void setup(){
  size(600,400);
  cols = 1 + width / resolution;
  rows = 1 + height / resolution;
  field = new int[cols][rows];
  
  for(int i = 0 ; i < cols ; i++){
    for(int j = 0 ; j < rows ; j++){
      field[i][j] = floor(random(2));
    }
  }
  
}

void draw(){
  background(51);
  for(int i = 0 ; i < cols ; i++){
    for(int j = 0 ; j < rows ; j++){
      stroke(field[i][j]*255);
      strokeWeight(resolution*0.4);
      point(i*resolution,j*resolution);
    }
  }
  
  // cols - 1 to ignore the last column,
  // rows - 1 to ignore the last row
  
  for(int i = 0 ; i < cols - 1 ; i++){
    for(int j = 0 ; j < rows - 1 ; j++){
      float x = i * resolution;
      float y = j * resolution;
      PVector a = new PVector(x+resolution*0.5,y);
      PVector b = new PVector(x + resolution,y + resolution * 0.5);
      PVector c = new PVector(x+resolution*0.5,y + resolution);
      PVector d = new PVector(x,y + resolution * 0.5);
      int state = getState(field[i][j],field[i+1][j],field[i+1][j+1],field[i][j+1]);
      stroke(255);
      strokeWeight(1);
      fill(255);
      switch(state){
      case 1: drawLine(c, d); break;
      case 2: drawLine(b, c); break;
      case 3: drawLine(b, d); break;
      case 4: drawLine(a, b); break;
      case 5: drawLine(a, d); drawLine(b, c); break;
      case 6: drawLine(a, c); break;
      case 7: drawLine(a, d); break;
      case 8: drawLine(a, d); break;
      case 9: drawLine(a, c); break;
      case 10: drawLine(a, b); drawLine(c, d); break;
      case 11: drawLine(a, b); break;
      case 12: drawLine(b, d); break;
      case 13: drawLine(b, c); break;
      case 14: drawLine(c, d); break;
      }
    }
  }
}

void drawLine(PVector v1,PVector v2){
  line(v1.x,v1.y,v2.x,v2.y); 
}

int getState(int a,int b, int c, int d){
  return a * 8 + b * 4 + c * 2 + d * 1; 
}
