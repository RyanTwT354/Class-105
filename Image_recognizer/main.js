Webcam.set({
    height:300,
    width:400,
    image_format:"png",
    png_quality:90
   });
   camera=document.getElementById("camera");
   Webcam.attach("#camera");

   function takeImg(){
       Webcam.snap(function(data_uri){
           document.getElementById("picture").innerHTML='<img id = "capture_image" src = "'+ data_uri + '">"'; 
       });
   }

   console.log("ml5_version:",ml5.version);

   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sXDmZ5AOD/model.json',modelLoaded);

   function modelLoaded(){
    console.log("modelLoaded");
   } 

   function IdentifyImg() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
   }

   function gotResult(error, result) {
    if(error) {console.error(error);}
    else {
        console.log(result);
        document.getElementById("Object").innerHTML = result[0].label;
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
   }

   

