class Slingshot{
    constructor(bodyA,bodyB){
            var options={
        bodyA:log7.body,
        bodyB:bird.body,
        stiffness:0.2,
        length:7
    }
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
         strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}