import { SafeAreaView, StyleSheet } from "react-native";
import { Game } from "../components/Game";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});