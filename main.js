leftwristx = 0;
rightwristx = 0;
leftwristy = 0;
rightwristy = 0;
leftwristscore = 0;
rightwristscore = 0;
song1status = "";
song2status = "";
song1 = "";
song2 = "";
function setup(){
    canvas = createCanvas(800, 800);
    canvas.position(700, 300);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotResult);
}
function draw(){
    image(video, 0, 0, 800, 800);
    fill("255, 34, 34");
    stroke("255, 34, 34");
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    if(leftwristscore > 0.2){
        circle(leftwristx, leftwristy, 50);
        song2.stop();
    }
    if(song1status = false){
        song1.play();
        document.getElementById("songname").innerHTML = "Song Name - Harry Potter Theme Song"
    }
    if(rightwristscore > 0.2){
        circle(rightwristx, rightwristy, 50);
        song1.stop();
    }
    if(song2status = false){
        song2.play();
        document.getElementById("songname").innerHTML = "Song Name - Peter Pan Theme Song"
    }
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result);
        leftwristx = result[0].pose.leftwrist.x;
        leftwristy = result[0].pose.leftwrist.y;
        rightwristx = result[0].pose.rightwrist.x;
        rightwirsty = result[0].pose.rightwrist.y;
        leftwristscore = result[0].pose.keypoints[9].score;
        rightwristscore = result[0].pose.keypoints[10].score;
    }
}