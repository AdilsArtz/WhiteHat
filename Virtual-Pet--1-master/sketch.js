var dogImg, dog, happyDog, database, foodS, foodStock;

function preload()
{
	dogImg = loadImage("../images/dogImg.png");
  happyDog = loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(1080, 1080);
  dog = createSprite(590, 590);
  dog.addImage("dogImg", dogImg);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on('value', readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  
  text(foodS, 500, 100);
  textSize = 20;
  fill("white");
  stroke("green");

}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    food : x
  })
}

