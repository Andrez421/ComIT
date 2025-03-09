import React from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { TarjetaProyecto } from "@/components/TarjetaProyectos";
import { proyectos } from "@/data/proyectos";

export default function ProyectosScreen() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.proyecto}>Proyectos</Text>
          
          {proyectos.map((item, index) => (
            <TarjetaProyecto
              key={`${index}-${item.descripcion}`}
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
  proyecto: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
  },
});