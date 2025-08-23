import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000000ff", // colore icona selezionata
          tabBarInactiveTintColor: "#a7881aff", // colore icona non selezionata
          tabBarStyle: {
            backgroundColor: "#fbcb1c", // colore navbar
            paddingTop: 15,               // margine sopra la navbar
            height: 70,                  // puoi alzare l'altezza se vuoi
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="two"
          options={{
            title: "Options",
            tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="three"
          options={{
            title: "Stats",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="signal" color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="four"
          options={{
            title: "Study Music",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="music" color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="five"
          options={{
            title: "Shop",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="shopping-cart" color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
