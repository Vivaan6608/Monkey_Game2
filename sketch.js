var bananaImage,obstacleImage,player_running
var obstacleGroup,background,score,foodGroup

function preload(){
  backImage = loadImage("jungle.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  player_running = loadImage("Monkey_01","Monkey-02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10");
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("jungle.png");
  background.velocityX = 15;
  if(background.velocityX = 380) {
    background.velocityX = 0;
  }
  }

if(foodGroup.isTouching(player)){
  score = score + 2;
  foodGroup.destroy(banana);
}

if(obstacleGroup.isTouching(player)){
  player.scale = 0.2;
}

stroke("white");
textSize(20);
fill("white");
text("Score : ",score,500,50);