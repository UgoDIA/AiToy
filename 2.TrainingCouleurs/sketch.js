let cerclesR =[];
let cerclesG =[];
let cerclesB =[];
let carrésR =[];
let carrésG =[];
let carrésB =[];
let trianglesR =[];
let trianglesG =[];
let trianglesB =[];

function preload(){
  for(let i = 0; i < 100; i++) {
      let index = nf(i+1,4,0)
      cerclesR[i] = loadImage(`data/cercleR${index}.png`);
      cerclesG[i] = loadImage(`data/cercleG${index}.png`);
      cerclesB[i] = loadImage(`data/cercleB${index}.png`);
      carrésR[i] = loadImage(`data/carréR${index}.png`);
      carrésG[i] = loadImage(`data/carréG${index}.png`);
      carrésB[i] = loadImage(`data/carréB${index}.png`);
      trianglesR[i] = loadImage(`data/triangleR${index}.png`);
      trianglesG[i] = loadImage(`data/triangleG${index}.png`);
      trianglesB[i] = loadImage(`data/triangleB${index}.png`);

      
  }
}

function setup() {
  createCanvas(400, 400);
  // background(0);
  // image(trianglesG[1],0,0,width,height);

  let options={
    inputs:[64,64,4],
    task: 'imageClassification',
    debug: true,
};
shapeClassifier = ml5.neuralNetwork(options);

for (let i = 0; i<cerclesR.length; i++){    
    shapeClassifier.addData({image:cerclesR[i]},{label:"Rouge"});
    shapeClassifier.addData({image:cerclesG[i]},{label:"Vert"});
    shapeClassifier.addData({image:cerclesB[i]},{label:"Bleu"});
    shapeClassifier.addData({image:carrésR[i]},{label:"Rouge"});
    shapeClassifier.addData({image:carrésG[i]},{label:"Vert"});
    shapeClassifier.addData({image:carrésB[i]},{label:"Bleu"});
    shapeClassifier.addData({image:trianglesR[i]},{label:"Rouge"});
    shapeClassifier.addData({image:trianglesG[i]},{label:"Vert"});
    shapeClassifier.addData({image:trianglesB[i]},{label:"Bleu"});
}

shapeClassifier.normalizeData();
shapeClassifier.train({epochs:10}, finishedTraining);
}

function finishedTraining(){
console.log("finished training!");
shapeClassifier.save()
}



