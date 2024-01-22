import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "./Themed";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnimalsDisplayed from "./AnimalsDisplayed";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(0);
  const minutesRef = useRef(0);
  const hoursRef = useRef(0);
  const [finished, setFinished] = useState(true);
  const finishedRef = useRef(true);
  const [timeInterval, setTimeInterval] = useState<any>();
  const studyMinutesRef = useRef(0);
  const { money, setMoney } = React.useContext(MoneyContext);

  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem("money", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

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
    studyMinutesRef.current = hoursRef.current * 60 + minutesRef.current;
    setFinished(false);
    finishedRef.current = false;

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
          if (finishedRef.current === false) {
            storeData(money + studyMinutesRef.current / 5);
            setMoney(money + studyMinutesRef.current / 5);
            console.log(money + studyMinutesRef.current / 5);
          }
          setFinished(true);
          finishedRef.current = true;
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
  const resetTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval);
    setFinished(true);
    setSeconds(0);
    secondsRef.current = 0;
    setMinutes(0);
    minutesRef.current = 0;
    setHours(0);
    hoursRef.current = 0;
    finishedRef.current = true;
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
        <p onClick={increaseTimer}>
          <img
            src="../assets/icons/ArrowUp.svg"
            width={45}
            style={styles.arrowleft}
          />
        </p>
        <h3 style={styles.timerStyle}>
          {hours === 0 && "00"}
          {hours === 1 && "01"}
          {hours === 2 && "02"}
          {hours === 3 && "03"}
          {hours === 4 && "04"}
          {hours === 5 && "05"}
          {hours === 6 && "06"}
          {hours === 7 && "07"}
          {hours === 8 && "08"}
          {hours === 9 && "09"}
          {hours > 9 && hours}:{minutes === 0 && "00"}
          {minutes === 1 && "01"}
          {minutes === 2 && "02"}
          {minutes === 3 && "03"}
          {minutes === 4 && "04"}
          {minutes === 5 && "05"}
          {minutes === 6 && "06"}
          {minutes === 7 && "07"}
          {minutes === 8 && "08"}
          {minutes === 9 && "09"}
          {minutes > 9 && minutes}:{seconds === 0 && "00"}
          {seconds === 1 && "01"}
          {seconds === 2 && "02"}
          {seconds === 3 && "03"}
          {seconds === 4 && "04"}
          {seconds === 5 && "05"}
          {seconds === 6 && "06"}
          {seconds === 7 && "07"}
          {seconds === 8 && "08"}
          {seconds === 9 && "09"}
          {seconds > 9 && seconds}
        </h3>
        <p onClick={decreaseTimer}>
          <img
            src="../assets/icons/ArrowDown.svg"
            width={45}
            style={styles.arrowright}
          />
        </p>
      </View>
      <AnimalsDisplayed />
      {finished ? (
        <img src="../assets/images/cibo-finito.png" width={150} />
      ) : (
        <img src="../assets/images/cibo-pieno.png" width={150} />
      )}
      {finished && (
        <button onClick={startTimer} style={styles.button}>
          Start
        </button>
      )}
      {!finished && (
        <button onClick={resetTimer} style={styles.button}>
          Reset
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
    backgroundColor: "#813405",
    color: "white",
    verticalAlign: "middle",
    marginVertical: 0,
  },
  timer: {
    flexDirection: "row",
    backgroundColor: "#813405",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 2,
    width: 300,
    backgroundColor: "#813405",
  },
  button: {
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 13,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fbcb1c",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  arrowleft: {
    verticalAlign: "middle",
    marginTop: 8,
    marginRight: 10,
  },
  arrowright: {
    verticalAlign: "middle",
    marginTop: 8,
    marginLeft: 10,
  },
});
