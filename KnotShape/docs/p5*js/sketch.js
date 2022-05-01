let angle = 0;

let vectors = [];

let beta = 0;

function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(0);
    rotateY(angle);
    angle += 0.03;

    noFill();
    stroke(255);
    strokeWeight(6);
    beginShape();

    let r = 70 * (0.8 + 1.6 * sin(6 * beta));
    let theta = 2 * beta;
    let phi = 0.6 * PI * sin(12 * beta);
    let x = r * cos(phi) * cos(theta);
    let y = r * cos(phi) * sin(theta);
    let z = r * sin(phi);

    vectors.push(createVector(x, y, z));

    beta += 0.01;

    for (let i = 0; i < vectors.length; i++) {
        let v = vectors[i];
        vertex(v.x, v.y, v.z);
    }
    endShape();
}