class Explosion{
  constructor(position,systemlife){
      this.acceleration = createVector();
      this.velocity = createVector(random(0,0),random(0,0));
      this.position = position.copy();
      this.lifespan = 200;
      this.ballrad = 3 + (systemlife/500);
      this.systemlife = systemlife/500;
      this.fc = systemlife;
  }
  

  run(){
      this.update();
      this.display();
  }
  
  update(){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 1;
      this.acceleration.add(random(-this.systemlife, this.systemlife), random(-this.systemlife, this.systemlife));
      this.velocity.limit(1);
      
  }

  applyForce(aForce){
    this.acceleration.add(aForce);
  }
  
  display(){
      stroke(this.fc,25,25,this.lifespan);
      strokeWeight(3);
      fill(this.fc,25,25, this.lifespan);
      ellipse(this.position.x, this.position.y, this.ballrad*(random(-1,1)), this.ballrad*(random(-1,1)));
  }  

  isDead(){
    return this.lifespan < 0;
  }
}
