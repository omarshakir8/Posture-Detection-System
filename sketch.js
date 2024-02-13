let capture;
let posenet = null;
let noseX,noseY;



function setup(){
    createCanvas(800,500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',recievedPoses)
    
}

function recievedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0];
        noseX = singlePose.pose.nose.x;
        noseY = singlePose.pose.nose.y;
    }
    console.log(noseX + " " + noseY);

}

function modelLoaded(){
    console.log('Model has loaded');
}



function draw(){
    image(capture,0,0,800,600);
    FileList(255,0,0);
    ellipse(noseX,noseY, 30,30);
}