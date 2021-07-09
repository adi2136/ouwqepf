var s,i;
var e,ei;
var d,a
var b,ie
var c,ic
var g,bi
var gameState="play"
var ov,ovi
var score=0;
var gun,guns
function preload(){
  i=loadImage("space.jpg")
  ei=loadImage("craft.png")
  ie=loadImage("earth.png")
  ic=loadImage("comet.png")
  bi=loadImage("bu.png")
  ovi=loadImage("over.jpg")
  guns=loadSound("i.mp3")
}
function setup(){
createCanvas(800,660)

score=0;
e=createSprite(400,380,50,50)
e.addImage("uvd",ei)
e.scale=0.3
ov=createSprite(430,380,100,50)
ov.addImage("o",ovi)
ov.scale=2
ov.visible=false

d=createSprite(3,500,10,1000)
d.shapeColor="black"
a=createSprite(795,500,10,1000)
a.shapeColor="black"
c=new Group()
g=new Group()
b=createSprite(400,700,1000,400)
b.addImage("u",ie)
b.scale=4
b.visible=false
}
function draw(){
  
  
  
  background(i)
  if(keyIsDown(LEFT_ARROW)){
    e.x=e.x-10
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    e.x=e.x+10
  }
  if(e.isTouching(c)){
    gameState="END"
  }
  if(gameState==="END"){
    g.visible=false
    c.visible=false
    e.visible=false
    b.visible=false
    ov.visible=true
  }
  
  if(keyDown("space")){
     g=createSprite(100,100,50,50)
     g.shapeColor="white"
     g.y=360
     g.x=e.x
     g.addImage(bi)
     g.scale=0.1
     g.velocityY=-10
     guns.play()
  }
  
  e.bounceOff(d)
  e.bounceOff(a)
  drawSprites();
  textSize(30)
  fill("white")
  text("score:"+score,400,50)
  text("tap space button to shoot bullets",200,90)
  if(frameCount%50===0){
    c=createSprite(random(100,600),0,50,50)
    
   c.addImage("d",ic)
    c.scale=0.3
    c.velocityY=5

    
}
if(c.isTouching(g)){
  c.destroy()
  g.destroy()
  score=score+1
}
}
