//creating variables
  
var path, boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
  
//Game States
  
var PLAY = 1;
var END = 0;
var gameState = 1;
  
function preload(){
  
  //loading images in variables
  
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  
} 
  
function setup(){
  
  //creating canvas and adjusting it upon the screen size
  
  createCanvas(windowWidth, windowHeight);
  
  // Moving background
  
  path=createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  //creating boy running
  
  boy = createSprite(width/2, height-20, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.08;
  
  //creating groups
  
  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();
  
} 
  
function draw() {
  
  if(gameState===PLAY){
    
    //setting background color
    
    background(0);
    
    //moving boy according to mouse movements
    
    boy.x = World.mouseX;
    
    //creating edges and colliding it with boy 
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //code to reset the background
    
    if(path.y > height ){
      
      path.y = height/2;
      
    }
    
    //run these functions
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
    //vinishing the objects when collided with the boy
    
    if(cashG.isTouching(boy)) {
      
      cashG.destroyEach();
      treasureCollection = treasureCollection+50;
      
    }
    else if(diamondsG.isTouching(boy)) {
      
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 150;
      
    }else{
      
      if(swordGroup.isTouching(boy)) {
        
        //making game end when the sword touches the boy
        
        gameState=END;
        
        //vanishing objects in game end and showing game over
        
        boy.addAnimation("SahilRunning", endImg);
        boy.x = width/2;
        boy.y = height/2;
        boy.scale = 0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        
      }   
    
    }
    
    //placing sprites in canvas
    
    drawSprites();
    
    //creating score
    
    textSize(22);
    fill("red");
    text("Treasure : "+ treasureCollection,150,30);
    
  } 
  
} 
  
//creating Cash
  
function createCash(){
  
  if(World.frameCount % 200 == 0) {
    
    var cash = createSprite(Math.round(random(50, width-50), 40,       10, 10));
    
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 200;
    cashG.add(cash);
    
  } 
  
} 
  
//creating Diamonds
  
function createDiamonds(){
  
  if(World.frameCount % 320 == 0) {
    
    var diamonds = createSprite(Math.round(random(50, width-50),       40, 10, 10));
    
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 200;
    diamondsG.add(diamonds);
    
  } 
  
} 
  
//creating Jwellery
  
function createJwellery(){
  
  if(World.frameCount % 410 == 0) {
    
    var jwellery = createSprite(Math.round(random(50, width-50),       40, 10, 10));
    
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 200;
    jwelleryG.add(jwellery);
    
  } 
  
}
  
//creating Sword
  
function createSword(){
  
  if(World.frameCount % 530 == 0) {
    
    var sword = createSprite(Math.round(random(50, width-50), 40,     10, 10));
    
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 200;
    swordGroup.add(sword);
    
  } 
  
} 