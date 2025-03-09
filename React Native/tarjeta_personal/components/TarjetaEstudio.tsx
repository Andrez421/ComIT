import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SIZE = 80;

type TarjetaEstudioProps = {
  logo: string;
  estudio: string;
  titulo: string;
  institucion: string;
  fecha: string;
};

export const TarjetaEstudio = ({
  logo,
  estudio,
  titulo,
  institucion,
  fecha,
}: TarjetaEstudioProps) => {
  return (
    <View style={styles.contenedor}>
      <Image
        style={styles.logo}
        source={{
          uri: logo,
        }}
        resizeMode="contain"
      />
      <View style={styles.contenedorDeContenido}>
        <Text style={styles.estudio}>{estudio}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.institucion}>{institucion}</Text>
        <Text style={styles.fecha}>{fecha}</Text>
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
  estudio: { fontWeight: "bold", fontSize: 14 },
  titulo: { fontSize: 13, fontWeight: "bold", lineHeight: 18 },
  institucion: { fontSize: 12, lineHeight: 18 },
  fecha: { fontSize: 12, color: "#2f4f4f", lineHeight: 18, marginBottom: 10 },
});