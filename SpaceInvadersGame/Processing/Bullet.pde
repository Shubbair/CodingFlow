class Bullet{
 float x;
 float y;
 float r=6;
 boolean toDelete = false;
 
 Bullet(float _x, float _y){
    x = _x;
    y = _y;
 }
  
 void show(){
   fill(255);
   ellipse(x,y,r,r);
 }
  
 void update(float ydir){
   y += ydir;
 }
 
 void removeit(){
   toDelete = true;
 }
 
 boolean hits(Invaders inv) {
    float d = dist(this.x, this.y, inv.x, inv.y);
    if (d < this.r + inv.r) {
      return true;
    } else {
      return false;
    }
  }
 
 boolean overflow(){
  if(y < 0 && y > height){
    return true;
  }
  return false;
 }
  
}
