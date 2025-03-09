import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SIZE = 250;

type TarjetaProyectoProps = {
  logo: any; // Changed from string to any to support both require() and URI
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
      <View style={styles.contenedorDeContenido}>
        <Text style={styles.proyecto}>{proyecto}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <Text style={styles.tecnologias}>{tecnologias}</Text>
      </View>
      <Image
        style={styles.logo}
        source={typeof logo === 'string' ? { uri: logo } : logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 15,
  },
  logo: { 
    width: SIZE, 
    height: SIZE,
    marginTop: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
  },
  contenedorDeContenido: { 
    flex: 1, 
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
  },
  proyecto: { 
    fontWeight: "bold", 
    fontSize: 16 
  },
  descripcion: { 
    fontSize: 14, 
    lineHeight: 20,
    textAlign: "center",
    marginVertical: 5
  },
  tecnologias: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
  },
});