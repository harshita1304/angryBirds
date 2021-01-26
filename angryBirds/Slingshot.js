class Slingshot{
    constructor(pointA,bodyB){
            var options={
        pointA:pointA,
        bodyB:bird.body,
        stiffness:0.1,
        length:7
    }
    this.sling1=loadImage("sling1.png");
    this.sling2=loadImage("sling2.png");
    this.sling3=loadImage("sling3.png");
    this.pointA=pointA;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyB=null;
    }
    attach(body){
        this.sling.bodyB=body;
    }
    display(){
        image(this.sling1,170,25);
        image(this.sling2,145,25);
        if(this.sling.bodyB){
        var pointA=this.pointA;
        var pointB=this.sling.bodyB.position;
        push()
         strokeWeight(10);
         stroke(100,0,0);
    line(pointA.x-40,pointA.y-45,pointB.x-30,pointB.y);
    line(pointA.x-10,pointA.y-45,pointB.x+30,pointB.y);
    image(this.sling3,pointB.x-35,pointB.y-15,17,30);
    pop();
    }
}
}