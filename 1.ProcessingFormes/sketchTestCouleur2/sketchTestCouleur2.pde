void setup() {
  size(64,64);
}
void draw() {
  
    for (int i=0; i < 3; i++){
      if(i==0){
      background(random(150,255),0,0);
      saveFrame("data/Rouge####.png");
      }else if (i==1){
        background(0,random(150,255),0);
        saveFrame("data/Vert####.png");
      }else if (i==2){
        background(0,0,random(150,255));
        saveFrame("data/Bleu####.png");
    }
    }
    if (frameCount ==500){
    exit();
    }
  }
