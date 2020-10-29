class Launcher{
    constructor(body,anchor){
        var options ={
            bodyA: body,
            pointB: anchor,
            stiffness:0.004,
            lenght:1 
        }
        this.bodyA= body
        this.pointB= anchor
        this.chain= Constraint.create(options)
        World.add(world, this.chain)

    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
if(this.chain.bodyA){
    var pointA= this.bodyA.position
    var pointB= this.pointB
    strokeWeight (2)
line(pointA.x, pointA.y)
line(pointB.x, pointB.y)
}

    }
}

