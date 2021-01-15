
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//const Constraint = Matter.Constraint;

var ball,obstacle,block,ground;

function setup() {
  createCanvas(480,800);

  var balls= [];
  var plinkos = [];
  var divisions = [];
  var divisionHeight = 300;
  
  for ( var k = 0; k <= width; k= k+80){
    division.push(new Division (k,(height - divisionHeight)/2,10, divisionHeight))
  }
  
  for(var j = 40; j<=width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for( var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  for ( var j = 0; j < balls.length; j++){
    balls[j].display();
  }
  
  for ( var k= 0; k < divisions.length; k++){
    balls[k].display();
  }
  
  ground1 = new Ground(240,800,480,30);

    block1 = new Division(600,5,10,100);
    block2 = new Division(600,160,10,100);
    block3 = new Division(600,320,10,100);
    block4 = new Division(600,480,10,100);
    block5 = new Division(600,640,10,100);
    block6 = new Division(600,790,10,100);

    plinko1 = new Plinko(100,100);
    plinko2 = new Plinko(200,100);
    plinko3 = new Plinko(300,100);
    plinko4 = new Plinko(100,200);
    plinko5 = new Plinko(100,300);
    plinko6 = new Plinko(100,400);
    plinko7 = new Plinko(150,250);
    plinko8 = new Plinko(100,100);

  }

  function draw() {
    background(40,30,110);  
    ground1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

      plinko1.display();
      plinko2.display();
      plinko3.display();
      plinko4.display();
      plinko5.display();
      plinko6.display();
      plinko7.display();
      plinko8.display();

    drawSprites();
  }