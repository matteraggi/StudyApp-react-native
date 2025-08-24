import React from "react";
import { StyleSheet, Switch } from "react-native";
import { Text, View } from "./Themed";
import { SoundContext } from "../context/sound.context";

const Settings = () => {
  //interruzione schermo dopo quanto, valutazione appstore, condividi con amici, about
  const { sound, setSound } = React.useContext(SoundContext);
  const toggleSwitch = () => {
    setSound(!sound);
    console.log(sound);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.switch}>
        <Text style={styles.soundeffecttext}>Sound Effect: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "blue" }}
          thumbColor={sound ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={sound}
        />
      </View>
      <Text style={{ marginTop: 40 }}>Other settings in futures...</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A8643C",
  },
  switch: {
    flexDirection: "row",
    backgroundColor: "#A8643C",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 50,
  },
  soundeffecttext: {
    color: "#fff",
    fontSize: 25,
    marginRight: 10,
  },
});
