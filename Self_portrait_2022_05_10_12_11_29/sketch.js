var variableName;
function setup() {
  createCanvas(400, 400);
  variableName = 150;
}

function draw() {
  background(220);
  fill(84, 59, 56);
  noStroke()
  arc(width/2.5, height/1.5, 300, 495, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  fill(240, 208, 158)
  //face//
  square(50, 80, 200, 90);
  fill(64, 54, 56);
  //eyes//
  ellipse(115, variableName, 25);
  ellipse(170, variableName, 25);
  fill(255, 255, 255);
  ellipse(170, variableName,10);
  ellipse(115, variableName,10);
  fill(230, 138, 202);
  arc(variableName, 210, 100, 100, 0, PI + QUARTER_PI, CHORD);
  fill(255, 255, 255)
    arc(149, 213, 80, 80, 0, PI + QUARTER_PI, CHORD);
  fill(219, 188, 140)
  ellipse(145, 170, 15);
  


}