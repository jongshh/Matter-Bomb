let systems = [];
let explosions = [];
let gravity;
let mpos2;



function setup() {
  createCanvas(1920, 1080);

  gravity = createVector(0, 0.05);
}

function draw() {
  background(51);
  
  // let mpos2 = createVector(mouseX, mouseY);

  for (let s of systems){
    s.addParticle();
    s.run();
    
  if (mouseIsPressed){
  
  let wind = createVector(0.1, 0);
  s.add(wind);
    }
        if (s.life()) {
      systems.splice(s, 1);
      let exp = new explosion(mpos2);
      explosions.push(exp);
  }
  }
  for(let exp of explosions){
  exp.run();
  exp.update();
  exp.display();
  }
}

function mouseClicked(){
  mpos2 = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos2);
  systems.push(s);
}
