// Miller A
// Title: Cloudy Apple Tree Day
// I will be continuing to try my best at coding, for this the player will be clicking the mouse to change the colors and make a random new cloud, along with being able to press Q to restart the drawing without refreshing. 

let treeColor, bgColor, appleColor;
let cloudX = 0;  // Starting x position of the cloud
let cloudSpeed = 2; // Speed at which the cloud moves
let clouds = []; // Array to store multiple clouds

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0); // Brown for the tree
  bgColor = color(25, 20, 250);  // Blue for the background
  appleColor = color('Red');     // Red for the apples

  background(bgColor); //background color

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

  // Draw and move all clouds
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    
    fill(255);
    noStroke();
    ellipse(cloud.x, cloud.y, 65, 40);
    ellipse(cloud.x, cloud.y - 20, 65, 40);
    ellipse(cloud.x - 30, cloud.y, 65, 40);
    ellipse(cloud.x + 30, cloud.y, 65, 40);
    
    cloud.x += cloud.speed;
    
    // Reverse direction when cloud reaches the edges
    if (cloud.x > width + 40 || cloud.x < -40) {
      cloud.speed *= -1;
    }
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

  // Add a new cloud at a random position
  let newCloud = {
    x: random(width),
    y: random(50, 150),
    speed: cloudSpeed
  };
  clouds.push(newCloud);
}

function keyPressed() {
  // Reset everything when the 'Q' key is pressed
  if (key === 'Q' || key === 'q') {
    // Reset variables
    treeColor = color(150, 75, 0); // Brown for the tree
    bgColor = color(25, 20, 250);  // Blue for the background
    appleColor = color('Red');     // Red for the apples
    cloudX = 0;  // Starting x position of the cloud
    cloudSpeed = 2; // Speed at which the cloud moves
    clouds = []; // Clear clouds array

    // Redraw everything
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
}
