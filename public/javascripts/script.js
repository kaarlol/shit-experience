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

setInterval(function() {
  var audioControlTop = window.innerHeight * Math.random();
  var audioControlLeft = window.innerWidth * Math.random();
  $("#audioControl").css({ top: audioControlTop, left: audioControlLeft });
}, 1500);
