class Log extends BaseClass{
  constructor(x,y,height,angle){
    // load the values from the parrent class and add the image
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    //set the angle
    Matter.Body.setAngle(this.body, angle);
  }
}