function Invaders(_x,_y){
    this.x = _x;
    this.y = _y;
    this.xdir = 1;
    this.r = 30;
     
    this.show = function(){
      noStroke();
      fill(255);
      ellipse(this.x,this.y,this.r,this.r);
    }
    
     this.grow = function(){
        this.r = this.r + 2;
     }
    
     this.shiftOpposit = function(){
        this.xdir *= -1;
    }
    
    this.move = function(){
        this.x += this.xdir;   
    }
   }