
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var richElephant, mansion, richElephantImg
//var backGroundSprite = "Mansion_opt.png"
function preload()
{
	mansion = loadImage("Mansion.jpg")
	richElephantImg = loadImage("richElephant.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
   
	
 
	//mansion.scale=0.5;
	backGroundSprite = createSprite(600,400,1200,800)
	backGroundSprite.addImage("mansion",mansion)
	 
	richElephant = createSprite( 800, 500, 40, 80)
	richElephant.addImage("richElephantImg", richElephantImg)
	richElephant.scale=0.2

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  
  drawSprites();
 
}



