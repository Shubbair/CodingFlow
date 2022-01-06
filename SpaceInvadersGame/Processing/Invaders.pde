class Invaders{
 float x;
 float y;
 float xdir = 1;
 float r = 30;
 
 Invaders(float _x, float _y){
    x = _x;
    y = _y;
 }
  
 void show(){
   noStroke();
   fill(255);
   ellipse(x,y,r,r);
 }
 
  void grow() {
    r = r + 2;
  }
 
 void shiftOpposit(){
   xdir *= -1;
 }
 
 void move(){
   x += xdir;   
 }
}
