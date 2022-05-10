function setup(){
  createCanvas(500,500,WEBGL);
  angleMode(DEGREES);
  noLoop();
}

function draw(){
  background(255);
  
  translate(0,200,0);

  //rotateY(frameCount*0.1);
  
  branch(100);
}

function branch(len){
  strokeWeight(map(len,10,100,0.5,6));
  stroke(70,40,20);
  line(0,0,0,0,-len - 2,0);
  
  translate(0,-len,0);
  
  if(len > 10){
    for(let i = 0 ; i < 3 ; i++){
      rotateY(random(100,140));
      
      push();
      rotateZ(random(20,50));
      branch(len*0.7);
      pop();
    }
  }else{
    translate(5,0,0);
    rotateZ(90);

    fill(80+random(-20,20),120+random(-20,20),40 + random(-20,20));
    noStroke();

    beginShape();
    for(var i=45; i < 135;i++){
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x,y);
    }

    for(var i=135; i > 45;i--){
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 10;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  
}
