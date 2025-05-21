// Title: Meteor Shower
// Name: Miller Anderson
// Notes: This is a Meteor shower, press N to see the night and the shower, press R to reset.

let isNight = false;
let meteors = [];
let humans = [];
let stars = [];
let birds = [];

let lastMeteorTime = 0;
let meteorInterval = 200;

let sunY = 80; // Initial Y position of the sun
let sunOpacity = 255; // Initial opacity of the sun

let targetSunY = sunY; // Target position for the sun when transitioning
let targetSunOpacity = sunOpacity; // Target opacity for the sun

let transitionSpeed = 0.05; // Speed of sun transition

let clouds = []; // Array to store cloud positions

function setup() {
  createCanvas(800, 400);

  // Create humans 
  for (let i = 0; i < 5; i++) {
    let skinColor;
    if (random() < 0.5) {
      skinColor = color(255, 224, 189);
    } else {
      skinColor = color(139, 69, 19);
    }
    humans.push({ x: random(width), y: height - 40, speed: random(0.5, 1.2), skin: skinColor });
  }

  // Generate stars
  for (let i = 0; i < 300; i++) {
    stars.push({ x: random(width), y: random(height) });
  }

  // Create birds
  for (let i = 0; i < 5; i++) {
    birds.push({ x: random(width), y: random(50, 150), speed: random(1, 2) });
  }
}

function draw() {
  if (isNight) {
    background(10);
    handleSunTransition(false); // Fade out the sun when it's night
  } else {
    background(skyBlue());
    handleSunTransition(true); // Fade in the sun when it's day
  }

  if (isNight) {
    drawStars();
    drawMoon();
    handleMeteors();
  } else {
    drawSun();
    drawClouds(); // Draw clouds at default and clicked positions
    drawBirds();
  }

  drawGround();
  drawCacti();
  drawHumans();
  drawTitleAndInstructions();
}

function skyBlue() {
  return color(135, 206, 235);
}

function handleSunTransition(comingDay) {
  if (comingDay) {
    // Transition back to day, move sun down and fade in
    targetSunY = 80;
    sunOpacity = 255;
  } else {
    // Transition to night, move sun up and fade out
    targetSunY = -100;
    sunOpacity = 0;
  }

  // Smooth transition of sun position and opacity
  sunY = lerp(sunY, targetSunY, transitionSpeed);
  fill(255, 204, 0, sunOpacity);
  noStroke();
  ellipse(700, sunY, 80);
}

function drawSun() {
  fill(255, 204, 0, sunOpacity); // Use sunOpacity to control fading
  noStroke();
  ellipse(700, sunY, 80);
}

function drawMoon() {
  fill(200);
  noStroke();
  ellipse(700, 80, 60); // moon 

  fill(150); // Craters
  ellipse(685, 70, 10);
  ellipse(710, 85, 6);
  ellipse(695, 90, 8);
}

function drawClouds() {
  fill(255);
  noStroke();
  
  // Draw original clouds
  ellipse(150, 100, 60);
  ellipse(180, 90, 70);
  ellipse(210, 100, 60);

  ellipse(500, 120, 50);
  ellipse(530, 110, 60);
  ellipse(560, 120, 50);

  // Draw clouds where the user clicked
  for (let cloud of clouds) {
    ellipse(cloud.x, cloud.y, 60);
    ellipse(cloud.x + 30, cloud.y - 10, 70);
    ellipse(cloud.x + 60, cloud.y, 60);
  }
}

function handleMeteors() {
  let currentTime = millis();

  if (currentTime - lastMeteorTime > meteorInterval) {
    meteors.push({ x: random(width), y: 0, speedX: 5, speedY: 5 });
    lastMeteorTime = currentTime;
  }

  fill(255, 150, 0);
  noStroke();
  for (let m of meteors) {
    ellipse(m.x, m.y, 10, 10);
    m.x += m.speedX;
    m.y += m.speedY;
  }
}

function drawGround() {
  noStroke();
  fill(210, 180, 140); // sand color
  rect(0, height - 50, width, 50);
}

function drawCacti() {
  fill(34, 139, 34);
  noStroke();
  drawCactus(100, height - 90);
  drawCactus(300, height - 100);
  drawCactus(500, height - 95);
}

function drawCactus(x, y) {
  rect(x, y, 10, 50);
  rect(x - 10, y + 10, 10, 5);
  rect(x + 10, y + 20, 10, 5);
}

function drawHumans() {
  for (let h of humans) {
    fill(h.skin);
    ellipse(h.x, h.y - 15, 10, 10); // head
    ellipse(h.x, h.y, 10, 20);      // body

    if (isNight === false) {
      h.x -= h.speed;  // Change the movement direction to the left
      if (h.x < 0) h.x = width;  // Wrap around to the right when they go off-screen
    }
  }
}

function drawBirds() {
  stroke(60);
  strokeWeight(3); 
  noFill();

  for (let b of birds) {
    line(b.x - 12, b.y - 10, b.x, b.y); // left wing
    line(b.x, b.y, b.x + 12, b.y - 10); // right wing

    b.x += b.speed;
    if (b.x > width + 20) b.x = -40;
  }

  noStroke(); // reset stroke settings
}

function drawTitleAndInstructions() {
  fill(0);
  textSize(24);
  text("Meteor Shower", 20, 30);

  textSize(12);
  text("By Miller Anderson", 20, 50);
  text("Press 'N' for Night Mode (Meteor Shower)", 20, 70);
  text("Press 'R' to Reset to Day Mode", 20, 90);
  text("Click to create a new cloud", 20, 110);  // Updated instruction
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

// add clouds
function mousePressed() {
  if (!isNight) {
    // Add a cloud at the mouse position when clicked
    clouds.push({ x: mouseX, y: mouseY });
  }
}
