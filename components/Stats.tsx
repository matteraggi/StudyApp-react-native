import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
    </View>
  );
};

export default Stats;

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
