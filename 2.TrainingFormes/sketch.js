let circles = [];
let squares = [];
let triangles = [];


function preload(){
    for(let i = 0; i < 100; i++) {
        let index = nf(i+1,4,0)
        circles[i] = loadImage(`data/cercle${index}.png`);
        squares[i] = loadImage(`data/carré${index}.png`);
        triangles[i] = loadImage(`data/triangle${index}.png`);
    }
}

let shapeClassifier;

function setup() {
    createCanvas(400,400);
    // background(0);
    // image(triangles[0],0,0,width,height);

    let options={
        inputs:[64,64,4],
        task: 'imageClassification',
        debug: true,
    };
    shapeClassifier = ml5.neuralNetwork(options);

    for (let i = 0; i<circles.length; i++){    
        shapeClassifier.addData({image:circles[i]},{label:"Cercle"});
        shapeClassifier.addData({image:squares[i]},{label:"Carré"});
        shapeClassifier.addData({image:triangles[i]},{label:"Triangle"});
    }

    shapeClassifier.normalizeData();
    shapeClassifier.train({epochs:150}, finishedTraining);
}

function finishedTraining(){
    console.log("finished training!");
    shapeClassifier.save()
}