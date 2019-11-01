var canvas = document.getElementById("canvasOne");
var context = canvas.getContext("2d");
var slider = document.getElementById("slider");
var speed = document.getElementById("speed");

const frate = 20;       // frame rate
var zer = [canvas.width / 2.0, canvas.height / 2.0];      // setting origin
var r = 5;                                            // radius of dots
var lastVal;      // check variable for detecting changes in vertices
var lst;          // variable for storing return value of drawTriangle function
var dice;         // value of dice roll
var coords;       // coordinates of randomly chosen vertex
var n = 0;        // number of dots displayed on canvas

// initial coordinates
var x = ranInt(0, canvas.width);
var y = ranInt(0, canvas.height);


function ranInt(minval, maxval) {
  return Math.floor((maxval - minval) * Math.random()) + minval;
}

function drawBall(x, y, r, c) {
  context.beginPath();
  context.arc(x, y - r, r, 0, 2 * Math.PI);
  context.fillStyle = c
  context.fill();
}

function drawTriangle() {
  n = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  l = Number(slider.value);
  lastVal = l;
  height = Math.sqrt(Math.pow(l, 2) - (Math.pow(l, 2) / 4))
  x1 = zer[0];
  y1 = zer[1] - height/2.0;
  x2 = zer[0] - l/2.0;
  y2 = zer[1] + height/2.0;
  x3 = zer[0] + l/2.0;
  y3 = zer[1] + height/2.0;

  drawBall(x1, y1, 5, 'black');  // top vertex
  drawBall(x2, y2, 5, 'black');   // bottom left vertex
  drawBall(x3, y3, 5, 'black');   // bottom right vertex
  return [x1, y1, x2, y2, x3, y3];
}

function drawBalls() {
  if (Number(slider.value) != lastVal){
    lst = drawTriangle();
  }

  dice = ranInt(0, 3);

  if (dice == 0) {
    coords = [lst[0], lst[1]];
  }
  else if (dice == 1) {
    coords = [lst[2], lst[3]];
  }
  else if (dice == 2) {
    coords = [lst[4], lst[5]];
  }
  x = (coords[0] + x) / 2.0;
  y = (coords[1] + y) / 2.0;
  drawBall(x, y, 1, 'blue');
  document.getElementById("n").innerHTML = n;
  n++;
  window.setTimeout(drawBalls, 1000/(Number(speed.value)));
}

lst = drawTriangle();     // draw initial triangle and return vertices
drawBalls();              // start simulation
