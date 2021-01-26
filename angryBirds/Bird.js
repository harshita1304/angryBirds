class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.simage=loadImage("smoke.png");
    this.tracjectry=[];
  }
  display(){
  
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>250){
      var position=[this.body.position.x,this.body.position.y];
      this.tracjectry.push(position);
    }
    for(var i=0;i<this.tracjectry.length;i++)
    {
      image(this.simage,this.tracjectry[i][0],this.tracjectry[i][1]);
    }
  }
}