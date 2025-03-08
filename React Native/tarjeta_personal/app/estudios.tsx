import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { TarjetaEstudio } from "@/components/TarjetaEstudio";
import { estudio } from "@/data/estudio";
import { tema } from "@/config/temas";

export default function Education() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.titulo}>Educación</Text>
          {estudio.map((item, index) => (
            <TarjetaEstudio
              key={`${index}-${item.empresa}`}
              {...item}
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
    ...tema.typography.h2,
    color: tema.colors.primary.dark,
    marginBottom: tema.spacing.md,
  },
});

