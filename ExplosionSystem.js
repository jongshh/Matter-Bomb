class ExplosionSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
    this.systemlife = 200;
    this.count = 20;
  }
  
  addParticle(){
    if (frameCount%3 == 0){
    for (let i = 0; i < this.count; i++){
  this.particles.push(new Explosion(this.origin,this.systemlife));
    }
  }
  this.systemlife -=1;
  }
  
  add(aForce) {
    // applyForce for all particles
    for (let p of this.particles) {
      p.applyForce(aForce);
    }
  }
  
  run(){
      for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()){
      this.particles.splice(i, 1);
    }
  }

  }
  
  life(){
    return this.systemlife < 0;
  }
}