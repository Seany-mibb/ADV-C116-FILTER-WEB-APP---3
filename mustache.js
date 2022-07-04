NoseX = 0;
NoseY = 0;

mustache = "";

function preload()
{
    mustache = loadImage("https://i.postimg.cc/K8f5tPCt/mustache.webp");
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
    save('MustacheFilter.png');
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache, NoseX-23, NoseY-10, 50,40)
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