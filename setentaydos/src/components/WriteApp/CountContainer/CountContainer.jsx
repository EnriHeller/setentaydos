import React from 'react'
import Countdown from "react-countdown";
import Style from './CountContainer.module.css';


const CountContainer = ({sec, callback})=>{
  const renderer = ({ hours, minutes, seconds, completed }) => {

    return(
      !completed?
      <div className={Style.appContainer}>
        <h2>{`0${minutes}:${seconds<10?`0${seconds}`:seconds}`}</h2>
        <img alt="random" src="https://picsum.photos/800/400"></img>
      </div>:<></>
    )

  };
  
  return(
    <Countdown
      date={Date.now() + sec*1000}
      renderer={renderer}
      onComplete={callback}
    />
  )
}

export default CountContainer;