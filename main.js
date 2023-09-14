w1ristX = "";
w2ristX = "";
noseX = "";
noseY = "";
distance = "";
function setup()
{
   canvas =  createCanvas(300,300);
    video =  createCapture(VIDEO);
    canvas.position(200,200);
    video.size(300,300);
    video.position(800,250);
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on("pose", gotResult);
}
function modelLoaded()
{
    console.log("working_model....server_useable")
}
function gotResult(result)
{
    if(result.length>0)
    {
        console.log(result)
        w1ristX = result[0].pose.leftWrist.x;
        w2ristX = result[0].pose.rightWrist.x;
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        distance = floor(w1ristX-w2ristX);
    }
    else{
        console.log("error_found.....Server..ShuttT")
    }
}
function draw()
{
    background("red");
    fill("blue");
    stroke("black");
    square(noseX,noseY,distance);
    document.getElementById("details_sqr").innerHTML="Width and height of square is : "+distance

}