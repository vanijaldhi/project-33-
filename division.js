class Division{
    constructor(x,y,w,h){
    var options = {
        isStatic : true
    }
    this.block = Bodies.rectangle(x,y,w,h,options);
    this.w = width;
    this.h = height;
    World.add(world,this.block);
    }
    display(){
        var pos = this.block.position;
    rectMode(CENTRE);
    rect(pos.x,pos.y,this.w,this.h);
    }
}