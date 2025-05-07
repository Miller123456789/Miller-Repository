//Title: Meteor Shower
//Name: Miller Anderson
//Notes: This is a Meteor shower, press N to see the night and the shower, press R to reset.

let isNight = false;
let meteors = [];
let humans = [];
let stars = [];

let lastMeteorTime = 0; // To track the time when meteors were last generated
let meteorInterval = 200; // Time in milliseconds between meteor generations

function setup() {
  createCanvas(800, 400);

  // Create humans
  for (let i = 0; i < 5; i++) {
    humans.push({ x: random(width), y: height - 40, speed: random(0.5, 1.2) });
  }

  // Generate stars (across the whole canvas)
  for (let i = 0; i < 300; i++) {
    stars.push({ x: random(width), y: random(height) });
  }
}

function draw() { // draws day and night sky
  background(isNight ? 10 : skyBlue());

  if (isNight) {
    drawStars();
    handleMeteors();
  } else {
    drawSun();
    drawClouds();
  }

  drawGround();
  drawCacti();
  drawHumans();
  drawTitleAndInstructions();
}

function skyBlue() {
  return color(135, 206, 235);
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 80);
}

function drawClouds() {
  fill(255);
  noStroke();
  ellipse(150, 100, 60);
  ellipse(180, 90, 70);
  ellipse(210, 100, 60);

  ellipse(500, 120, 50);
  ellipse(530, 110, 60);
  ellipse(560, 120, 50);
}

function drawStars() {
  fill(255);
  noStroke();
  for (let s of stars) {
    ellipse(s.x, s.y, 2, 2); // static stars filling the sky
  }
}

function handleMeteors() {
  let currentTime = millis(); // Get the current time in milliseconds

  // If enough time has passed, generate a new meteor
  if (currentTime - lastMeteorTime > meteorInterval) {
    meteors.push({ x: random(width), y: 0, speedX: 5, speedY: 5 });
    lastMeteorTime = currentTime; // Update the last meteor generation time
  }

  fill(255, 150, 0);
  noStroke();
  for (let m of meteors) {
    ellipse(m.x, m.y, 10, 10); // circular meteor
    m.x += m.speedX;
    m.y += m.speedY;
  }

  meteors = meteors.filter(m => m.y < height);
}

function drawGround() {
  noStroke();
  fill(237, 201, 175);
  rect(0, height - 50, width, 50);
}

function drawCacti() {
  fill(34, 139, 34);
  noStroke();

  // Simple cacti with arms
  drawCactus(100, height - 90);
  drawCactus(300, height - 100);
  drawCactus(500, height - 95);
}

function drawCactus(x, y) {
  rect(x, y, 10, 50); // main stem
  rect(x - 10, y + 10, 10, 5); // left arm
  rect(x + 10, y + 20, 10, 5); // right arm
}

function drawHumans() {
  fill(0, 0, 255); // Blue humans
  for (let h of humans) {
    ellipse(h.x, h.y, 10, 20); // body
    ellipse(h.x, h.y - 15, 10, 10); // head
    h.x += h.speed;
    if (h.x > width) h.x = 0;
  }
}

function drawTitleAndInstructions() {
  fill(0);
  textSize(24);
  text("Meteor Shower", 20, 30);

  textSize(12);
  text("By Miller Anderson", 20, 50);
  text("Press 'N' for Night Mode (Meteor Shower)", 20, 70);
  text("Press 'R' to Reset to Day Mode", 20, 90);
}

function keyPressed() {
  if (key === 'N' || key === 'n') {
    isNight = true;
    meteors = [];
  } else if (key === 'R' || key === 'r') {
    isNight = false;
    meteors = [];
  }
}
