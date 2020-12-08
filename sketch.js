
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100,650,40);
	ground = new Ground(400,670,800,10);
	dustbin1 = new Dustbin(700,659,150,12);
	dustbin2 = new Dustbin(630,618,12,70);
	dustbin3 = new Dustbin(770,618,12,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85});

}
}