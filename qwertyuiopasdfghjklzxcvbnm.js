var previsão ="";
var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );
function cap()
{Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('resultado').innerHTML = '<img src="'+data_uri+'"/>';
    console.log("qwertyuiopasdfghjklzxcvbnm");
} );}
console.log("ml5 versao",ml5.version);