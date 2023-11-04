class Particle{
  constructor(position,fadj,pspeed){
      this.acceleration = createVector();
      this.velocity = createVector();
      this.position = position.copy();
      this.lifespan = 200;
      this.ballrad = 6*fadj/500;
      this.fc = fadj/2;
      this.adjspeed = (0,pspeed/10000);
  }
  

  run(){
      this.update();
      this.display();
      this.checkedge();
  }
  
  applyForce(aForce){
    this.acceleration.add(aForce);
  }
  
  update(){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;
      this.acceleration.add(random(-this.adjspeed, this.adjspeed), random(-this.adjspeed, this.adjspeed));
    
  }
  
  display(){
      stroke(200, this.lifespan);
      strokeWeight(2);
      fill(this.fc,50,50, this.lifespan);
      ellipse(this.position.x, this.position.y, this.ballrad*2, this.ballrad*2);
  }
  
  checkedge(){
      if(this.position.y >= height - this.ballrad){
        this.velocity.y *=-1;
        this.position.y = height - this.ballrad;
        this.fc +=1;
      }
    if(this.position.y <= 0 + this.ballrad){
        this.velocity.y *=-1;
        this.position.y = 0 + this.ballrad;
        this.fc +=1;
      }
    if(this.position.x >= width - this.ballrad){
        this.velocity.x *=-1;
        this.position.x = width - this.ballrad;
        this.fc +=1;
      }
    if(this.position.x <= 0 + this.ballrad){
        this.velocity.x *=-1;
        this.position.x = 0 + this.ballrad;
        this.fc +=1;
      }
    
  }
  
  isDead(){
      return this.lifespan < 0;
  }
  
  
}