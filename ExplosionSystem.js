class ExplosionSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
    this.systemlife = 0;
  }
  
  addParticle(){
    if (frameCount%5 == 0){
  this.particles.push(new Particle(this.origin,this.systemlife/2,this.systemlife));
    }
  this.systemlife +=1;
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
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
  }
  
  life(){
    return this.systemlife > 1500;
  }
}