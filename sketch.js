var wall;
var bullet,speed ;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(25,120);
  weight=random(30,52);
  thickness=random(23,83)

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed,weight;
  bullet.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;
  
    if(damage>10)
  {
    bullet.shapeColor = "red"
  }  
  
  if(damage<10)
  {
    bullet.shapeColor = "green"
  }  

  }
  drawSprites();
}