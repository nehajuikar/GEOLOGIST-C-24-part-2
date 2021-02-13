
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var rubber;
var stone;


function setup() {
	createCanvas(1300, 700);
engine = Engine.create();
world = engine.world;

ground = new ground(500,height,1300,30);

stone = new stone(200,100,10,10);

hammer = new hammer(300,200,50,50);

rubber = new rubber(500,200,60,60);

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  background("blue");
  Engine.update(engine);
  stone.display();
  rubber.display();
  hammer.display();
  ground.display();
}



