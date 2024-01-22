import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
});
