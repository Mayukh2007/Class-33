class Bird extends BaseClass {
  //create constructor
  constructor(x,y){
    //load the values for the parrent class
    super(x,y,50,50);
    // add bird and smoke image
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //array
    this.trajectory =[];
  }
  
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    // display
    super.display();
    // create trajectory
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
