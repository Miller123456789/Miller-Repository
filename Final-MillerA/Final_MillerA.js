// Title: Meteor Shower
// Name: Miller Anderson
// Notes: This is a Meteor shower, press N to see the night and the shower, press R to reset.
// also to add cloud mouse press

let isNight = false;
let meteors = [];
let humans = [];
let stars = [];
let birds = [];
let clouds = [];

let lastMeteorTime = 0;
let meteorInterval = 200;

function setup() {
  createCanvas(800, 400);

  // humans
  for (let i = 0; i < 5; i++) {
    let skinColor;
    if (random() < 0.5) {
      skinColor = color(255, 224, 189);
    } else {
      skinColor = color(139, 69, 19);
    }
    humans.push({
      x: random(width),
      y: height - 40,
      speed: random(0.5, 1.2),
      skin: skinColor
    });
  }

  // stars
  for (let i = 0; i < 300; i++) {
    stars.push({ x: random(width), y: random(height) });
  }

  // birds
  for (let i = 0; i < 5; i++) {
    birds.push({ x: random(width), y: random(50, 150), speed: random(1, 2) });
  }

  // clouds
  clouds.push({ x: 180, y: 95 });
  clouds.push({ x: 530, y: 115 });
}

function draw() {
  if (isNight === true) {
    background(10);
    drawStars();
    drawMoon();
    handleMeteors();
  } else {
    background(skyBlue());
    drawSun();
    drawClouds();
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

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 80);
}

function drawMoon() {
  fill(200);
  noStroke();
  ellipse(700, 80, 60);

  fill(150);
  ellipse(685, 70, 10);
  ellipse(710, 85, 6);
  ellipse(695, 90, 8);
}

function drawClouds() {
  fill(255);
  noStroke();
  for (let c of clouds) {
    ellipse(c.x - 30, c.y, 60);
    ellipse(c.x, c.y - 10, 70);
    ellipse(c.x + 30, c.y, 60);
  }
}

function drawStars() {
  fill(255);
  noStroke();
  for (let s of stars) {
    ellipse(s.x, s.y, 2, 2);
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
  fill(210, 180, 140);
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
      h.x += h.speed;
      if (h.x > width) {
        h.x = 0;
      }
    }
  }
}

function drawBirds() {
  stroke(60);
  strokeWeight(3);
  noFill();

  for (let b of birds) {
    line(b.x - 12, b.y - 10, b.x, b.y);
    line(b.x, b.y, b.x + 12, b.y - 10);
    b.x += b.speed;
    if (b.x > width + 20) {
      b.x = -40;
    }
  }

  noStroke(); // reset stroke
}

function drawTitleAndInstructions() {
  fill(0);
  textSize(24);
  text("Meteor Shower", 20, 30);

  textSize(12);
  text("By Miller Anderson", 20, 50);
  text("Press 'N' for Night Mode (Meteor Shower)", 20, 70);
  text("Press 'R' to Reset to Day Mode", 20, 90);
  text("Click to add a cloud", 20, 110);
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

function mousePressed() {
  if (isNight === false) {
    clouds.push({ x: mouseX, y: mouseY });
  }
}
