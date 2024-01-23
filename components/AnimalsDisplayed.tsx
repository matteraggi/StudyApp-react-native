import React from "react";
import { AnimalContext } from "../context/animals.context";
import { Image, StyleSheet } from "react-native";
import { View } from "./Themed";

const AnimalsDisplayed = () => {
  const { animal, setAnimal } = React.useContext(AnimalContext);
  return (
    <View style={styles.bg}>
      {animal === "labrador-il-classico" ? (
        <Image
          source={require("../assets/images/labrador-il-classico.png")}
          alt={animal}
          style={{width: 300, height: 350}}
        />
      ) : null}
      {animal === "carlino-il-simpatico" ? (
        <Image
          source={require("../assets/images/carlino-il-simpatico.png")}
          alt={animal}
          style={{
            flex: 1,
            resizeMode: "contain",
            width: 300,
            marginTop: -300,
          }}
        />
      ) : null}
    </View>
  );
};

export default AnimalsDisplayed;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "transparent",
    marginTop: 50,
    marginBottom: 30,
  },
});
