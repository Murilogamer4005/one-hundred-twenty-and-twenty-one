function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
    console.log("model loaded=modelo carregado (e pronto)!")
}
function draw(){
image(video,0,0,400,400)
classifier.classify(video,gotResult)

}
var previousResult=""
function gotResult(error,results){
if (error) {
    console.log(error)

}
else{
    if ((results[0].confidence > 0.5) && (previousResult != results[0].label)) 
    {
    previousResult=results[0].label
    document.getElementById("resultObjectName").innerHTML=results[0].label
    document.getElementById("resultObjectAccuracy").innerHTML=(results[0].confidence.toFixed(2)*100)
}
}
}