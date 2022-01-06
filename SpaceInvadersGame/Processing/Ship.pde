class Ship{
 float x = width/2;
 float y = height;
 float r = 50;
 float dir = 0;
 
 void show(){
  fill(255);
  triangle(x, y, x+r/2, y-r, x+r, y); 
 }
 
 void setDir(float _dir){
   dir = _dir;
 }
 
 void update(){
   this.x += dir;
 }
}
