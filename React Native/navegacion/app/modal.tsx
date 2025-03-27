import { Link, router } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modal</Text>
      {isPresented && <Link href="../">Volver (Dismiss modal)</Link>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});