import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import Homepage from "../../components/Homepage";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "13%",
    backgroundColor: "#813405",
  },
});
