import React from "react";
import { AnimalContext } from "../context/animals.context";
import { StyleSheet } from "react-native";

const AnimalsDisplayed = () => {
  const { animal, setAnimal } = React.useContext(AnimalContext);
  return (
    <div style={styles.separator}>
      <img src={`../assets/images/${animal}.png`} alt={animal} width={400} />
    </div>
  );
};

export default AnimalsDisplayed;

const styles = StyleSheet.create({
  separator: {
    marginTop: 40,
  },
});
