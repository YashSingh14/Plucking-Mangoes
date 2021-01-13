
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1 = new Boy(100, 50, 50)
    resize = new ResizeImage('boy.png');
	resize->resizeTo(40, 70, 'exact');
	resize->saveImage('boy.png');
	groundOb=new Ground(0, 900, 1000, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  drawSprites();
 
}



