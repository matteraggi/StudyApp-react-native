import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Shop from "../../components/Shop";
import { verticalScale } from "../../metrics";


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Shop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: verticalScale(50),
    backgroundColor: "#813405",
  },
});
