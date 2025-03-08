import React from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";

export default function ExperienciaScreen() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.experiencia}>Experiencia Laboral</Text>
          
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
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#61DBFB",
    alignItems: "center",
    paddingVertical: 20,
  },
  experiencia: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
  },
});