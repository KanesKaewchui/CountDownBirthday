import React, { useState, useEffect } from 'react';
import './App.css'

const CountdownTimer = () => {
  // State
  const [birthDate, setBirthDate] = useState(' 9 JAN 2024 ');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Function to calculate countdown values
  const getCountdown = (birthDate) => {
    let now = new Date().getTime();
    let timeCount = new Date(birthDate).getTime() - now; // convert milliseconds to seconds

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24)); // convert seconds to days
    let hours = Math.floor((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // convert seconds to hours
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60)); // convert seconds to minutes
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000); // convert seconds

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setCountdown(getCountdown(birthDate));
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalTask);
  }, [birthDate]);

  return (
    <div className='container'>
      <div className='countdown'>
        <h2 className='title'>Countdown Birthday </h2>
        <div className='container-input'>
          <label className='input'>Enter Your Birthdate</label>
        </div>
        <div className='container-channel'>
          <input 
            className='channel'
            type='text'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className='container-countdown'>
          <div className='day'>
            <div className='time'>
              {countdown.days}
            </div>
            <div className='unit'>
              days
            </div>
          </div>
          <div className='hour'>
            <div className='time'>
              {countdown.hours}
            </div>
            <div className='unit'>
              hours
            </div>
          </div>
          <div className='minute'>
            <div className='time'>
              {countdown.minutes}
            </div>
            <div className='unit'>
              minutes
            </div>
          </div>
          <div className='second'>
            <div className='time'>
              {countdown.seconds}
            </div>
            <div className='unit'>
              seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;




