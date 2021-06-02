class Plinko {
    constructor (x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.r = 10;
        this.body = Matter.Bodies.circle(x,y,this.r , options)
        World.add(world, this.body)
    }
    get() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(255,255,255)
        circle(0, 0, this.r,this.r);
        pop();
    }
}