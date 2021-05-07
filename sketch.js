const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  textSize(20);
    text("use mouse to drag",1500,350);

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //side one (1)
  box1 = new Box(600, 150, 40, 40);
  box2 = new Box(600, 170, 40, 40);
  box3 = new Box(600, 190, 40, 40);
  box4 = new Box(600, 210, 40, 40);
  //side two (2)
  box5 = new Box(700, 150, 40, 40);
  box6 = new Box(700, 170, 40, 40);
  box7 = new Box(700, 190, 40, 40);
  box8 = new Box(700, 210, 40, 40);
  box9 = new Box(700, 230, 40, 40);
  box10 = new Box(700, 350, 40,40);

  box11 = new Box(800,150, 40, 40);
  box12= new Box(800, 170, 40, 40);
  box13= new Box(800, 190, 40, 40);
  box14= new Box(800, 210, 40, 40);

  box15 = new Box(900, 150, 40, 40);
  box16 = new Box(900, 170, 40, 40);
  box17= new Box(900, 190, 40, 40);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box10.display();

  box11.display();
  box12.display(); 
  box13.display();
  box14.display();

  box15.display(); 
  box16.display();
  box17.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}


