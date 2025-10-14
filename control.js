"use strict";
const PausePlay = document.getElementById("pauseplay");
const Mute = document.getElementById("mute");
let playing = false;
let muted = false;

PausePlay.onclick = function() {
    if (playing) {
        PausePlay.innerHTML = "⏸︎";
    } else {
        PausePlay.innerHTML = "⏵︎";
    }
    playing = !playing;
};

Mute.onclick = function() {
    if (muted) {
        Mute.innerHTML = "🔊";
    } else {
        Mute.innerHTML = "🔇";
    }
    muted = !muted;
}

document.getElementById("forward").onclick = function() {
    alert("Skip");
}

document.getElementById("backward").onclick = function() {
    alert("Rewind");
}