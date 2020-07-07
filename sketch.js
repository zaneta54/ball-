const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
var ball 
var box
var ground










function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(150,400);
  box = new Box(100,640,50,50,'orange');
  ground = new Ground(800,800,200,100);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ball.display();
  box.display();
  ground.display();
  drawSprites();
}