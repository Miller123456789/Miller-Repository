// Miller A
// Title: Cloudy Apple Tree Day
// I will be continuing to try my best at coding, for this the player will be clicking the mouse to change the colors and make 2 new clouds. 
// If you keep pressing the clouds will change position, along with being able to press Q to restart the drawing without refreshing. 

let treeColor, bgColor, appleColor;
let cloudX1 = 0, cloudY1 = 100, cloudSpeed1 = 2;  // First cloud
let cloudX2 = -200, cloudY2 = 150, cloudSpeed2 = 2; // Second cloud
let cloudX3 = -400, cloudY3 = 120, cloudSpeed3 = 2; // Third cloud

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0); // Brown for the tree
  bgColor = color(25, 20, 250);  // Blue for the background
  appleColor = color('Red');     // Red for the apples

  background(bgColor); // background color

  fill(treeColor); // tree trunk
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70);

  noStroke();

  fill('Green');  // tree leaves
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0);

  noStroke();

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

  noStroke();

  fill('Green');
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0);

  noStroke();

  fill(appleColor);
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);

  // Draw and move the first cloud
  fill(255);
  noStroke();
  ellipse(cloudX1, cloudY1, 65, 40);
  ellipse(cloudX1, cloudY1 - 20, 65, 40);
  ellipse(cloudX1 - 30, cloudY1, 65, 40);
  ellipse(cloudX1 + 30, cloudY1, 65, 40);
  cloudX1 += cloudSpeed1;

  // Reverse direction when the first cloud reaches the edges
  if (cloudX1 > width + 40 || cloudX1 < -40) {
    cloudSpeed1 *= -1;
  }

  // Draw and move the second cloud
  fill(255);
  noStroke();
  ellipse(cloudX2, cloudY2, 65, 40);
  ellipse(cloudX2, cloudY2 - 20, 65, 40);
  ellipse(cloudX2 - 30, cloudY2, 65, 40);
  ellipse(cloudX2 + 30, cloudY2, 65, 40);
  cloudX2 += cloudSpeed2;

  // Reverse direction when the second cloud reaches the edges
  if (cloudX2 > width + 40 || cloudX2 < -40) {
    cloudSpeed2 *= -1;
  }

  // Draw and move the third cloud
  fill(255);
  noStroke();
  ellipse(cloudX3, cloudY3, 65, 40);
  ellipse(cloudX3, cloudY3 - 20, 65, 40);
  ellipse(cloudX3 - 30, cloudY3, 65, 40);
  ellipse(cloudX3 + 30, cloudY3, 65, 40);
  cloudX3 += cloudSpeed3;

  // Reverse direction when the third cloud reaches the edges
  if (cloudX3 > width + 40 || cloudX3 < -40) {
    cloudSpeed3 *= -1;
  }
}

function mousePressed() {
  // Change colors when the mouse is pressed
  treeColor = color(random(255), random(255), random(255));
  bgColor = color(random(255), random(255), random(255));
  appleColor = color(random(255), random(255), random(255));

  background(bgColor);

  fill(treeColor); // tree trunk
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70);

  noStroke();

  fill('Green');
  stroke('Green');
  strokeWeight(3);
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0);

  noStroke();

  fill(appleColor); // apples
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);

  // Toggle cloud direction when mouse is pressed
  cloudSpeed1 *= -1; // Reverse the direction of the first cloud
  cloudSpeed2 *= -1; // Reverse the direction of the second cloud
  cloudSpeed3 *= -1; // Reverse the direction of the third cloud

  // Add new clouds by resetting their positions
  cloudX1 = random(width);  // Random X position for the first cloud
  cloudY1 = random(50, 150); // Random Y position for the first cloud

  cloudX2 = random(width);  // Random X position for the second cloud
  cloudY2 = random(50, 150); // Random Y position for the second cloud

  cloudX3 = random(width);  // Random X position for the third cloud
  cloudY3 = random(50, 150); // Random Y position for the third cloud
}

function keyPressed() {
  // Reset everything when the 'Q' key is pressed
  if (key === 'Q' || key === 'q') {
    // Reset variables
    treeColor = color(150, 75, 0); // Brown for the tree
    bgColor = color(25, 20, 250);  // Blue for the background
    appleColor = color('Red');     // Red for the apples
    cloudX1 = 0; cloudY1 = 100; cloudSpeed1 = 2; // First cloud
    cloudX2 = -200; cloudY2 = 150; cloudSpeed2 = 2; // Second cloud
    cloudX3 = -400; cloudY3 = 120; cloudSpeed3 = 2; // Third cloud

    // Redraw everything
    background(bgColor);

    fill(treeColor); // tree trunk
    stroke(treeColor);
    strokeWeight(4);
    rect(250, 350, 25, 70);

    noStroke();

    fill('Green');  // tree leaves
    stroke('Green');
    strokeWeight(3);
    triangle(175, 350, 260, 100, 350, 350);
    fill(0, 255, 0);

    noStroke();

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
}

