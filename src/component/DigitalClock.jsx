import React, { useState } from 'react'
import  './style.css'
function DigitalClock() {

    let time =new Date().toLocaleTimeString();

    const [currentTime,setCurrentTime]=useState(time);

    const updateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime,1000)

  return (
    <>
        <h1>Time:  {currentTime}</h1>
    </>
  )
}

export default DigitalClock