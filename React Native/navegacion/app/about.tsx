import { View, StyleSheet, Button } from "react-native";
import { Link, router } from "expo-router";

export default function About() {
  const volver = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate("/");
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/">Navegar a Home</Link>
      <Button title="Volver a pantalla anterior" onPress={volver} />
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