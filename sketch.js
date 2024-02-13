let capture;
let posenet = null;



function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    
}

function modelLoaded(){
    console.log('Model has loaded')
}



function draw(){
    image(capture,0,0,800,600);
    
}