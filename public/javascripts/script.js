$(document).ready(function() {
  var audio = document.getElementById("rickRoll");
  $("#audioControl").click(function() {
    if (audio.muted == true) {
      audio.muted = false;
      $("#audioControl").html("MUTE");
    } else {
      audio.muted = true;
      $("#audioControl").html("UNMUTE");
    }
  });
});

var audioControlTop;
var audioControlLeft;

setInterval(function() {
  audioControlTop = window.innerHeight * Math.random();
  audioControlLeft = window.innerWidth * Math.random();
  $("#audioControl").css({ top: audioControlTop, left: audioControlLeft });
}, 1500);
