function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassier('https://teachablemachine.withgoogle.com/train/audio/model.json',modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

gotResults()
 {

    console.log(gotResults);
}