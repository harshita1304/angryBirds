const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var gamestate="OnSling";
var datetime;
function preload(){
    //backgroundImg=loadImage("bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,305,200,165);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
   // box6=new Box(600,300,70,70);
   // box7=new Box(550,300,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //log6= new Log(500,150,150,PI/2);
   

    bird = new Bird(100,100);
    sling=new Slingshot({x:200,y:100},bird.body);

}

function draw(){
    getBackground();
    background(bg);
    Engine.update(engine);
    
    //console.log(bird.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
   // box6.display();
    //box7.display();
    log4.display();
    log5.display();
    //log6.display();
    
    
    bird.display();
    platform.display();
    sling.display();   
}
function mouseDragged(){
    if(gamestate==="OnSling")
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
    gamestate="launched";
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(bird.body);
        gamestate="OnSling";
    }
}

async function getBackground(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  datetime=responseJSON.datetime;  
  console.log(datetime);
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 &&hour<=18){
     bg=loadImage("bg.png"); 
  }
  else{
      bg=loadImage("bg2.jpg");
  }
}