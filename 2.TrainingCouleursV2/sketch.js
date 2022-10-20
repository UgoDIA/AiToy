let Rouge=[];
let Vert=[];
let Bleu =[];

function preload(){
  for(let i = 0; i < 100; i++) {
      let index = nf(i+1,4,0)
      Rouge[i] = loadImage(`data/Rouge${index}.png`);
      Vert[i] = loadImage(`data/Vert${index}.png`);
      Bleu[i] = loadImage(`data/Bleu${index}.png`);
      
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

for (let i = 0; i<Rouge.length; i++){    
    shapeClassifier.addData({image:Rouge[i]},{label:"Rouge"});
    shapeClassifier.addData({image:Vert[i]},{label:"Vert"});
    shapeClassifier.addData({image:Bleu[i]},{label:"Bleu"});
}

shapeClassifier.normalizeData();
shapeClassifier.train({batchSize:24,epochs:10}, finishedTraining);
}

function finishedTraining(){
console.log("finished training!");
shapeClassifier.save()
}



