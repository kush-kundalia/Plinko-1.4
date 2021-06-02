
class Division {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    get() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,255,255);
        rect(pos.x, pos.y, this.w, this.h);
    }
};