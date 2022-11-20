song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
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
}