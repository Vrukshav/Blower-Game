const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;

var blower;
var blowerMouth;
var button;

function setup() {
  canvas = createCanvas(400, 500);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    
    restitution: 0.8
  }

  ball = Bodies.circle(300,50,20,ball_options);
  World.add(world,ball);

  blower = new Blower(170, 305, 220, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(59);
  Engine.update(engine);
  
  blower.show();
  blowerMouth.show();

  ellipse(ball.position.x,ball.position.y,40);
}

function blow() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 0.01 });
}