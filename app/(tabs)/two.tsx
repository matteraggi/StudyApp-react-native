import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Settings from '../../components/Settings';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Settings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    backgroundColor: "#813405"
  },
});
