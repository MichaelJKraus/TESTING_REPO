const video = document.getElementById("lightningVideo");

var btn = document.getElementById("lightningButton");

function lightningVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}