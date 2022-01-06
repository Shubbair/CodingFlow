function Drop(){
    var x = random(width);
    var y= random(-500, -50);
    var z = random(0, 20);
    var yspeed  = map(z, 0, 20, 1, 20);
    var len = map(z, 0, 20, 10, 20);
     
     this.fall = function(){
      y += yspeed;
      
      var gravity = map(z, 0, 20, 0, 0.2); 
      
      yspeed += gravity;
      
      if (y > height) { 
         y = random(-200, -100);
         yspeed = map(z, 0, 20, 4, 10);
       }
     }
    
     this.show = function() { 
       var thick = map(z, 0, 20, 1, 3);
       strokeWeight(thick);
       stroke(50, 50,150); 
       line(x, y, x, y+len); 
     }
     
   }   