import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

const Music = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music</Text>
      <Text>work in progress...</Text>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A8643C",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
});
