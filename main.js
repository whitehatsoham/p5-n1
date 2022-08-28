function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
    rect(30, 20, 55, 30);
    circle(30, 20, 40);
    circle(55, 20, 40);
    circle(55, 30, 40);
    circle(30, 30, 40);

}
function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
