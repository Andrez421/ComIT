import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { TarjetaExperiencia } from "../components/TarjetaExperiencia";
import { experiencias } from "../data/experiencia";
import { tema } from "../config/temas";

export default function Experience() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.titulo}>Experiencia Laboral</Text>
          {experiencias.map((experiencia, index) => (
            <TarjetaExperiencia
              key={`${index}-${experiencia.empresa}`}
              {...experiencia}
            />
          ))}
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

