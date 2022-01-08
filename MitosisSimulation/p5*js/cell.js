function Cell(pos,r,c) {
    if(pos){
        this.pos = pos.copy();
    }else{
        this.pos = new createVector(random(width), random(height));
    }

    this.r = r || 60;
    this.c = c || color(0, random(100, 255),random(100, 255), 100);
  
  
    this.clicked = function(x,y) {
      var d = dist(this.pos.x, this.pos.y, x, y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    }
  
    this.mitosis = function() {
      this.pos.x += this.xdir;
      this.pos.x += this.ydir;
      var cell = new Cell(this.pos, this.r*0.8, this.c);
      this.xdir *= -1;
      this.ydir *= -1;
      return cell;
    }
  
    this.move = function() {
      var vel = p5.Vector.random2D();
      this.pos.add(vel);
      this.pos.x = constrain(this.pos.x,0,width-this.r);
      this.pos.y = constrain(this.pos.y,0,height-this.r);
    }
  
    this.show = function() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
    
    this.maketangent = function(other){
      var limit = 0;
      while (this.overlap(other)) {
        if (limit > 1000) {
          break;
        }
        if (r < other.r) {
          pos.x += random(-5, +5);
          pos.y += random(-5, +5);
        } else {
          other.pos.x += random(-5, +5);
          other.pos.y += random(-5, +5);
        }
      }
    }
  
    this.overlap = function(other){
      var d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      return (d < r/2 + other.r/2);
    }
  }