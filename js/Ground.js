class Ground{
    constructor(x,y,width,height){
        var options ={ 
          isStatic : true
        }
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        world.add(worls, this.body);
    }
     
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y,this.width , this.height);
    }

    
  };
    
