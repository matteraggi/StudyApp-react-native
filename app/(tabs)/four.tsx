import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Music from "../../components/Music";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Music />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 15,
    backgroundColor: "#813405"
  },
});
