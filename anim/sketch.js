import * as Tone from 'tone';
import p5 from 'p5';

let sketch = function(p5){
  let startAudioBtn = document.getElementById("startAudioButton");

  let loopBeat; 
  let bassSynth;
  
  let imgScreen;
  
  p5.preLoad = function preLoad(){
    
  }
  
  p5.setup = function setup() {
    let canv = p5.createCanvas(1080, 720); 
    imgScreen = p5.loadImage('./anim/assets/showCase1.png');
  
    alert("Please click the start audio button if there's no sound playing");
  
    bassSynth = new Tone.MembraneSynth().toDestination();
  
    loopBeat = new Tone.Loop(song, "4n");
  
    console.log(imgScreen);
    Tone.Transport.start();
    loopBeat.start();
  }
  
  p5.draw = function draw() {
    p5.image(imgScreen, 0, 0);
  }
  
  startAudioBtn.addEventListener("click", async ev =>{
  
    await Tone.start();
    alert("Audio is ready");
  
  });
  
  function song(time){
    bassSynth.triggerAttackRelease("c1", "8n", time);
  }
}



let localp5 = new p5(sketch);