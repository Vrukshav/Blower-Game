class Ball {
    constructor(x, y, r) {
      let options = {
        restitution: 0.8
      };
  
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
  
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.r);
      pop();
    }
  }