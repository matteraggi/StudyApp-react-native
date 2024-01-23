import React from "react";
import { AnimalContext } from "../context/animals.context";
import { Image, StyleSheet } from "react-native";
import { View } from "./Themed";

const AnimalsDisplayed = () => {
  const { animal, setAnimal } = React.useContext(AnimalContext);
  const url = `../assets/images/labrador-il-classico.png`;
  return (
    <View style={styles.bg}>
      <Image
        source={require(url)}
        alt={animal}
        style={{
          flex: 1,
          resizeMode: "contain",
          width: 300,
          marginBottom: 150,
        }}
      />
    </View>
  );
};

export default AnimalsDisplayed;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "transparent",
  },
});
