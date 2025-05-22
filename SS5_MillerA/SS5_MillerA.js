//Title: Apple Tree
//Author: Miller Anderson
// Click to change cloud direction, the cloud size resets after 5 seconds and the background color also changes after 5 seconds.


let treeColor, appleColor;
let bgColor;
let cloudX = 0;
let cloudSpeed = 2;
let cloudSize = 100;
let originalCloudSize = 100;
let lastCloudResetTime = 0;
let nextBgChange = 5000; // When to change background next

function setup() {
  createCanvas(500, 500);

  treeColor = color(150, 75, 0);
  appleColor = color('Red');
  bgColor = color(25, 20, 250); // background color

  lastCloudResetTime = millis();
}

function draw() {
  // Change background color after 10 seconds 
  if (millis() > nextBgChange) {
    bgColor = color(random(255), random(255), random(255));
    nextBgChange = millis() + 5000; // Schedule the next change in 10 seconds
  }

  background(bgColor);

  // Draw tree trunk
  fill(treeColor);
  stroke(treeColor);
  strokeWeight(4);
  rect(250, 350, 25, 70);

  // Draw tree leaves
  noStroke();
  fill('Green');
  triangle(175, 350, 260, 100, 350, 350);
  fill(0, 255, 0);

  // Draw apples
  fill(appleColor);
  stroke(appleColor);
  strokeWeight(2);
  circle(230, 250, 20);
  circle(300, 315, 20);
  circle(260, 180, 20);
  circle(290, 230, 20);
  circle(255, 290, 20);
  circle(210, 320, 20);

  // Draw cloud 
  fill(255);
  noStroke();
  ellipse(cloudX, 100, cloudSize, cloudSize / 2);

  cloudX += cloudSpeed;

  if (cloudX > width + cloudSize / 2 || cloudX < -cloudSize / 2) {
    cloudSpeed *= -1;
  }

  cloudSize += 0.5;

  // Reset cloud size every 10 seconds
  if (millis() - lastCloudResetTime >= 5000) {
    cloudSize = originalCloudSize;
    lastCloudResetTime = millis();
  }

  //  Add instructions in top-right corner
  //  and background rectangle 
fill(255);
noStroke();
rect(width - 240, 10, 230, 65, 10); // 

fill(0);
textSize(12);
text("Click to change cloud direction.", width - 230, 30);
text("Cloud resets every 5 sec.", width - 230, 50);
text("Background changes every 5 sec.", width - 230, 70);

}

function mousePressed() {
  cloudSpeed *= -1;
}
