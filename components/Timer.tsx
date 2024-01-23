import React, { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnimalsDisplayed from "./AnimalsDisplayed";
import ArrowUp from "../assets/icons/ArrowUp";
import ArrowDown from "../assets/icons/ArrowDown";

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
    console.log("pressed");
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
        <TouchableOpacity onPress={increaseTimer}>
          <ArrowUp style={styles.arrowleft} />
        </TouchableOpacity>
        <Text style={styles.timerStyle}>
          {hours === 0 ? "00" : null}
          {hours === 1 ? "01" : null}
          {hours === 2 ? "02" : null}
          {hours === 3 ? "03" : null}
          {hours === 4 ? "04" : null}
          {hours === 5 ? "05" : null}
          {hours === 6 ? "06" : null}
          {hours === 7 ? "07" : null}
          {hours === 8 ? "08" : null}
          {hours === 9 ? "09" : null}
          {hours > 9 ? hours : null}:{minutes === 0 ? "00" : null}
          {minutes === 1 ? "01" : null}
          {minutes === 2 ? "02" : null}
          {minutes === 3 ? "03" : null}
          {minutes === 4 ? "04" : null}
          {minutes === 5 ? "05" : null}
          {minutes === 6 ? "06" : null}
          {minutes === 7 ? "07" : null}
          {minutes === 8 ? "08" : null}
          {minutes === 9 ? "09" : null}
          {minutes > 9 ? minutes : null}:{seconds === 0 ? "00" : null}
          {seconds === 1 ? "01" : null}
          {seconds === 2 ? "02" : null}
          {seconds === 3 ? "03" : null}
          {seconds === 4 ? "04" : null}
          {seconds === 5 ? "05" : null}
          {seconds === 6 ? "06" : null}
          {seconds === 7 ? "07" : null}
          {seconds === 8 ? "08" : null}
          {seconds === 9 ? "09" : null}
          {seconds > 9 ? seconds : null}
        </Text>
        <TouchableOpacity onPress={decreaseTimer}>
          <ArrowDown style={styles.arrowright} />
        </TouchableOpacity>
      </View>
      <AnimalsDisplayed />
      <View style={styles.trasparentView}>
        {finished ? (
          <Image
            source={require("../assets/images/cibo-finito.png")}
            style={{ width: 150, height: 150 }}
          />
        ) : (
          <Image
            source={require("../assets/images/cibo-pieno.png")}
            style={{ width: 150, height: 150 }}
          />
        )}
      </View>
      {finished ? (
        <TouchableOpacity onPress={startTimer} style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      ) : null}
      {!finished ? (
        <TouchableOpacity onPress={resetTimer} style={styles.button}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      ) : null}
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
    flexDirection: "row",
    verticalAlign: "middle",
    marginTop: 8,
    marginRight: 10,
    resizeMode: "contain",
    zIndex: 100,
  },
  arrowright: {
    flexDirection: "row",
    verticalAlign: "middle",
    marginTop: 8,
    marginLeft: 10,
    resizeMode: "contain",
    zIndex: 100,
  },
  trasparentView: {
    backgroundColor: "transparent",
  },
  text:{
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  }
});
