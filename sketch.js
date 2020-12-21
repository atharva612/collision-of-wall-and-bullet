
var Fixedrect;
var car;




var deformation;

function setup() {
  createCanvas(800,400);


  


Fixedrect=createSprite(400, 200, 20, 50);
car=createSprite(20,200,20,20);



var speed,weight;
  speed=random(55,110);
  weight=random(410,1500);
  car.velocityX=speed;





 deformation=0.5*weight*speed*speed/22509;
}

function draw() {
  background("lightblue");  

if(Fixedrect.x-car.x<(car.width/2+Fixedrect.width/2)){
  car.velocityX=0;
  
  if(deformation>180){
    car.shapeColor="red";

  }
  else if(deformation<180 && deformation>100){
    car.shapeColor="yellow";

  }
  else if(deformation<100){
    car.shapeColor="green";
  }
}


 drawSprites();
}





