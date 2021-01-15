class Plinko{
    constructor(x,y){
    var options = {
        isStatic : true
    }
    this.plinko = Bodies.circle(x,y,20,options);
    
    World.add(world,this.plinko);
    }
    display(){
        var pos = this.plinko.position;
    ellipseMode(CENTRE);
    ellipse(pos.x,pos.y,20,20);
    }
}