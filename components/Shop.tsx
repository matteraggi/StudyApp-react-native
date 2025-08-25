import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { MoneyContext } from "../context/money.context";
import { AnimalContext } from "../context/animals.context";
import ShopItem from "./ShopItem";
import { horizontalScale, verticalScale } from "../metrics";
import { StyleSheet } from "react-native";
import { SHOP_ITEMS } from "../utils/shopData";
import { storage } from "../utils/storage";


const Shop = () => {
  const [selectedId, setSelectedId] = useState(1);
  const { money, setMoney } = useContext(MoneyContext);
  const { animal, setAnimal } = useContext(AnimalContext);
  const [animalIHave, setAnimalIHave] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setMoney(await storage.get("money", 0));
      setAnimalIHave(await storage.get("animalIHave", []));
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separator} />

      <FlatList
        style={styles.list}
        horizontal
        data={SHOP_ITEMS}
        renderItem={({ item }) => (
          <ShopItem
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            animalIHave={animalIHave}
            money={money}
            setMoney={setMoney}
            setAnimal={setAnimal}
            setAnimalIHave={setAnimalIHave}
            storeData={(val) => storage.set("money", val)}
            storeBought={(val) => storage.set("animalIHave", val)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={350}
        decelerationRate="fast"
        snapToAlignment="center"
      />

    </View>
  );
};

export default Shop;


const styles = StyleSheet.create({
  list: {
    marginHorizontal: 25,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A8643C",
  },
  separator: {
    height: verticalScale(100),
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
});
