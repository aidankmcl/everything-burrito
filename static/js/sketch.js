var oldX1, oldY1, oldX2, oldY2;
var newX1, newY1, newX2, newY2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#85FF66');
  var blackEyeR = 42;
  var whiteEyeR = 40;
  var blackY = windowHeight - 205;
  var whiteY = windowHeight - 208;
  var jakeColor = color(255, 210, 0);

  strokeWeight(2);
  fill(jakeColor);
  ellipse(windowWidth - 176, windowHeight - 190, 20, 30); // left ear
  // left arm
  rect(windowWidth - 178, windowHeight - 211, 131, 95); // body
  arc(windowWidth-61, windowHeight-195, 16, 26, 0, PI); // right ear
  
  fill(jakeColor);
  arc(windowWidth - 115, windowHeight - 210, 135, 110, PI, 2 * PI, OPEN); // head

  fill('black');
  ellipse(windowWidth - 164, blackY, blackEyeR, blackEyeR); // left shadow
  ellipse(windowWidth - 95, blackY, blackEyeR, blackEyeR); // right shadow

  stroke('black');
  fill('white');
  ellipse(windowWidth - 171, whiteY, whiteEyeR, whiteEyeR); // left eye
  ellipse(windowWidth - 102, whiteY, whiteEyeR, whiteEyeR); // right eye
  
  fill(jakeColor);
  arc(windowWidth-134, windowHeight-170, 30, 20, 0, PI); // mouth
  rect(windowWidth-165, windowHeight-179, 20, 15); // left mustache
  rect(windowWidth-125, windowHeight-179, 20, 15); // right mustache
  arc(windowWidth-135, windowHeight-178, 60, 60, PI, 2 * PI, OPEN);// must-over nose
  arc(windowWidth-155, windowHeight-165, 20, 20, 0, PI, OPEN); // left must-end
  arc(windowWidth-115, windowHeight-165, 20, 20, 0, PI, OPEN); // right must-end
  
  fill('black');
  ellipse(windowWidth-136, windowHeight-180, 25, 18); // nose
  
  // legs before butt
  fill(jakeColor);
  arc(windowWidth - 113, windowHeight - 120, 131, 100, 0, PI, OPEN); //butt
  rect(windowWidth - 155, windowHeight - 100, 18, 80); // left leg
  rect(windowWidth - 85, windowHeight - 100, 18, 80); // right leg
  ellipse(windowWidth - 150, windowHeight - 20, 26, 18); // left foot
  ellipse(windowWidth - 80, windowHeight - 20, 26, 18); // right foot
  noStroke();
  rect(windowWidth - 154, windowHeight - 100, 16, 80); // left leg
  rect(windowWidth - 84, windowHeight - 100, 16, 80); // right leg
  arc(windowWidth - 113, windowHeight - 120, 129, 100, 0, PI, OPEN); //butt 2 (cover top of leg)
  stroke('black');

  oldX1 = windowWidth-61;
  oldX2 = windowWidth-161;
  oldY1 = windowHeight-165;
  oldY2 = windowHeight-165;
  newX1 = oldX1;
  newX2 = oldX2;
  newY1 = oldY1;
  newY2 = oldY2;
}

function windowResized() {
  setup();
}

var i = 0;
var speed = 0.2;
var hasMoved = false;

function mouseMoved() {
  hasMoved = true;

  newX1 = oldX1 - (oldX1 - mouseX-50)*speed;
  newY1 = oldY1 - (oldY1 - mouseY-50)*speed;
  newX2 = oldX2 - (oldX2 - mouseX-50)*speed;
  newY2 = oldY2 - (oldY2 - mouseY-50)*speed;
}

function draw() {
  i++;
  var write = false;
  var leftHandTouch = Math.abs(mouseX+50-newX1)<30 && Math.abs(mouseY+50-newY1)<30;
  var rightHandTouch = Math.abs(mouseX+50-newX2)<30 && Math.abs(mouseY+50-newY2)<30;

  if (hasMoved && (leftHandTouch || rightHandTouch)) {
    write = true;
  }
  if (i%1 == 0) {
    strokeWeight(20);
    stroke(color(255, 200, 0));
    line(oldX2, oldY2, newX2, newY2);
    stroke(color(255, 210, 0));
    line(oldX1, oldY1, newX1, newY1);
    oldX1 = newX1;
    oldY1 = newY1;
    oldX2 = newX2;
    oldY2 = newY2;
  }
  if (write) {
    strokeWeight(1);
    textSize(64);
    stroke('cornflowerblue');
    fill('cornflowerblue');
    text("You lost D:", windowWidth/2-150, 200);
  }

}