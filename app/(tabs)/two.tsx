import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Settings from "../../components/Settings";
import { verticalScale } from "../../metrics";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Settings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: verticalScale(50),
    backgroundColor: "#A8643C",
  },
});
