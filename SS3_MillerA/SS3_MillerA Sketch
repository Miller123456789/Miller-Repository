// Miller A
// Title: Apple Tree Cloud Color Blast
// This semester I will be trying to expand my skill and knowledge of coding, player will click the mouse to change all colors and switch direction of cloud. Also the cloud moves back and forth on its own.

let treeColor, bgColor, appleColor;
let cloudX = 0;  // Starting x position of the cloud
let cloudSpeed = 2; // Speed at which the cloud moves

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0); // Brown for the tree
  bgColor = color(25, 20, 250);  // Blue for the background
  appleColor = color('Red');     // Red for the apples

  background(bgColor);

  fill(treeColor); // tree trunk
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70); 

  noStroke()

  fill('Green')  // tree leaves
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0)

  noStroke()

  fill(appleColor); // apples
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);
}

function draw() {
  // Clear the background and redraw
  background(bgColor);

  // Redraw tree and apples
  fill(treeColor);
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70); 

  noStroke()

  fill('Green')
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0)

  noStroke()

  fill(appleColor);
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);

  // Cloud
  fill(255);
  noStroke();
  ellipse(cloudX, 100, 65, 40);
  ellipse(cloudX, 80, 65, 40);
  ellipse(cloudX-30, 100, 65, 40);
  ellipse(cloudX+30,100,65,40)
  
  // Move the cloud
  cloudX += cloudSpeed;
  
  
  // Reverse direction when cloud reaches the edges
  if (cloudX > width + 40 || cloudX < -40) {
    cloudSpeed *= -1;
  }
}
function mousePressed() {
  // Change colors when the mouse is pressed
  treeColor = color(random(255), random(255), random(255));  
  bgColor = color(random(255), random(255), random(255));    
  appleColor = color(random(255), random(255), random(255)); 

  background(bgColor);

  fill(treeColor);
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70); 

  noStroke()

  fill('Green')
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0)

  noStroke()

  fill(appleColor);
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);

  // Toggle cloud direction when mouse is pressed
  cloudSpeed *= -1;  // Reverse the direction of the cloud
}

