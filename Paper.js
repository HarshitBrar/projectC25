class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 3.2
        }
        this.x = x;
        this.y = y;
        this.r = 20;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("paperImage.png");
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop()
    }
}