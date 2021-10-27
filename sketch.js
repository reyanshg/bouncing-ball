// Namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;

var ground, ground_options;
var ball, ball_options;
var ground2;
var ball2;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground_options = {
    isStatic: true,
  }


  
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  ground2 = Bodies.rectangle(300, 200, 200, 20, ground_options);
  World.add(world, ground2);

  ball_options = {
    restitution: 0.8,
    frictionAir: 0.03
  }

  ball = Bodies.circle(200,100, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(300,100, 15, ball_options);
  World.add(world, ball2);

  console.log(ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  

}

function draw() 
{
  background(51);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 400, 10);

  ellipse(ball.position.x, ball.position.y, 20, 20);

  rect(ground2.position.x,ground2.position.y,200,20);

  ellipse(ball2.position.x, ball2.position.y, 15, 15);

}

