import { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "./Themed";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(0);
  const minutesRef = useRef(0);
  const hoursRef = useRef(0);
  const [finished, setFinished] = useState(true);
  const [timeInterval, setTimeInterval] = useState<any>();

  // Function to start the timer
  const startTimer = () => {
    if (
      secondsRef.current === 0 &&
      minutesRef.current === 0 &&
      hoursRef.current === 0
    ) {
      console.log("cannot start");
      return;
    }

    setFinished(false);

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
    setFinished(true);
  };

  const increaseTimer = () => {
    if (finished && hoursRef.current !== 3) {
      setMinutes((prevTime) => {
        return prevTime + 5;
      });
      minutesRef.current = minutesRef.current + 5;
      if (minutesRef.current === 60) {
        setMinutes(0);
        minutesRef.current = 0;
        setHours((prevTime) => {
          return prevTime + 1;
        });
        hoursRef.current++;
      }
    }
  };

  const decreaseTimer = () => {
    if (finished) {
      setMinutes((prevTime) => {
        return prevTime - 5;
      });
      minutesRef.current = minutesRef.current - 5;
      if (minutesRef.current === -5 && hoursRef.current !== 0) {
        setMinutes(55);
        minutesRef.current = 55;
        setHours((prevTime) => {
          return prevTime - 1;
        });
        hoursRef.current--;
      } else if (minutesRef.current === -5 && hoursRef.current === 0) {
        setMinutes(0);
        minutesRef.current = 0;
      }
    }
  };

  // Render the timer and buttons in the component
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.timer}>
        <p onClick={increaseTimer}>^</p>
        <h3 style={styles.timerStyle}>
          {hours === 0 ? "00" : hours} : {minutes === 0 ? "00" : minutes} :{" "}
          {seconds === 0 ? "00" : seconds}
        </h3>
        <p onClick={decreaseTimer}>v</p>
      </View>
      {finished && (
        <button onClick={startTimer} style={styles.button}>
          Start
        </button>
      )}
      {!finished && (
        <button onClick={pauseTimer} style={styles.button}>
          Pause
        </button>
      )}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 2,
    width: 300,
  },
  button: {
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 13,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    fontSize: 20,
  },
});
