var dog, happydog,foodS, foodStock;
var database;

function preload()
{
	happydog = loadImage('images/happydog.png');
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value", readStock);
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  textSize()
  fill()
  stroke()
  text("Press UP ARROW key to feed the dog" ,1100,100)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage()
}
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if (x<=0){
  x = 0;
}else{
  x=x-1;
}

   database.ref('/').update({
     Food:x
   })
}
