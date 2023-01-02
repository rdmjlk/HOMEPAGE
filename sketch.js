let img;
let canvas;
let work = [];
let x = 1;
let y = 1;
let easing = 0.1; // delay ove rmouse movement where image follows
let idx = 0;

function preload(){
  for (let i = 0; i < 4; i++){
    work[i] = loadImage('Media/Works/Photos/duuni' + i + '.jpg');
  }
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(0);
    idx = round(random(0,2)); // select random work

}

function draw() {
 
let targetX = mouseX; 
let dx = targetX - x;
x += dx * easing;
scale(1,1);

let targetY = mouseY;
let  dy = targetY - y;
y += dy * easing;
  imageMode(CENTER);
  image(work[idx],x,y,width/2,height/2);
  
}

function mousePressed(){ // Selects new image from array of works
  background(0);
  idx = (idx+1) % 4;
}

function windowResized(winndowWidth,windowHeight){
  resizeCanvas(windowWidth,windowHeight);
}