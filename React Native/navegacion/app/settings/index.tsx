import { Link, router } from "expo-router";
import { View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/">Ir al Root navigator Index</Link>
      <Link href="/settings/usuario">Ir al Settings Usuario</Link>
      <Link 
        href={{ 
          pathname: "/settings/[id]", 
          params: { 
            id: 10 
            } 
          }}
      >
        Pasamos el ID 10</Link>
      <Link
        href={{
          pathname: "/settings/[id]",
          params: {
            id: 10,
          },
        }}
      >
        Pasamos el ID 10 con params
      </Link>
      <Button
        title="Pasamos el ID 10"
        onPress={() =>
          router.navigate({
            pathname: "/settings/[id]",
            params: {
              id: 10,
              name: "Nicolas",
            },
          })
        }
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