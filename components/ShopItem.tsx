import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { ItemData } from "../utils/shopData";
import { horizontalScale, verticalScale } from "../metrics";
import { StyleSheet } from "react-native";
import { imageMap } from "../utils/imageMap";
const ITEM_WIDTH = 300; // puoi scegliere tu (in px)


type Props = {
    item: ItemData;
    selectedId: number;
    animalIHave: number[];
    money: number;
    setSelectedId: (id: number) => void;
    setAnimal: (name: string) => void;
    setMoney: (value: number) => void;
    setAnimalIHave: (value: number[]) => void;
    storeData: (value: number) => void;
    storeBought: (value: number[]) => void;
};

const ShopItem = ({
    item,
    selectedId,
    animalIHave,
    money,
    setSelectedId,
    setAnimal,
    setMoney,
    setAnimalIHave,
    storeData,
    storeBought,
}: Props) => {
    const selectAnimal = () => {
        setSelectedId(item.id);
        setAnimal(item.name);
    };

    const buyAnimal = () => {
        if (money >= item.cost && !animalIHave.includes(item.id)) {
            const newMoney = money - item.cost;
            setMoney(newMoney);
            storeData(newMoney);

            const updatedAnimals = [...animalIHave, item.id];
            setAnimalIHave(updatedAnimals);
            storeBought(updatedAnimals);
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
                <Image source={imageMap[item.name]} style={styles.image} />
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
                        selectedId === item.id ? (
                            // Se l’elemento è selezionato, mostra tasto grigio non cliccabile
                            <Pressable style={[styles.button, styles.buttonSelected]} disabled>
                                <Text style={styles.button_text}>Selected</Text>
                            </Pressable>
                        ) : (
                            // Altrimenti mostra il tasto Select cliccabile
                            <Pressable onPress={selectAnimal} style={styles.button}>
                                <Text style={styles.button_text}>Select</Text>
                            </Pressable>
                        )
                    ) : (
                        // Se non è stato comprato, mostra Buy
                        <Pressable
                            onPress={buyAnimal}
                            style={[styles.button, money < item.cost && styles.buttonDisabled]}
                            disabled={money < item.cost}
                        >
                            <Text style={styles.button_text}>Buy</Text>
                        </Pressable>
                    )}
                </View>

            </View>
        </View>
    );
};

export default ShopItem;

const styles = StyleSheet.create({
    cost_text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700",
    },
    listItem: {
        width: ITEM_WIDTH,
        marginHorizontal: 25,
        alignItems: "center",
        backgroundColor: "#A8643C",
    },
    cost: {
        backgroundColor: "#A8643C",
        gap: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 35,
    },
    image: {
        backgroundColor: "#A8643C",
        height: verticalScale(280),
        width: horizontalScale(280),
        resizeMode: "contain",
    },
    image_container_selected: {
        padding: 10,
        borderRadius: 40,
        borderColor: "#fff",
        borderWidth: 4,
        backgroundColor: "#A8643C",
    },
    image_container: {
        padding: 10,
        borderRadius: 40,
        borderColor: "#A8643C",
        borderWidth: 4,
        backgroundColor: "#A8643C",
    },
    button_container: {
        backgroundColor: "#A8643C",
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
    buttonDisabled: {
        backgroundColor: "#ccc",   // grigio chiaro
        opacity: 0.6,              // leggermente trasparente
    },
    buttonSelected: {
        backgroundColor: "#888", // colore diverso per Selected
        opacity: 0.7,
    },
    button_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
});
