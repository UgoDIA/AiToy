void setup() {
  size(64,64);
}
void draw() {
  
  for (int i=0; i < 3; i++){
     background(255);
    pushMatrix();
    strokeWeight(random(0.5,3));
    
    stroke(0,0,random(100,255));
    
    if (i==0){
    circle(32,32, 45);
    saveFrame("data/cercleB####.png");
    } else if (i==1){
      
      square(12,12,40);
      saveFrame("data/carréB####.png");
    } else if (i==2) {
      triangle(14,48,32,10,50,48);
      saveFrame("data/triangleB####.png");
    }
    popMatrix();  
  } 
  
  if (frameCount ==100){
    exit();
  }
}
