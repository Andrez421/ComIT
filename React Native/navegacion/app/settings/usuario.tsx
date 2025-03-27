import { Link, useRootNavigationState } from "expo-router";
import { View, StyleSheet, Button } from "react-native";
import { useNavigationState } from "@react-navigation/native";

export default function Usuario() {
  const routes = useNavigationState((state) => state.routes);
  const rootState = useRootNavigationState();

  const verHistorial = () => {
    console.log("Rutas del Navegador actual:", routes);
    console.log("Rutas del Navegador Root:", JSON.stringify(rootState.routes));
  };

  return (
    <View style={styles.container}>
      <Link href="/">Ir al Root navigator Index</Link>
      <Link href="./index">Ir al Settings Index</Link>
      <Button title="Ver historial / segmentos" onPress={verHistorial} />
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