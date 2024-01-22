import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import Timer from "./Timer";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        <img src="../assets/images/studyfactory-logo.png" style={styles.moneyImage}/>
        <View style={styles.money}>
          <Text style={styles.title}>{money}</Text>
          <img
            src="../assets/images/zampa-cane.png"
            width={38}
            style={styles.moneyImage}
          />
        </View>
      </View>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
  },
  separator: {
    marginBottom: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    verticalAlign: "top",
    backgroundColor: "#813405",
  },
  moneyImage: {
    verticalAlign: "middle",
  },
  money: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#813405",
  },
});
