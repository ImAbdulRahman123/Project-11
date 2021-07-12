var path1,path;
var boy1,boy;
var invisible1,invisible2,invisible3;
function preload(){
  //pre-load images
   boy1=loadAnimation("Runner-1.png","Runner-2.png");

   path1=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path=createSprite(200,200);
 path.addImage("r",path1);
 path.scale=1.2;
 path.velocityY=4;

 boy=createSprite(200,330,50,50);
 boy.addAnimation("w",boy1);
 boy.scale=0.09;

 invisible1=createSprite(200,330,50,50);
 invisible1.visible=false;

 invisible2=createSprite(100,330,50,50);
 invisible2.visible=false;

 invisible3=createSprite(300,330,50,50);
 invisible3.visible=false;
}

function draw() {
  background(0);
  

  if(path.y>400){
    path.y=height/2;
  }

   
   boy.collide(invisible1);
   boy.collide(invisible2);
   boy.collide(invisible3);
   boy.x=World.mouseX;
   
   



  drawSprites();
}
