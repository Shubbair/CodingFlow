var cols,rows;
var scl = 20;
var w = 2000;
var h = 1600;
var moving = 0;
var terrain = [];

function setup(){
  createCanvas(600,600,WEBGL);
  
  rows = w / scl;
  cols =  h / scl;
  
 for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; 
    }
  }
}


function draw(){
  background(51);
  
  moving -= 0.05;
  
  var yoff = moving;
  for(let y = 0 ; y < rows ; y++){
    var xoff=  0;
     for(let x = 0 ; x < cols ; x++){
       terrain[x][y] = map(noise(xoff,yoff),0,1,-100,100);
       xoff += 0.09;
     }
     yoff += 0.09;
  }
  noFill();
  stroke(255);
  
  translate(width/2,height/2+50);
  rotateX(PI/3);

  translate(-w/2,-h/2);
  for(let y = 0 ; y < rows-1 ; y++){
    beginShape(TRIANGLE_STRIP);
     for(let x = 0 ; x < cols ; x++){
        vertex(x*scl,y*scl,terrain[x][y]);
        vertex(x*scl,(y+1)*scl,terrain[x][y+1]);
     }
    endShape();
  } 
  
}