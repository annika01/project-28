class Mango{

constructor(x,y,r){

var options={
isStatic: true,
restitution: 0.2

}
this.body= Bodies.circle (x,y,r,options)
this.r= r
this.image= loadImage("img/mango.png")
World.add(world, this.body)

}
 
display(){
var pos = this.body.position
push ();
translate(pos.x, pos.y )
rotate(this.body.angle)
imageMode(CENTER)
ellipseMode(CENTER)
image(this.image, 0,0,this.r*2, this.r*2)
pop ();


}


}