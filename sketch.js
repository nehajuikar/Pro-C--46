var thiefImg , tom ,  cone , box , backGroundImg ;


function preload(){
  backGroundImg = loadImage("roadImg.jpg");
  thiefImg = loadImage("Bank Robber.jpg");
  coneImg = loadImage("cone2.png");
  boxImg = loadImage("Box.jpg");
  tomImg = loadImage("Tom.png");
}

function setup() {
  createCanvas(400,600);
  bg = createSprite(200,300,400,600);
  bg.addImage(backGroundImg);
  bg.scale = 1.3;

  thief = createSprite(200, 300, 0, 0);
  thief.addImage(thiefImg);
  thief.scale = 0.3;

  tom = createSprite(200,500,50,50);
  tom.addImage(tomImg);
  tom.scale = 0.1;

  cone = createSprite(200,400,50,50);
  cone.addImage(coneImg);
  cone.scale = 0.1;

  box = createSprite(200,100,50,50);
  box.addImage(boxImg);
  box.scale = 0.2;

  
}

function draw() {
  background(0); 

  bg.velocityY = 1.5;
  if(bg.y>300 ){
    bg.y = 270;
  }
  drawSprites();
}