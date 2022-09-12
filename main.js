Webcam.set({
    width:350,
    hieght:300,
    image_format : 'png',
    png_quality:90

});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(fuction(data.uri) {
     document.getElementById("result").innerHTML = '<img id="captured" src = "'+data_uri+'"/>'
    });
}

console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rBXgwXBb0/model.json',modelLoaded);