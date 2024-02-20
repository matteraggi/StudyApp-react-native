import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import Shop from "../../components/Shop";

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
    paddingTop: 70,
    backgroundColor: "#813405",
  },
});
