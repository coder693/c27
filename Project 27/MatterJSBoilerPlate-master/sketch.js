
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,roof1,floor,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new roof(400,200,1200,20);
	bobobject1=new bob(150,400,50);
	bobobject2=new bob(250,400,50);
	bobobject3=new bob(350,400,50);
	bobobject4=new bob(450,400,50);
	bobobject5=new bob(550,400,50);
	floor=new roof(400,450,800,20);
	rope1=new rope(bobobject1.body,roof1.body,100,0)
	rope2=new rope(bobobject2.body,roof1.body,100,0)
	rope3=new rope(bobobject3.body,roof1.body,100,0)
	rope4=new rope(bobobject4.body,roof1.body,100,0)
	rope5=new rope(bobobject5.body,roof1.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof1.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  rope1.display();
  drawSprites();
 
}

function applyforce(){
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:600,y:-150});

	}	
}




