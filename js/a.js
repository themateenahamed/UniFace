const video = document.getElementById('video-screen')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('m'),
    faceapi.nets.faceLandmark68Net.loadFromUri('m'),
    faceapi.nets.faceExpressionNet.loadFromUri('m')
]).then(start())

function start() {
        navigator.getUserMedia(
        { video: {
          facingMode: {
            exact: 'environment'
          }
        } },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener('play' , () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
            .withFaceExpressions()
            
            const resizedDetections = faceapi.resizeResults(detections, displaySize)

            if(cr % 2 == 0)
                w_vibr(resizedDetections)
            else
                wo_vibr(resizedDetections)

    }, 4000)
})

function w_vibr(x){

    if(x[0].expressions.happy >= 0.8){
        document.getElementById('et').innerHTML = "Happy";
        document.getElementById('ei').innerHTML = "😄";
        window.navigator.vibrate([100,250,100,250,100,250,100]);
    }
           
    else if(x[0].expressions.angry >= 0.8){
        document.getElementById('et').innerHTML = "Angry"
        document.getElementById('ei').innerHTML = "😡"
        window.navigator.vibrate([100,250,500,250,500,250,100]);
    }    

    else if(x[0].expressions.sad >= 0.8){
        document.getElementById('et').innerHTML = "Sad"
        document.getElementById('ei').innerHTML = "😢"
        window.navigator.vibrate([100,250,100,250,100]);
    }
           
    else if(x[0].expressions.surprised >= 0.8){ 
        document.getElementById('et').innerHTML = "Surprised"
        document.getElementById('ei').innerHTML = "😯"
        window.navigator.vibrate([500,250,100,250,100,250,500]);
    }

    else if(x[0].expressions.disgusted >= 0.8){            
        document.getElementById('et').innerHTML = "Disgusted"
        document.getElementById('ei').innerHTML = "🤮"
        window.navigator.vibrate([500,250,100,250,100]);
    }

    else if(x[0].expressions.fearful >= 0.8){
        document.getElementById('et').innerHTML = "Scared"
        document.getElementById('ei').innerHTML = "😨"
        window.navigator.vibrate([100,250,100,250,500,250,100]);
    }

    else{
        document.getElementById('et').innerHTML = "Neutral"
        document.getElementById('ei').innerHTML = "😐"
    }
}

function wo_vibr(x){
    if(x[0].expressions.happy >= 0.8){
        document.getElementById('et').innerHTML = "Happy";
        document.getElementById('ei').innerHTML = "😄";
    }
           
    else if(x[0].expressions.angry >= 0.8){
        document.getElementById('et').innerHTML = "Angry"
        document.getElementById('ei').innerHTML = "😡"
    }    

    else if(x[0].expressions.sad >= 0.8){
        document.getElementById('et').innerHTML = "Sad"
        document.getElementById('ei').innerHTML = "😢"
    }
           
    else if(x[0].expressions.surprised >= 0.8){ 
        document.getElementById('et').innerHTML = "Surprised"
        document.getElementById('ei').innerHTML = "😯"
    }

    else if(x[0].expressions.disgusted >= 0.8){            
        document.getElementById('et').innerHTML = "Disgusted"
        document.getElementById('ei').innerHTML = "🤮"
    }

    else if(x[0].expressions.fearful >= 0.8){
        document.getElementById('et').innerHTML = "Scared"
        document.getElementById('ei').innerHTML = "😨"
    }

    else{
        document.getElementById('et').innerHTML = "Neutral"
        document.getElementById('ei').innerHTML = "😐"
    }
}
