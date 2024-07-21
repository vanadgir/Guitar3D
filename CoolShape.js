class CoolShape {
  constructor(center, num) {
    this.center = center;
    this.startingCenter = center;
    this.fillcolor = color(255);
    this.scale = 0;
    this.angle = num/1000;
    this.loudness = 0;
    this.centroid = 0;
    this.energies = {
      low: 0,
      mid: 0,
      high: 0,
      treble: 0
    }
  }

  update(loudness, centroid, low, mid, high, treble){
    this.loudness = loudness;
    this.centroid = centroid;
    this.energies = { low, mid, high, treble };
    this.scale = map(this.loudness, 0, 1, 0, 1000);

    let angleInc = map(this.loudness, 0, 1, 0.02, 0.08);
    this.angle += angleInc;
  }


  draw() {
    push();

    translate(this.center.x, this.center.y);
    // this.center.x = this.startingCenter.x + this.scale * cos(this.angle);
    // this.center.y = this.startingCenter.y + this.scale * sin(this.angle);

    rotateX(this.angle);
    rotateY(this.angle);
    rotateZ(this.angle);

    fill(this.fillcolor);
    box(50 + this.scale);
    torus(100 + this.scale, 15, parseInt(3 + map(this.centroid, 0, 22050, 0, 100)));
    cylinder(125 - (this.energies.high + this.scale), 20 + this.energies.treble);

    pop();
  }
}
