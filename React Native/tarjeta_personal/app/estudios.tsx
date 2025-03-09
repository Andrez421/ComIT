import React from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { TarjetaEstudio } from "@/components/TarjetaEstudio";
import { estudio } from "@/data/estudio";

export default function EstudiosScreen() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.estudio}>Estudios</Text>
          
          {estudio.map((item, index) => (
            <TarjetaEstudio
              key={`${index}-${item.institucion}`}
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
  estudio: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
  },
});