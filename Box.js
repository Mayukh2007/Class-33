class Box extends BaseClass {
  constructor(x, y, width, height){
    // load the values from the parrent class and add the image
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
