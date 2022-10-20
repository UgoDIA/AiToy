let shapeClassifier;
let canvas;
let resultsDiv;
let inputImage;
let clearButton;
let video;

function setup() {
  canvas=createCanvas(400, 400);
  video=createCapture(VIDEO);
  video.size(64,64);
  pixelDensity(1)
  let options={
    inputs:[64,64,4],
    task: "imageClassification",
};
  shapeClassifier = ml5.neuralNetwork(options);
  const modelDetails = {
    model: 'modelV2/model.json',
    metadata: 'modelV2/model_meta.json',
    weights: 'modelV2/model.weights.bin'
  }
  background(255);
  // clearButton = createButton('Effacer')
  // clearButton.mousePressed(function(){
  //   background(255);
  // });
  resultsDiv=createDiv('chargement du modèle');
  inputImage=createGraphics(64,64);
  shapeClassifier.load(modelDetails, modelLoaded);

}

function modelLoaded(){
  console.log("modèle prêt")
  classifyImage();
}

function classifyImage(){
  // inputImage.copy(canvas,0,0,400,400,0,0,64,64);
  // image(inputImage,0,0);
  shapeClassifier.classify({image:video},gotResults);
}

function gotResults(err, results){
  if(err) {
    console.error(err);
    return;
  }
  let label=results[0].label;
  let confidence=nf(100*results[0].confidence,2,0 );
  resultsDiv.html(`s${label} ${confidence}%`)
  // console.log(results);
  classifyImage();
}

function draw() {
  image(video,0,0,width,height);
  // if (mouseIsPressed) {
  //   strokeWeight(4)
  //   line(mouseX,mouseY,pmouseX,pmouseY);
    
  // }

  // stroke(0);
  // strokeWeight(4);
  // noFill();
  // rectMode(CENTER);
  // rect(width/2,height/2,40);
  // circle(width/2,height/2,40);
}
