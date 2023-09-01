let hr = document.getElementById('hour');
let min = document.getElementById('minut');
let sec = document.getElementById('second');

function displayTime (){
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime, 1000);

// stopWatch

let timerDisplay = document.querySelector('.timerDisplay');
let startBtn =document.getElementById('startBtn');
let stopBtn =document.getElementById('stopBtn');
let resetBtn =document.getElementById('resetBtn');

let mins = 0o0 ;
let secs = 0o0 ;
let msec = 0o0 ;

let timerId = null;

startBtn.addEventListener('click', function(){
  if(timerId !== null){
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 1000);
});

stopBtn.addEventListener('click', function(){ 
    clearInterval(timerId);
});
resetBtn.addEventListener('click', function(){
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  mins = secs = msec = 0o0;
});

function startTimer(){
  msec++;
  console.log(' msec'+ msec);
  if(msec == 100){
    msec = 0o0;
    secs++;
    console.log(' msec'+secs);
    if(secs == 60){
      secs = 0o0;
      mins++;
        }
        console.log(' msec'+mins);
  }
  let secsString = secs < 0o0 ? `0$(secs)` : secs;
  let minsString = mins < 0o0 ? `0$(mins)` : mins;
  let msecString = msec < 0o0 ? `0$(msec)` : msec;
  
  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}