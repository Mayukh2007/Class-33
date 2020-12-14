class Ground {
    constructor(x,y,width,height) {
      // set the options
      var options = {
          isStatic: true
      }
      //creation of the object
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //short variable for this.body.position
      var pos =this.body.position;
      //display the object
      rectMode(CENTER);
      //fill colour
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
