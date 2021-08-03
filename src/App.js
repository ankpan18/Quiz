import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Clock from './components/Clock';
import Quiz from './components/MainQuiz';

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval=useRef();

  const startTimer = () => {
    const countDownDate = new Date('August 30,2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    },1000); 
  };

  useEffect(() => {
    startTimer();
    return()=>{
      clearInterval(interval.current);
    };
  });



// My 2nd attempt

  return (
  <div className="App">
     <Clock
    
    timerDays={timerDays}
    timerHours={timerHours}
    timerMinutes={timerMinutes}
    timerSeconds={timerSeconds}
  />
     <Quiz/>
   
    </div>
 );
 }
 export default App;

// function App() {
//   return (
//     <div className="App">
//         <Quiz/>
//         <Timer/>
//     </div>
//   );
// }

// export default App;
