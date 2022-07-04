NoseX = 0;
NoseY = 0;

lipstickFilter = "";

function preload()
{
    lipstickFilter = loadImage("https://i.postimg.cc/t4kjKcnw/output-onlinejpgtools-1.png");
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
    save('LipstickFilter.png');
}

function draw()
{
    image(video,0,0,300,300);
    image(lipstickFilter, NoseX-15, NoseY+10, 30,20)

}

function modelLoaded()
{
    console.log("Huzzah model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        //console.log("nose x = " + results[0].pose.nose.x);
        //console.log("nose y = " + results[0].pose.nose.y);
    }
}