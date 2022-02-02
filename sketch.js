function setup() { 
    createCanvas(windowWidth, windowHeight);
    noStroke();
  } 
  
  function draw() { 
    background(220);
      fill(random(128,255),random(128,255),random(128,255));  
    rect(0,0,300,300);
      fill(random(0,128),random(0,128),random(0,128));  
    rect(300,0,300,300);
    fill(random(128,255),random(128,255),random(128,255));  
      rect(100,100,100,100);
      rect(400,100,100,100);
    noLoop();
  }