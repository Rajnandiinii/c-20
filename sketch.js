var r1,r2;


//r1=moving rectangle and r2=fixed rectangle
function setup() {
  createCanvas(800,400);
  r1=createSprite(200,200,50,50);
 r2=createSprite(300,200,50,50);
r2.shapeColor="blue";
r1.shapeColor="blue";
}

function draw() {
  background(0);  
 r1.x=World.mouseX;
 r1.y=World.mouseY;
if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2&&r1.y-r2.y<r2.height/2+r1.height/2&&r2.y-r1.y<r2.height/2+r1.height/2){
  r2.shapeColor="red";
  r1.shapeColor="red";  
}
else{
  r2.shapeColor="blue";
  r1.shapeColor="blue"; 
}
console.log(r1.x-r2.x)
console.log(r1.width/2+r2.width/2)
drawSprites();
}