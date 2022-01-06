function Ship(){
    this.x = width/2;
    this.y = height;
    this.r = 50;
    this.dir = 0;
    
    this.show = function(){
     fill(255);
     triangle(this.x, this.y, this.x+this.r/2, this.y-this.r, this.x+this.r, this.y); 
    }
    
    this.setDir = function(_dir){
        this.dir = _dir;
    }
    
    this.update = function(){
      this.x += this.dir;
    }
   }