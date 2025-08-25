import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
    get: async <T>(key: string, fallback: T): Promise<T> => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (e) {
            console.error(`Error reading ${key}`, e);
            return fallback;
        }
    },
    set: async (key: string, value: any) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error saving ${key}`, e);
        }
    },
};
