import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Music from "../../components/Music";
import { verticalScale } from "../../metrics";

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
    paddingTop: verticalScale(50),
    backgroundColor: "#A8643C"
  },
});
