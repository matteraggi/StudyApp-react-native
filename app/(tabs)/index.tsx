import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import Homepage from "../../components/Homepage";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ciao</Text>
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
