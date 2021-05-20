const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monsterImg , superheroImg;
var bgImg;


function preload() {
//preload the images here
monsterImg = loadImage("image/Monster-01.png");
superheroImg = loadImage("image/Superhero-01.png");
bgImg = loadImage("image/bg.jpg");


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(bgImg);

}

function mouseDragged(){
Matter.Body.setPosition(hero.body , { x : mouseX , y : mouseY });


}
