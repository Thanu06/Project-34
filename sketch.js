//Create variables here
var dog, happyDog, database, foodS, foodStock,dogImg,database;
function preload()
{
	//load images here
dogImg=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
 background(46, 139, 87);

 database=firebase.database();

  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }
  drawSprites();
  //add styles here
 fill("white");
 text("Food:"+foodS,200,150);
 text("Note:Press UP_ARROW Key to Feed Drago Milk!",140,50);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
  Food:x
})
}

