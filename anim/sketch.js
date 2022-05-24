import * as Tone from 'tone'

let startAudioBtn = document.getElementById("startAudioButton");

let loopBeat;
let bassSynth;

window.setup = function setup() {
  let canv = createCanvas(1080, 720);

  alert("Please click the start audio button if there's no sound playing");

  bassSynth = new Tone.MembraneSynth().toDestination();

  loopBeat = new Tone.Loop(song, "4n");
  Tone.Transport.start();
  loopBeat.start();
}

window.draw = function draw() {
  background(255, 0, 0);
}

startAudioBtn.addEventListener("click", async ev =>{

  await Tone.start();
  alert("Audio is ready");

});

function song(time){
  bassSynth.triggerAttackRelease("c1", "8n", time);
}