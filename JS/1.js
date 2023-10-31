// ball variables
let ballX = 50;
let ballY = 50;
let ballD = 50;
let ballXSpeed = 4; //changes motion
let ballYSpeed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let lb = color('#b7e5f7');
  background(lb);

  drawRect();

  drawPPB();
}

function drawRect() {
// drawing shape
  rectFill();
  rectMode(CORNERS);
  rect(mouseX, mouseY, windowWidth/2, windowHeight/2);
}

function rectFill() {
// changing shape fill & stroke depending on mouseX/mouseY coordinates
  if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
    fill(0, 60); stroke(255);
  } else if(mouseX > windowWidth/2 && mouseY < windowHeight/2) {
    fill(255, 70); stroke(0);
  } else if(mouseX < windowWidth/2 && mouseY > windowHeight/2) {
    fill(255, 70); stroke(0);
  } else if(mouseX > windowWidth/2 && mouseY > windowHeight/2) {
    fill(0, 60); stroke(255);
  }
}

function drawPPB() { 
// this is a ping pong ball
  stroke(0, 70);
  strokeWeight(1);
  fill(255);
  ellipse(ballX, ballY, ballD);
  
        ballX += ballXSpeed;
      if (ballX < ballD/2 || ballX > windowWidth - ballD/2) {
        ballXSpeed *= -1;
      }
        ballY += ballYSpeed;
      if (ballY < ballD/2 || ballY > windowHeight - ballD/2) {
        ballYSpeed *= -1;
      }
}