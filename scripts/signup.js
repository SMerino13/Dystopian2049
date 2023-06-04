const vid = document.getElementById("bg-video");

let playedOnce = false;
// Default volume
vid.volume = 0.15;

vid.addEventListener('ended', function() {
    if (!playedOnce) {
        playedOnce = true;
        // Mute video after it has played once
        vid.muted = true;
        vid.play();
    }
    else{
        vid.play();
    }
});