var cells = [];

function setup() {
  createCanvas(700, 700);
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
 background(51);
 
 for (let i = cells.length-1; i >=0 ; i--) {
    for(let j = 0; j < i; j++) {
      if(i!=j){
        cells[i].maketangent(cells[j]);
      }
      
    }
  }
  
 for(let i = 0 ; i < cells.length ; i++){
   cells[i].move();
   cells[i].show();
 };
}

function mousePressed() {
  for (let i = cells.length-1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i,1);
    }
  }
}