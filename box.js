class Box{
    constructor(x,y,width,height,color){
    var boxoptions = {
        restitution:0.4,
        friction:0.4,
        density:1.4
    }
    this.body = Bodies.rectangle(x,y,width,height,boxoptions);
    this.width = width;
    this.height = height;
    this.color = color;

    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}