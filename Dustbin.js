class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(600,680,100,20,options);
        this.leftBody = Bodies.rectangle(540,640,20,100,options);
        this.rightBody = Bodies.rectangle(660,640,20,100,options);
        this.image = loadImage("dustBinImage.png");
        World.add(myWorld,this.body);
        World.add(myWorld,this.leftBody);
        World.add(myWorld,this.rightBody);
    }
    display(){
    var pos = this.body.position
    var pos1 = this.leftBody.position
    var pos2 = this.rightBody.position
    rectMode(CENTER);
    rect(pos1.x,pos1.y,20,100);
    rect(pos2.x,pos2.y,20,100);
    imageMode(CENTER);
    image(this.image,600,640,150,100);
    }
}