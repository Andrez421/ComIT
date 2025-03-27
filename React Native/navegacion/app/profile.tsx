import { View, StyleSheet, Button } from "react-native";
import { Link, router } from "expo-router";
import { useNavigationState } from "@react-navigation/native";

export default function Profile() {
  const routes = useNavigationState((state) => state.routes);

  const navegarAHome = () => {
    console.log(routes);
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <Link href="/">Navegar a Home</Link>
      <Button
        title="Navegar a Home de manera imperativa (usando router)"
        onPress={navegarAHome}
      />
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