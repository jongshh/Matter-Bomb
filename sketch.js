let systems = [];
let explosions = [];
let gravity;
let mpos2;
let GControl = 0;



function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(51);

  if (keyIsDown(UP_ARROW)){
    GControl -= 0.01;
  }
  if (keyIsDown(DOWN_ARROW)){
    GControl += 0.01;
  }

  gravity = createVector(0, GControl);



  for (let s of systems){
    s.addParticle();
    s.run();
    s.add(gravity)
    
  if (mouseIsPressed){
  
  let wind = createVector(0, 0.1);
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

  push();
  noStroke();
  fill(255);
  textSize(40);
  text("Matter Bomb", width/2-200, 40);
  textSize(20);
  text("Currect G : " +nf(GControl*100,1,0) +"G", width/2-140, 70);
  pop();


}

function mouseClicked(){
  mpos2 = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos2);
  systems.push(s);
}



