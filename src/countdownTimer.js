import React from 'react'
import './countdownTimer.css'
const date = new Date()
let currentYear = date.getFullYear()
let nextYear = currentYear + 1
let countDownTime  

const countdownTimer = ({ data }) => {
  let s = "00:00:00.0000"
  let User_monthDate = data.birthDate.slice(4)
  let followingYear = nextYear + User_monthDate 
  let thisYear = currentYear + User_monthDate  
  let convertFollowing = Date.parse(followingYear)
  let convertThisYear = Date.parse(thisYear)
  let convertBirth = Date.parse(data.birthDate)
  let convertCurrentDate =  Date.parse(date)
  if (convertBirth <  convertCurrentDate) {
    countDownTime = new Date(convertFollowing).getTime()
  }
  else if (convertBirth > convertCurrentDate) {
    countDownTime = new Date(convertThisYear).getTime()
  
  }

  
  console.log(followingYear,currentYear)
  
  const myFunc = setInterval(function () {
   
    const now = new Date().getTime()
    const timeLeft = countDownTime - now;
    let days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60 ));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
   document.getElementById("seconds").innerHTML = seconds
   document.getElementById("minutes").innerHTML = minutes
     
     document.getElementById("hours").innerHTML = hours
     document.getElementById("days").innerHTML = days
    
    if (timeLeft < 0) {
      clearInterval(myFunc)
      document.getElementById("seconds").innerHTML = ""
      document.getElementById("minutes").innerHTML = ""
     
      document.getElementById("hours").innerHTML = ""
      document.getElementById("days").innerHTML = ""
      
    }

      
  }, 1000)
  console.log(data.birthDate)

  
    return (
        <>
        <h1 id="renaldo-bday">{data.firstName}'s <br/>birthday</h1>
          
      <div className="timer">
        
        <div id="time-labels">
     <div className="timer-boxes" id="days"></div>
          <p> Days</p>
    
     </div>
    
    <div id="time-labels" >
     <div className="timer-boxes" id="hours"></div>
          <p>Hours</p>
    
     </div>
    <div id="time-labels">
     <div className="timer-boxes" id="minutes"></div>
          <p>Minutes</p>
    
     </div>
    
    <div id="time-labels" >
            <div className="timer-boxes" id="seconds"></div>
          <p>Seconds</p>
    
     </div>
    
     
    </div>
        </>
    )
}

export default countdownTimer
