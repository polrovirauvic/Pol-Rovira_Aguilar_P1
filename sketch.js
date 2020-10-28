//defining the 4 color global variables:
  let red=0;
  let yellow=0;
  let blue=0;
  let black=0;

//funcion that sets up the canvas:
function setup() {
  //create canvas (size-x, size-y):
  createCanvas(600, 900);
  
  //polygon opacity to show figures slowly:
  redOp=0;
  yellowOp=0;
  blueOp=0;
  blackOp=0;
  
  //background color (rgb):
  background(238, 236, 237);
  
  //giving value to the 4 color variables and assigning opacity:
  red=color(217,54,40,redOp);
  yellow=color(247,190,41,yellowOp);
  blue=color(0,106,179,blueOp);
  black=color(0,0,0,blackOp);
}

//function that draws in the canvas:
function draw() {
  //Properties:    
  //stroke:
  noStroke();
  
  //defining red polygons:
  fill(red);
  rect(187.5, 360, 82.5, 82.5);
  rect(315, 442.5, 82.5, 127.5);
  triangle(105, 232.5, 187.5,150, 187.5, 232.5);
  triangle(315, 570, 315, 652.5, 397.5, 570);
  
  //defining yellow polygons:
  fill(yellow);
  rect(187.5, 105, 82.5, 127.5);
  rect(270, 442.5, 45, 82.5);
  rect(105, 652.5, 82.5, 127.5);
  rect(315, 150, 82.5, 82.5);
  rect(270, 652.5, 45, 82.5);
  triangle(187.5, 105, 270, 22.5, 270, 105);
  triangle(315, 442.5, 397.5, 360, 397.5, 442.5);
  triangle(480, 442.5, 397.5, 525, 397.5, 442.5);
  triangle(105, 780, 105, 862.5, 187.5, 780);
  
  //defining blue polygons:
  fill(blue);
  rect(105, 232.5, 82.5, 127.5);
  rect(187.5, 442.5, 82.5, 82.5);
  rect(270, 360, 45, 82.5);
  rect(397.5, 315, 82.5, 45);
  rect(270, 105, 45, 82.5);
  triangle(105, 360, 105, 442.5, 187.5, 360);
  triangle(187.5, 652.5, 187.5, 735, 270, 652.5);
  
  //defining yellow polygons:
  fill(black);
  rect(187.5, 232.5, 127.5, 127.5);  
  rect(270, 525, 45, 45);
  rect(397.5, 360, 82.5, 82.5);
  triangle(187.5, 652.5, 187.5, 570, 105, 652.5);
  
  //defining the text:
  fill(90);
  textSize(10);
  strokeWeight(0);
  text("omagio all'Ollanda per", 350, 705);
  text('Jacobus J. Gud', 350, 727); 
  text('Vincent Van Gogh', 350, 738); 
  text('i tulipani', 350, 748.5); 
  text('Piet Mondrian', 350, 759);
  text('Theo Van Doemburg', 350, 769.5);
  text('il formaggio di Gouda', 350, 780); 
  text('Willem De Kooning', 350, 790);
  text('Jan e Hubert Van Eyck', 350, 801);
  text('i mulini a vento', 350, 811);
  text('Gerrit Th. Rietveld', 350, 822);
  text('Hyeronimus Bosch', 350, 832);
  text('eccetera', 350, 843);
  
  //Randomizing polygon drawing:
  //if the frameCount % variable randomized between 20 and 50 equals 0:
  if (frameCount % int(random(10,30)) == 0) {
    
    //we define the array to pick the colors at random:
    let colors = ["red", "yellow", "blue", "black"];
    let randomColor = random(colors);
    
    //if the randomColor variable is red:
    if (randomColor=="red"){
      if (frameCount % 2 == 0) {
        redOp+=5;
        red=color(217,54,40,redOp);
      }
      
    //if the randomColor variable is yellow:
    } else if (randomColor=="yellow"){
      if (frameCount % 2 == 0) {
        yellowOp+=5;
        yellow=color(247,190,41,yellowOp);
      }
      
    //if the randomColor variable is blue:
    }else if (randomColor=="blue"){
      //apareixen els formes vermelles
      if (frameCount % 2 == 0) {
        blueOp+=5;
        blue=color(0,106,179,blueOp);
      }
      
    //if the randomColor variable is neither of those (it is black):
    }else{
      if (frameCount % 2 == 0) {
        blackOp+=5;
        black=color(0,0,0,blackOp);
      }
    }
  }
  
  //We will use the colorOp (opacity) as a sentinel to determine if the color appeared:
  if (redOp >= 5 && yellowOp >= 5 && blueOp >= 5 && blackOp >= 5){
    if (frameCount % 60 == 0) {
      
      //if all colors are displayed, randomize them:
      red = color(random(255), random(255), random(255), redOp);
      yellow = color(random(255), random(255), random(255), yellowOp);
      blue = color(random(255), random(255), random(255), blueOp);
      black = color(random(255), random(255), random(255), blackOp);
      
    }
  } 
}

//mousepressed() and deviceShaken() functions randomize the colors, which slowly go back to the original state (red, yellow, blue and black)
function mousePressed() {
  background(238, 236, 237);
  red = color(random(255), random(255), random(255), redOp);
  yellow = color(random(255), random(255), random(255), yellowOp);
  blue = color(random(255), random(255), random(255), blueOp);
  black = color(random(255), random(255), random(255), blackOp);
}

function deviceShaken() {
  background(238, 236, 237);
  red = color(random(255), random(255), random(255), redOp);
  yellow = color(random(255), random(255), random(255), yellowOp);
  blue = color(random(255), random(255), random(255), blueOp);
  black = color(random(255), random(255), random(255), blackOp);
}