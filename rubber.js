class rubber {
    constructor(x,y,width,height) {
        var option = {
            'density': 0.7,
            'friction': 4.0,
            'restitution':0.1,
}
this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;

World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translation(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0 , 0 , this.width , this.height);
    pop();
   }
};
