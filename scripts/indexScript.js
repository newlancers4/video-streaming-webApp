function play(){
    var cls = document.getElementById("play-icon").getAttribute("class");
    if(cls == "play"){
        document.getElementById("play-icon").setAttribute("class","pause");
    }
    else{
        document.getElementById("play-icon").setAttribute("class","play");
    }
}
function fullscreen(){
    var fs = document.getElementById("video-screen").getAttribute("class");
    if(fs == "playback"){
        document.getElementById("video-screen").setAttribute("class","fullscreen-playback");
        document.body.style.overflow = "hidden";                
    }
    else{
        document.getElementById("video-screen").setAttribute("class","playback");
        document.body.style.overflow = "auto";                
    }
}