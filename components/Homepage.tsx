import React from "react";
import { Image, StyleSheet } from "react-native";
import Timer from "./Timer";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "./Themed";
import { verticalScale } from "../metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    backgroundColor: "#A8643C",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
  },
  separator: {
    marginBottom: verticalScale(10),
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "top",
    width: "100%",
    marginBottom: verticalScale(10),
    backgroundColor: "#A8643C",
  },
  moneyImage: {
    verticalAlign: "middle",
  },
  money: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(10),
    backgroundColor: "#A8643C",
  },
});

export default function Homepage() {
  const { money, setMoney } = React.useContext(MoneyContext);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("money");
      if (value !== null) {
        setMoney(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          source={require("../assets/images/study_farm.png")}
          style={{ width: 160 }} // ✅ controlli qui le dimensioni
          resizeMode="contain"              // opzionale: ridimensiona senza tagliare
        />
        <View style={styles.money}>
          <Text style={styles.title}>{money}</Text>
          <Image
            source={require("../assets/images/zampa-cane.png")}
            style={{ width: 40 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Timer />
    </View>
  );
}
