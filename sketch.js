var fireworks = [];
var grav;

function setup() {
  createCanvas(1920, 1055);
  colorMode(HSB);
  grav = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  firework = new Particle(random(width), height);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.08) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length-1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()){
      fireworks.splice(i, 1);
    }
  }
  console.log(fireworks.length);
}