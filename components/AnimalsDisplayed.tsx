import React from "react";
import { AnimalContext } from "../context/animals.context";
import { Image, StyleSheet } from "react-native";
import { View } from "./Themed";
import { horizontalScale, moderateScale, verticalScale } from "../metrics";

const AnimalsDisplayed = () => {
  const { animal, setAnimal } = React.useContext(AnimalContext);
  return (
    <View style={styles.bg}>
      {animal === "labrador-il-classico" ? (
        <Image
          source={require("../assets/images/labrador-il-classico.png")}
          alt={animal}
          style={{
            height: verticalScale(300),
            width: horizontalScale(250),
          }}
        />
      ) : null}
      {animal === "carlino-il-simpatico" ? (
        <Image
          source={require("../assets/images/carlino-il-simpatico.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "pinguino-san-valentino" ? (
        <Image
          source={require("../assets/images/pinguino-san-valentino.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "golden-retriever-cucciolo" ? (
        <Image
          source={require("../assets/images/golden-retriever-cucciolo.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "bassotto-hot-dog" ? (
        <Image
          source={require("../assets/images/bassotto-hot-dog.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "bulldog-bodyguard" ? (
        <Image
          source={require("../assets/images/bulldog-bodyguard.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "carica-dei-104" ? (
        <Image
          source={require("../assets/images/carica-dei-104.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "carlino-lo-stile" ? (
        <Image
          source={require("../assets/images/carlino-lo-stile.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "golden-retriever-cravattato" ? (
        <Image
          source={require("../assets/images/golden-retriever-cravattato.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "golden-retriever-leggendario" ? (
        <Image
          source={require("../assets/images/golden-retriever-leggendario.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "golden-retriever-san-valentino" ? (
        <Image
          source={require("../assets/images/golden-retriever-san-valentino.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "king-dobermann" ? (
        <Image
          source={require("../assets/images/king-dobermann.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "labrador-incazzato" ? (
        <Image
          source={require("../assets/images/labrador-incazzato.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "labrador-natale" ? (
        <Image
          source={require("../assets/images/labrador-natale.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
        />
      ) : null}
      {animal === "shiba-inu" ? (
        <Image
          source={require("../assets/images/shiba-inu.png")}
          alt={animal}
          style={{ height: verticalScale(300), width: horizontalScale(250) }}
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
