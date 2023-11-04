class explosion{
  constructor(position){
      this.acceleration = createVector();
      this.velocity = createVector(random(-5,5),random(-5,5));
      this.position = position.copy();
      this.lifespan = 200;
      this.ballrad = 50
      this.fc = random(50,250);
  }
  

  run(){
      this.update();
      this.display();
  }
  
  update(){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;
    
  }
  
  display(){
      stroke(200, this.lifespan);
      strokeWeight(2);
      fill(this.fc,50,50, this.lifespan);
      ellipse(this.position.x, this.position.y, this.ballrad*2, this.ballrad*2);
  }  
}