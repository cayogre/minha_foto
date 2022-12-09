var ReconhecimentoFala = window.webkitSpeechRecognition
var reconhecer = new ReconhecimentoFala();
var Textbox = document.getElementById("textbox");
camera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function pressione(){
    Textbox.innerHTML= " ";
    reconhecer.start();
}
reconhecer.onresult = function(event) {
    console.log(event)
    var texto = event.results[0][0].transcript;
    Textbox.innerHTML = texto;
    if (texto =="tire minha selfie"){
      fala()
    }
}
function fala(){
    var sintese = window.speechSynthesis;
    var texto = "tire minha selfie a-a-a-a-a"
    var texto_falado = new SpeechSynthesisUtterance(texto);
    sintese.speak(texto_falado);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save();
    },5000);
}
function takeSelfie(){
    Webcam.snap(function(data_uri){
    document.getElementById("resultado").innerHTML = '<img id="selfieimage" src="'+data_uri+'"/>';
    })
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieimage").src;
    link.href = image
    link.click()
}