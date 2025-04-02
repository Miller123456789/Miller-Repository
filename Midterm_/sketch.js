// Miller A
// Title: Cloudy Apple Tree Day
// I will be continuing to try my best at coding, for this the player will be clicking the mouse to change the colors and make a random new clouds, along with being able to press Q to restart, and R to make it rain 

let treeColor, bgColor, appleColor;
let cloudX1 = 0, cloudY1 = 100, cloudSpeed1 = 2;  // First cloud
let cloudX2 = -200, cloudY2 = 150, cloudSpeed2 = 2; // Second cloud
let cloudX3 = -400, cloudY3 = 120, cloudSpeed3 = 2; // Third cloud

// Rain variables
let rainX1, rainY1, rainSpeed1;
let rainX2, rainY2, rainSpeed2;
let rainX3, rainY3, rainSpeed3;
let rainX4, rainY4, rainSpeed4;
let rainX5, rainY5, rainSpeed5;
let rainX6, rainY6, rainSpeed6;
let rainX7, rainY7, rainSpeed7;

let cloudColor;  // Variable to store cloud color
let Rainy = false; // to track if rainy or not

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0); // Brown for the tree
  bgColor = color(25, 20, 250);  // Blue for the background
  appleColor = color('Red');     // Red for the apples
  cloudColor = color(255);       // Clouds start as white

  // raindrops
  rainX1 = random(width); rainY1 = random(-500, -50); rainSpeed1 = random(4, 8);
  rainX2 = random(width); rainY2 = random(-500, -50); rainSpeed2 = random(4, 8);
  rainX3 = random(width); rainY3 = random(-500, -50); rainSpeed3 = random(4, 8);
  rainX4 = random(width); rainY4 = random(-500, -50); rainSpeed4 = random(4, 8);
  rainX5 = random(width); rainY5 = random(-500, -50); rainSpeed5 = random(4, 8);
  rainX6 = random(width); rainY6 = random(-500, -50); rainSpeed6 = random(4, 8);
  rainX7 = random(width); rainY7 = random(-500, -50); rainSpeed7 = random(4, 8);

  background(bgColor); // Set the initial background color

  drawTree();  // Draw the tree 
}

function draw() {
  // Clear the background and redraw
  background(bgColor);

  // Redraw tree and apples
  drawTree();

  // Draw and move the first cloud
  fill(cloudColor);
  noStroke();
  ellipse(cloudX1, cloudY1, 65, 40);
  ellipse(cloudX1, cloudY1 - 20, 65, 40);
  ellipse(cloudX1 - 30, cloudY1, 65, 40);
  ellipse(cloudX1 + 30, cloudY1, 65, 40);
  cloudX1 += cloudSpeed1;

  
  if (Rainy === false) {
    // Draw the sun if it's not raining
    fill(255, 204, 0); // color for the sun
    noStroke();
    ellipse(width - 50, 50, 80, 80); 
  }

  // Reverse direction when the first cloud reaches the edges
  if (cloudX1 > width + 40 || cloudX1 < -40) {
    cloudSpeed1 *= -1;
  }

  // Draw and move the second cloud
  fill(cloudColor);
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
  fill(cloudColor);
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

  // Draw the raindrops if they are activated
  if (Rainy) { // Check if it's raining
    fill(0, 0, 255); // Blue color for rain
    noStroke();

    // Raindrop 1
    ellipse(rainX1, rainY1, 5, 10);
    rainY1 += rainSpeed1;
    if (rainY1 > height) rainY1 = random(-500, -50); // Reset to top

    // Raindrop 2
    ellipse(rainX2, rainY2, 5, 10);
    rainY2 += rainSpeed2;
    if (rainY2 > height) rainY2 = random(-500, -50); // Reset to top

    // Raindrop 3
    ellipse(rainX3, rainY3, 5, 10);
    rainY3 += rainSpeed3;
    if (rainY3 > height) rainY3 = random(-500, -50); // Reset to top

    // Raindrop 4
    ellipse(rainX4, rainY4, 5, 10);
    rainY4 += rainSpeed4;
    if (rainY4 > height) rainY4 = random(-500, -50); // Reset to top

    // Raindrop 5
    ellipse(rainX5, rainY5, 5, 10);
    rainY5 += rainSpeed5;
    if (rainY5 > height) rainY5 = random(-500, -50); // Reset to top

    // Raindrop 6
    ellipse(rainX6, rainY6, 5, 10);
    rainY6 += rainSpeed6;
    if (rainY6 > height) rainY6 = random(-500, -50); // Reset to top

    // Raindrop 7
    ellipse(rainX7, rainY7, 5, 10);
    rainY7 += rainSpeed7;
    if (rainY7 > height) rainY7 = random(-500, -50); // Reset to top
  }

  // Display the instructions text box
  drawTextBox();
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

    // Reset raindrops
    rainX1 = random(width); rainY1 = random(-500, -50); rainSpeed1 = random(4, 8);
    rainX2 = random(width); rainY2 = random(-500, -50); rainSpeed2 = random(4, 8);
    rainX3 = random(width); rainY3 = random(-500, -50); rainSpeed3 = random(4, 8);
    rainX4 = random(width); rainY4 = random(-500, -50); rainSpeed4 = random(4, 8);
    rainX5 = random(width); rainY5 = random(-500, -50); rainSpeed5 = random(4, 8);
    rainX6 = random(width); rainY6 = random(-500, -50); rainSpeed6 = random(4, 8);
    rainX7 = random(width); rainY7 = random(-500, -50); rainSpeed7 = random(4, 8);

    // Redraw everything
    background(bgColor);
    drawTree();
  }

  if (key === 'R' || key === 'r') {
    if (Rainy === false) {
      Rainy = true; // it will rain
      cloudColor = color(169); // Change cloud color to grey (rainy)
    } else {
      Rainy = false; // now it will stop
      cloudColor = color(255); // Change cloud color to white (sunny)
    }
  }
}  

function drawTree() {
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
}

function drawTextBox() {
  // Draw the background for the text box
  fill(255, 255, 255, 200); // Semi-transparent white box
  noStroke();
  rect(20, height - 100, width - 40, 80, 10); // Box at the bottom of the canvas

  // Draw the instructions text
  fill(0); // Black text color
  textSize(14);
  textAlign(LEFT, TOP);
  text("Click Mouse to change color and add cloud.", 30, height - 90);
  text("Press R to make it rain and the sun go away.", 30, height - 70);
  text("Press Q for reset", 30, height - 50);
}
