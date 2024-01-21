import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import Timer from "./Timer";

export default function Homepage() {
  const [money, setMoney] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{money} Monete</Text>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginBottom: 10,
  },
});
