import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SIZE = 80;

type TarjetaProyectoProps = {
  logo: string;
  proyecto: string;
  descripcion: string;
  tecnologias: string;
};

export const TarjetaProyecto = ({
  logo,
  proyecto,
  descripcion,
  tecnologias,
}: TarjetaProyectoProps) => {
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
        <Text style={styles.proyecto}>{proyecto}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
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
  proyecto: { fontWeight: "bold", fontSize: 14 },
  descripcion: { fontSize: 12, lineHeight: 18 },
  tecnologias: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18,
  },
});