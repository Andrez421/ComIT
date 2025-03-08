import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SIZE = 80;

type TarjetaExperienciaProps = {
  logo: string;
  posicion: string;
  empresa: string;
  fecha: string;
  locacion: string;
  tecnologias: string;
};

export const TarjetaExperiencia = ({
  logo,
  posicion,
  empresa,
  fecha,
  locacion,
  tecnologias,
}: TarjetaExperienciaProps) => {
  return (
    <View style={styles.contenedor}>
      <Image
        style={styles.logo}
        source={{
          uri: logo || 'https://via.placeholder.com/80' // Fallback para logos vacíos
        }}
      />
      <View style={styles.contenedorDeContenido}>
        <Text style={styles.posicion}>{posicion}</Text>
        <Text style={styles.empresa}>{empresa}</Text>
        <Text style={styles.fecha}>{fecha}</Text>
        <Text style={styles.locacion}>{locacion}</Text>
        <Text style={styles.tecnologias}>{tecnologias}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 10,
  },
  logo: { width: SIZE, height: SIZE },
  contenedorDeContenido: { flex: 1, flexDirection: "column" },
  posicion: { fontWeight: "bold", fontSize: 14 },
  empresa: { fontSize: 12, lineHeight: 18 },
  fecha: { fontSize: 12, color: "#2f4f4f", lineHeight: 18 },
  locacion: {
    fontSize: 12,
    color: "#2f4f4f",
    lineHeight: 18,
    marginBottom: 10,
  },
  tecnologias: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18,
  },



});