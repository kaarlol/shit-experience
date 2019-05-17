$(document).ready(function() {
  var audio = document.getElementById("rickRoll");
  moveAudioControl();
  $("#audioControl").click(function() {
    if (audio.muted == true) {
      audio.muted = false;
      $("#audioControl").html("MUTE");
      moveAudioControl();
    } else {
      audio.muted = true;
      $("#audioControl").html("UNMUTE");
      moveAudioControl();
    }
  });
});

function moveAudioControl() {
  var audioControlTop = window.innerHeight * Math.random();
  var audioControlLeft = window.innerWidth * Math.random();
  $("#audioControl").css({ top: audioControlTop, left: audioControlLeft });
}
