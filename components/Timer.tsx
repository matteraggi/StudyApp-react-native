import { useRef, useState } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const secondsRef = useRef(3);
  const minutesRef = useRef(1);
  const hoursRef = useRef(0);
  const [finished, setFinished] = useState(false);
  const [timeInterval, setTimeInterval] = useState<any>();

  // Function to start the timer
  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {

        if (secondsRef.current === 0 && minutesRef.current !== 0) {
          setMinutes((prevTime) => {
            return prevTime === 0 ? 0 : prevTime - 1;
          });
          minutesRef.current = minutesRef.current - 1;
          setSeconds(60);
          secondsRef.current = 60;
        } else if (
          secondsRef.current === 0 &&
          minutesRef.current === 0 &&
          hoursRef.current !== 0
        ) {
          setHours((prevTime) => {
            return prevTime === 0 ? 0 : prevTime - 1;
          });
          hoursRef.current--;
          setMinutes(60);
          setSeconds(60);
          secondsRef.current = 60;
          minutesRef.current = 60;
        } else if (
          secondsRef.current === 0 &&
          minutesRef.current === 0 &&
          hoursRef.current === 0
        ) {
          setFinished(true);
        }
        setSeconds((prevTime) => {
          return prevTime === 0 ? 0 : prevTime - 1;
        });
        if (secondsRef.current !== 0) {
          secondsRef.current = secondsRef.current - 1;
        }
      }, 1000)
    );
  };

  // Function to pause the timer
  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval);
  };

  // Render the timer and buttons in the component
  return (
    <div className="App">
      <h3>
        Timer:{hours} : {minutes} : {seconds}
      </h3>
      <div className="btn-wrapper">
        {/* Button to start the timer */}
        <button onClick={startTimer}>Start</button>
        {/* Button to pause the timer */}
        <button onClick={pauseTimer}>Pause</button>
      </div>
    </div>
  );
};

export default Timer;
