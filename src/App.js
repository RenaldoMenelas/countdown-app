
import './App.css';

const myFunc = setInterval(function(){
  const countDownTime = new Date("july 4, 2022 16:37:52").getTime();
  const now = new Date().getTime()
  const timeLeft = countDownTime - now;
  const days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60 ));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000 );
    
  if (timeLeft < 0) {
    clearInterval(myFunc)
    document.getElementById("seconds").innerHTML = ""
    document.getElementById("minutes").innerHTML = ""
   
    document.getElementById("hours").innerHTML = ""
    document.getElementById("days").innerHTML = ""
    document.getElementById("renaldo-bday").innerHTML ="Renaldo's Birthday has ended"
  }
  
   document.getElementById("seconds").innerHTML = seconds
   document.getElementById("minutes").innerHTML = minutes
   
    document.getElementById("hours").innerHTML = hours
    document.getElementById("days").innerHTML = days
    
  }, 1000)

function App() {
    
  return (
   <>
     <h1 id="renaldo-bday">Renaldo birthday</h1>
      
  <div class="timer">
    
    <div id="time-labels">
 <div class="timer-boxes" id="days">12</div>
      <p> Days</p>

 </div>

<div id="time-labels" >
 <div class="timer-boxes" id="hours">12</div>
      <p>Hours</p>

 </div>
<div id="time-labels">
 <div class="timer-boxes" id="minutes">12</div>
      <p>Minutes</p>

 </div>

<div id="time-labels" >
 <div class="timer-boxes" id="seconds">12</div>
      <p>Seconds</p>

 </div>

 
</div>
    </>
  );
}

export default App;
