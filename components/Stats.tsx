import React, { useEffect } from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import { MoneyContext } from "../context/money.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stats = () => {
  const { money, setMoney } = React.useContext(MoneyContext);
  const [studyMinutes, setStudyMinutes] = React.useState<number>(0);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("money");
      if (value !== null) {
        setMoney(JSON.parse(value));
        convertMoneyToStudyMinutes(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const convertMoneyToStudyMinutes = (moneytmp: number) => {
    let studyMinutes = moneytmp * 5;
    setStudyMinutes(studyMinutes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  separator: {
    marginBottom: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
});
