var pedra, Pedrag, ground1, ground;


function preload(){
  Pedrag = loadImage("Pedraf.png");
  ground1 = loadImage("ground.png"); 
}

function setup() {
  createCanvas(800, 750);

  ground = createSprite(800,100,800,10);
  ground.addImage(ground1)
  //World.add(world,ground);


  pedra = createSprite(200,100,10);
  pedra.addImage(Pedrag)
  //World.add(world,pedra);
}


function draw() {
  background('white');
  
  drawSprites();

}