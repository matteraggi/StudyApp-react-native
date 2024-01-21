import React from "react";
import ShowCounter from "./ShowCounter";
import { useEffect, useState } from "react";

const CountDown = ({ targetDate }) => {
  const [pause, setPause] = useState(false);
  const useCountDown = (deadline: any) => {
    // Time is in seconds
    const [time, setTime] = useState(
      Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
    );

    const decrement = () => {
      setTime((prevTime) => {
        return prevTime === 0 ? 0 : prevTime - 1;
      });
    };

    useEffect(() => {
      if (!pause) {
        const id = setInterval(decrement, 1000);
        return () => clearInterval(id);
      }
    }, []);

    const format = (num: any) => {
      return num < 10 ? "0" + num : num.toString();
    };

    return {
      hours: format(Math.floor((time / 3600) % 24)),
      minutes: format(Math.floor((time / 60) % 60)),
      seconds: format(time % 60),
    };
  };

  const { hours, minutes, seconds } = useCountDown(targetDate);

  const onPause = () => {
    setPause(true);
  };

  if (hours + minutes + seconds <= 0) {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  } else {
    return (
      <>
        <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
        <button onClick={onPause}>Pausa</button>
      </>
    );
  }
};
export default CountDown;
