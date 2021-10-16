var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200)
}

function draw() 
{
  background("lime");

  if(keyIsDown(RIGHT_ARROW)){
  ball.position.x=ball.position.x+5
  background('red')
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x=ball.position.x-5
    background('blue')
    }
    if(keyIsDown(UP_ARROW)){
      ball.position.y=ball.position.y-5
      background("yellow")
      }   
      if(keyIsDown(DOWN_ARROW)){
        ball.position.y=ball.position.y+5
        background(rgb(Math.random(0,255),0,0))
        }      

drawSprites()
}




