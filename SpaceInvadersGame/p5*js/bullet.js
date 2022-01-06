function Bullet(_x,_y){
    this.x= _x;
    this.y = _y;
    this.r =6;
    this.toDelete = false;
     
    this.show = function(){
      fill(255);
      ellipse(this.x,this.y,this.r,this.r);
    }
     
    this.update = function(ydir){
        this.y += ydir;
    }
    
    this.removeit = function(){
        this.toDelete = true;
    }
    
    this.hits = function(inv) {
       var d = dist(this.x, this.y, inv.x, inv.y);
       if (d < this.r + inv.r) {
         return true;
       } else {
         return false;
       }
     }
    
     this.overflow = function(){
     if(this.y < 0 && this.y > height){
       return true;
     }
     return false;
    }
   }