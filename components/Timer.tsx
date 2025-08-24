import React, { useContext, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnimalsDisplayed from "./AnimalsDisplayed";
import { Audio } from "expo-av";
import { SoundContext } from "../context/sound.context";
import { verticalScale, horizontalScale } from "../metrics";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0); // tempo in secondi
  const [running, setRunning] = useState(false);
  const { money, setMoney } = useContext(MoneyContext);
  const { sound } = useContext(SoundContext);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const playSound = async () => {
    if (!sound) return;
    const { sound: s } = await Audio.Sound.createAsync(
      require("../assets/sounds/success.mp3"),
      { shouldPlay: true }
    );
    await s.replayAsync();
  };

  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem("money", JSON.stringify(value));
    }
    catch (e) {
      console.log(e);
    }
  };

  const storeStats = async (stats: any) => {
    try {
      var arrayOfStats = await AsyncStorage.getItem("stats");
      if (arrayOfStats === null) {
        await AsyncStorage.setItem("stats", JSON.stringify([stats]));
        return;
      }
      else {
        var parsedArray = JSON.parse(arrayOfStats);
        if (parsedArray) {
          parsedArray.push(stats);
          await AsyncStorage.setItem("stats", JSON.stringify(parsedArray));
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (running && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && running) {
      setRunning(false);
      playSound();
      const newStats = { time: intervalRef.current, day: new Date().toLocaleDateString(), };
      const newMoney = money + Math.floor(timeLeft / 5);
      storeStats(newStats); storeData(newMoney);
      setMoney(newMoney);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running, timeLeft]);


  const increaseTimer = () => {
    if (!running) setTimeLeft(prev => Math.min(prev + 5 * 60, 3 * 60 * 60));
  };

  const decreaseTimer = () => {
    if (!running) setTimeLeft(prev => Math.max(prev - 5 * 60, 0));
  };

  const startTimer = () => {
    if (timeLeft > 0) setRunning(true);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(0);
  };

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.timer}>
        <TouchableOpacity
          onPress={decreaseTimer}
          disabled={timeLeft === 0 || running}
          style={[
            styles.arrowButton,
            (timeLeft === 0 || running) && styles.disabledArrow,
          ]}
        >
          <Image source={require("../assets/images/arrow-down.png")} style={styles.arrowDown} />
        </TouchableOpacity>

        <Text style={styles.timerStyle}>
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </Text>

        <TouchableOpacity
          onPress={increaseTimer}
          disabled={running}
          style={[styles.arrowButton, running && styles.disabledArrow]}
        >
          <Image source={require("../assets/images/arrow-up.png")} style={styles.arrowUp} />
        </TouchableOpacity>
      </View>
      <AnimalsDisplayed />
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={resetTimer}
          disabled={timeLeft === 0 || !running}
          style={[styles.controlButton, (timeLeft === 0 || !running) && styles.disabledButton]}
        >
          <Image
            source={require("../assets/images/square.png")} // usa la tua icona quadrata
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        {running ? (
          <Image source={require("../assets/images/cibo-pieno.png")} style={styles.bowl} />
        ) : (
          <Image source={require("../assets/images/cibo-finito.png")} style={styles.bowl} />
        )}
        <TouchableOpacity
          onPress={startTimer}
          disabled={running || timeLeft === 0}
          style={[styles.controlButton, (running || timeLeft === 0) && styles.disabledButton]}
        >
          <Image
            source={require("../assets/images/triangle.png")} // usa la tua icona triangolo
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default Timer;

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%", // larghezza della riga dei pulsanti
    marginTop: verticalScale(30),
    alignItems: "center",
    backgroundColor: "#A8643C",
    gap: horizontalScale(30)
  },
  controlButton: {
    padding: horizontalScale(10),
    borderRadius: 10,
    backgroundColor: "#fbcb1c", // colore attivo dei pulsanti
  },
  controlIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: "contain",
  },
  disabledButton: {
    opacity: 0.5, // grigio / disattivato
    backgroundColor: "#ccc",
  },

  disabledArrow: {
    opacity: 0.5, // grigio / disattivato
  },

  timerStyle: {
    fontSize: verticalScale(35),
    fontWeight: "bold",
    backgroundColor: "#A8643C",
    color: "white",
    verticalAlign: "middle",
    marginVertical: 0,
  },
  bowl: {
    width: horizontalScale(110),
    height: verticalScale(110),
    resizeMode: "contain",
  },
  timer: {
    flexDirection: "row",
    backgroundColor: "#A8643C",
    height: verticalScale(40),
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 2,
    backgroundColor: "#A8643C",
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
  buttonreset: {
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 13,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "red",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  arrowDown: {
    flexDirection: "row",
    marginTop: 8,
    marginRight: 10,
    resizeMode: "contain",
    zIndex: 100,
    width: horizontalScale(35),
    height: verticalScale(35),
  },

  arrowUp: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
    resizeMode: "contain",
    zIndex: 100,
    width: horizontalScale(35),
    height: verticalScale(35),
  },

  arrowButton: {
    flexDirection: "row",
    resizeMode: "contain",
    zIndex: 100,
  },

  trasparentView: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
