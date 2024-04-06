import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Stats from "../../components/Stats";
import { verticalScale } from "../../metrics";


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Stats />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: verticalScale(50),
    backgroundColor: "#813405"
  },
});
