let treeColor, bgColor, appleColor;
let cloudX = 0;
let cloudSpeed = 2;
let cloudSize = 100;
let cloudColor;

let duplicatedTrees = []; // Store duplicated tree positions

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0);
  bgColor = color(250, 200, 25);
  appleColor = color('Red');
  cloudColor = color(255);
  textSize(16);
  textAlign(LEFT, TOP);
  fill(255);
  noStroke();
}

function draw() {
  background(bgColor);

  // Draw instructions
  fill(255);
  text("Click to change color of cloud and duplicate tree", 10, 10);
  text("Press R to reset", 10, 30);

  // Draw main tree at fixed position
  drawTree(250, 350);

  // Draw all duplicated trees
  for (let t of duplicatedTrees) {
    drawTree(t.x, t.y);
  }

  // Draw the cloud
  fill(cloudColor);
  noStroke();
  ellipse(cloudX, 100, cloudSize, cloudSize / 2);

  // Move the cloud
  cloudX += cloudSpeed;

  if (cloudX > width + cloudSize / 2 || cloudX < -cloudSize / 2) {
    cloudSpeed *= -1;
  }

  cloudSize += 0.1;
}

function drawTree(x, y) {
  fill(treeColor);
  stroke(treeColor);
  strokeWeight(4);
  rect(x, y, 25, 70);

  noStroke();
  fill('Green');
  stroke('Green');
  strokeWeight(3);
  triangle(x - 75, y, x + 10, y - 250, x + 100, y);

  noStroke();
  fill(appleColor);
  stroke(appleColor);
  strokeWeight(2);
  circle(x - 20, y - 100, 20);
  circle(x + 50, y - 35, 20);
  circle(x + 10, y - 170, 20);
  circle(x + 40, y - 120, 20);
  circle(x + 5, y - 60, 20);
  circle(x - 40, y - 30, 20);
}

function mousePressed() {
  // Change cloud color randomly
  cloudColor = color(random(255), random(255), random(255));

  // Add the current mouse position to the duplicatedTrees array
  duplicatedTrees.push({ x: mouseX, y: mouseY });
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // Reset duplicated trees
    duplicatedTrees = [];

    // Reset cloud size and position
    cloudSize = 100;
    cloudX = 0;

    // Reset cloud color to white
    cloudColor = color(255);
  }
}
