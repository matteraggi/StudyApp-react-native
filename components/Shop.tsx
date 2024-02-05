import React from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MoneyContext } from "../context/money.context";
import { AnimalContext } from "../context/animals.context";
type ItemData = {
  id: number;
  name: string;
  cost: number;
};

type ItemProps = {
  item: ItemData;
};

const Shop = () => {
  const [selectedId, setSelectedId] = React.useState(1);
  const { money, setMoney } = React.useContext(MoneyContext);
  const { animal, setAnimal } = React.useContext(AnimalContext);
  const [animalIHave, setAnimalIHave] = React.useState<number[]>([]);

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

  const getAnimalIHave = async () => {
    try {
      const value = await AsyncStorage.getItem("animalIHave");
      if (value !== null) {
        setAnimalIHave(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem("money", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const storeBought = async (value: number[]) => {
    try {
      await AsyncStorage.setItem("animalIHave", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
    getAnimalIHave();
  }, []);

  const DATA: ItemData[] = [
    {
      id: 1,
      name: "labrador-il-classico",
      cost: 0,
    },
    {
      id: 2,
      name: "golden-retriever-cucciolo",
      cost: 25,
    },
    {
      id: 3,
      name: "carlino-il-simpatico",
      cost: 35,
    },
    {
      id: 4,
      name: "pinguino-san-valentino",
      cost: 50,
    },
    {
      id: 5,
      name: "bassotto-hot-dog",
      cost: 60,
    },
    {
      id: 6,
      name: "bulldog-bodyguard",
      cost: 75,
    },
    {
      id: 7,
      name: "carica-dei-104",
      cost: 104,
    },
    {
      id: 8,
      name: "carlino-lo-stile",
      cost: 115,
    },
    {
      id: 9,
      name: "golden-retriever-cravattato",
      cost: 130,
    },
    {
      id: 10,
      name: "king-dobermann",
      cost: 150,
    },
    {
      id: 11,
      name: "labrador-incazzato",
      cost: 175,
    },
    {
      id: 12,
      name: "golden-retriever-san-valentino",
      cost: 200,
    },
    {
      id: 13,
      name: "labrador-natale",
      cost: 215,
    },
    {
      id: 14,
      name: "shiba-inu",
      cost: 230,
    },
    {
      id: 15,
      name: "golden-retriever-leggendario",
      cost: 300,
    },
  ];

  const Item = ({ item }: ItemProps) => {
    const selectAnimal = () => {
      setSelectedId(item.id);
      setAnimal(item.name);
    };

    const buyAnimal = () => {
      if (money >= item.cost && !animalIHave.includes(item.id)) {
        setMoney(money - item.cost);
        storeData(money - item.cost);
        setAnimalIHave([...animalIHave, item.id]);
        storeBought([...animalIHave, item.id]);
      }
    };

    return (
      <View style={styles.listItem}>
        <View
          style={
            selectedId === item.id
              ? styles.image_container_selected
              : styles.image_container
          }
        >
          {item.name === "labrador-il-classico" && (
            <Image
              source={require(`../assets/images/labrador-il-classico.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "golden-retriever-cucciolo" && (
            <Image
              source={require(`../assets/images/golden-retriever-cucciolo.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "carlino-il-simpatico" && (
            <Image
              source={require(`../assets/images/carlino-il-simpatico.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "pinguino-san-valentino" && (
            <Image
              source={require(`../assets/images/pinguino-san-valentino.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "bassotto-hot-dog" && (
            <Image
              source={require(`../assets/images/bassotto-hot-dog.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "bulldog-bodyguard" && (
            <Image
              source={require(`../assets/images/bulldog-bodyguard.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "carica-dei-104" && (
            <Image
              source={require(`../assets/images/carica-dei-104.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "carlino-lo-stile" && (
            <Image
              source={require(`../assets/images/carlino-lo-stile.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "golden-retriever-cravattato" && (
            <Image
              source={require(`../assets/images/golden-retriever-cravattato.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "golden-retriever-leggendario" && (
            <Image
              source={require(`../assets/images/golden-retriever-leggendario.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "golden-retriever-san-valentino" && (
            <Image
              source={require(`../assets/images/golden-retriever-san-valentino.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "king-dobermann" && (
            <Image
              source={require(`../assets/images/king-dobermann.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "labrador-incazzato" && (
            <Image
              source={require(`../assets/images/labrador-incazzato.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "labrador-natale" && (
            <Image
              source={require(`../assets/images/labrador-natale.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
          {item.name === "shiba-inu" && (
            <Image
              source={require(`../assets/images/shiba-inu.png`)}
              alt={`dog-${item.id}`}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.cost}>
          {!animalIHave.includes(item.id) && (
            <>
              <Text style={styles.cost_text}>{item.cost}</Text>
              <Image
                source={require("../assets/images/zampa-cane.png")}
                width={38}
                style={{ marginRight: 15 }}
              />
            </>
          )}
          <View style={styles.button_container}>
            {animalIHave.includes(item.id) ? (
              <Pressable onPress={selectAnimal} style={styles.button}>
                <Text style={styles.button_text}>Select</Text>
              </Pressable>
            ) : (
              <Pressable onPress={buyAnimal} style={styles.button}>
                <Text style={styles.button_text}>Buy</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separator} />
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  cost_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
  },
  listItem: {
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  separator: {
    marginBottom: 120,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
  item: {
    verticalAlign: "middle",
    horizontalAlign: "middle",
    padding: 20,
    marginHorizontal: 8,
    borderRadius: 40,
  },
  cost: {
    backgroundColor: "#813405",
    gap: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  image: {
    width: 350,
    height: 350,
    backgroundColor: "#813405",
  },
  image_container_selected: {
    padding: 10,
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 4,
    backgroundColor: "#813405",
  },
  image_container: {
    padding: 10,
    borderRadius: 40,
    borderColor: "#813405",
    borderWidth: 4,
    backgroundColor: "#813405",
  },
  button_container: {
    backgroundColor: "#813405",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "#fff",
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
