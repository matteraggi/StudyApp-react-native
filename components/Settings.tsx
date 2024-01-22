import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>suono notifica si o no, interruzione schermo dopo quanto, valutazione appstore, condividi con amici, about</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
});
