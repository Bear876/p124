function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(400,170)
    canvas=createCanvas(550,550);
    canvas.position(1000,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("#79a1b8");
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}