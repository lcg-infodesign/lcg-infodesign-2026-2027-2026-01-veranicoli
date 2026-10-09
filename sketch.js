let xMax = 450;
let yMax = 600;
let xbarca = xMax/2;
let ybarca = yMax*0.70;
let direzione = 1;

function preload() {
  // put preload code here
}

function setup() {
  console.log('p5.js version:', p5.VERSION);
  createCanvas(xMax, yMax);
}

function draw() {
  background(170, 220, 255);

push(); //generazione casuale nuvole
  randomSeed(99) //imposto il seme di generazione dei numeri random
  noStroke(); 
  for(let i=0; i<16; i++){
   let sx = random(width);
   let sy = random(height);
   fill(255, 255, 255);
  ellipse(sx-50, sy+60, random(70, 150), random(20, 30));
  }
pop();


push();
  //mare
  fill(0, 58, 159);
  strokeWeight(0);
  
  rectMode(CENTER);
  rect(xMax/2, yMax-60, xMax, 140);

  //corpo centrale barca
  fill(255, 69, 0);
  strokeWeight(0);
  rectMode(CENTER);
  rect(xbarca, ybarca + 40, 165, 80);

  //vela 1
  fill(255, 239, 0);
  triangle(xbarca, ybarca, xbarca-110, ybarca-35, xbarca, ybarca-250);

  //vela 2
  fill(255, 255, 102);
  triangle(xbarca, ybarca, xbarca, ybarca-250, xbarca+80, ybarca-60);

  //barca (parti laterali)
  fill(255, 127, 80);
  strokeWeight(0);
  triangle(xbarca-165, ybarca, xbarca-82, ybarca, xbarca-82, ybarca+80); //sx
  triangle(xbarca+165, ybarca, xbarca+82, ybarca, xbarca+82, ybarca+80); //dx
pop();

  //movimento barca con ciclo if...else
push();
  if (xbarca > xMax + 180) {
   direzione = -1;
  } else if (xbarca < -180) {
   direzione = 1;
  }

  xbarca = xbarca + direzione * 2;
pop();

}
