import React from "react";
import { Image, StyleSheet } from "react-native";
import Timer from "./Timer";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "./Themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
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
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "top",
    width: "100%",
    marginBottom: 15,
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
          source={require( "../assets/images/studyfactory-logo.png" )}
          width={38}
        />
        <View style={styles.money}>
          <Text style={styles.title}>{money}</Text>
          <Image
            source={ require("../assets/images/zampa-cane.png" )}
            width={38}
          />
        </View>
      </View>
      <Timer />
    </View>
  );
}
