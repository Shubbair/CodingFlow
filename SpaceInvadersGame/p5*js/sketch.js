var ship;
var bullets = [];
var invaders_num = 6;
var invaders = [];

function setup(){
  createCanvas(600,400);
  
  ship = new Ship();
  
  for (let i = 0; i < invaders_num; i++) {
    invaders[i] = new Invaders(i*80+80, 60);
  }
}

function draw(){
  background(0);
  
  ship.update();
  ship.show();
  
  var edge = false;

  for (let i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width - invaders[i].r || invaders[i].x < invaders[i].r) {
      edge = true;
    }
  }

  if (edge) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i].shiftOpposit();
    }
  }
  
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].update(-6);
    bullets[i].show();
    for (let j = 0; j < invaders.length-1; j++) {
      if (bullets[i].hits(invaders[j])) {
        invaders[j].grow();
        bullets[i].removeit();
      }
    }
    
    if(bullets[i].overflow()){
        bullets[i].removeit();
    }
  }

  for (let i = bullets.length-1; i >= 0; i--) {
    var d = bullets[i];
    if (d.toDelete) {
      bullets.splice(i,1);
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if(key == ' '){
    var b = new Bullet(ship.x+25,ship.y-50);
    bullets.push(b);
  }
  
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}