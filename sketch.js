
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine,myWorld;
var paperBall;
var ground;
var dustbin;

function setup() {
	createCanvas(800, 700);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    paperBall = new Paper(100,575);
    ground = new Ground(400,height,800,20);
    dustbin = new Dustbin();
  
  //Create the Bodies Here.
  var render = Matter.Render.create({ element: document.body, engine: myEngine, options: { width: 1200, height: 700, wireframes: false } });
  Matter.Render.run(render);
}

function draw() {
  background("lightblue");
  Engine.update(myEngine);

  ground.display();
  dustbin.display();
  paperBall.display();
  drawSprites();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:55,y:-55})
   }
}



