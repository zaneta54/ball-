class Ground{
    constructor(x,y,width,height){
        var groundoptions = {
            isStatic:true
        }
this.body =Bodies.rectangle(x,y,width,height,groundoptions);
this.width  = width;
this.height = height;
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        rect(pos.x,pos.y,this.width,this.height);
    }
}