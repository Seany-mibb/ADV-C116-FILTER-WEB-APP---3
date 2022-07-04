NoseX = 0;
NoseY = 0;

clownNose = "";

function preload()
{
    clownNose = loadImage("https://i.postimg.cc/wBQWvKQc/nose.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.position(windowWidth/2 - 150, windowHeight/2-130);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function take_snapshot()
{
    document.getElementById("shutter").play();
    save('myFilterImage.png');
}

function draw()
{
    image(video,0,0,300,300);
    //fill(255,0,0);
    //noStroke();
    //circle(NoseX,NoseY,20);
    image(clownNose, NoseX-40, NoseY-40, 80,80);
}

function modelLoaded()
{
    console.log("Model is loaded Sean is happy oui.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}