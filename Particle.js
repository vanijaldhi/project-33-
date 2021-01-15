class Particle{
    constructor(x,y){
    var options={
        isStatic: false,
        restitution:0.4
    }
    this.ball = Bodies.circle(x,y,30,options);
    this.color = color(random(0,255),random(0,255), random(0,255));
    World.add(world,this.ball);
    }
    display(){
        var pos = this.ball.position;
        ellipseMode(CENTRE);
        ellipse(pos.x,pos.y,20,20);
    }
}