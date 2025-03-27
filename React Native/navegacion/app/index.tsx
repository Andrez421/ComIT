import { View, StyleSheet, Button } from "react-native";
import { Link, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      <Link href="/about">Navegar a About</Link>
      <Link href="/settings">Navegar a Settings</Link>
      <Link href="/modal">Navegar a Modal</Link>
      <Button title="Abrir Drawer" onPress={toggleDrawer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});