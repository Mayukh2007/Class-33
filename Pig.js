class Pig extends BaseClass {
  constructor(x, y){
    //load the values from the parrent class
    super(x,y,50,50);
    // image
    this.image = loadImage("sprites/enemy.png");
    //visiblity
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   //if and else statements to make the pig not visible when the speed is >3
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
// increase the score
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};