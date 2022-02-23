song_1 = "";
song_2 = "";
LeftwristX = 0;
LeftwristY = 0;
RightwristX = 0;
RightwristY = 0;


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500);

}
function gotposes(results){
      if(results.length > 0){
        console.log(results);
        LeftwristX = results[0].pose.leftWrist.x;
        LeftwristY = results[0].pose.leftWrist.y;
        console.log("left wrist X = "+LeftwristX+" left wrist Y = "+LeftwristY);
        
        RightwristX = results[0].pose.rightWrist.x;
        RightwristY = results[0].pose.rightWrist.y;
        console.log("right wrist X = "+RightwristX+"right wrist Y = "+LeftwristY);
      }
}
