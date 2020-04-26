class Ball{
    constructor(x, y, width) {
        var options = {
            restitution : 1.0,
            density : 1.0
          }
          this.body  = Bodies.circle(x,y,width,options);
          World.add(world,this.body);
      }
      display(){
         
         fill("blue");
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,40);
      }
    /*  keyPressed(){
          
if(keyCode===32){
    this.ball.position.x = mouseX;
        this.ball.position.y= mouseY;
       
    }
    
    else if (keyCode === ENTER){
    this.ball.position.x = 200;
    
    }
    
    }
*/
    
      
}