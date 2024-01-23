import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "./Themed";
type ItemData = {
  id: number;
  url: string;
  cost: number;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

const Shop = () => {
  const [selectedId, setSelectedId] = React.useState(1);

  const DATA: ItemData[] = [
    {
      id: 1,
      url: "../assets/images/labrador-il-classico.png",
      cost: 0,
    },
    {
      id: 2,
      url: "../assets/images/golden-retriever-cucciolo.png",
      cost: 25,
    },
    {
      id: 3,
      url: "../assets/images/carlino-il-simpatico.png",
      cost: 50,
    },
  ];

  const Item = ({ item, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/images/carlino-il-simpatico.png")} alt={`dog-${item.id}`} width={250} />
      <View style={styles.cost}>
        <Text>{item.cost}</Text>
        <Image source={require("../assets/images/zampa-cane.png")} width={38} />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "none" : "#813405";
    const backgroundImage =
      item.id === selectedId
        ? "radial-gradient(#813405, #ba6632, #d98857)"
        : "none";
    const boxShadow = item.id === selectedId ? "0 0 40px #ba6632" : "none";
    const color = item.id === selectedId ? "#fbcb1c" : "white";

    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.separator} />
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => (
          <Item item={item} onPress={() => setSelectedId(item.id)} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#813405",
  },
  separator: {
    marginBottom: 200,
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
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 40,
  },
  cost: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
