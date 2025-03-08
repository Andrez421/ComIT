import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { tema } from "../config/temas";

export default function Projects() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.titulo}>Proyectos</Text>
          {/* Aquí puedes agregar tus proyectos */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: tema.colors.background.default,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: tema.spacing.md,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    color: tema.colors.primary.dark,
    marginBottom: tema.spacing.md,
  },
});
