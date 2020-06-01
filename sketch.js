var s,a

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 s=createSprite(500,200,75,13)
 a.velocityX=3
 s.velocityX=-3
}

function draw() {
  background("black"); 
  if(s.x-a.x<=s.width/2+a.width/2 &&
    a.x-s.x<=s.width/2+a.width/2 &&
    a.y-s.y<=a.height/2+s.height/2 &&
    s.y-a.y<=s.height/2+a.height/2
  )
    {


       a.velocityX=0
       s.velocityX=0



  


    }
    
    
    
    
    
    
    
    
    
  






  drawSprites();
}