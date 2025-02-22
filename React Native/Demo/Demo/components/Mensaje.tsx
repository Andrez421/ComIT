import React from "react";
import { Text, StyleSheet } from "react-native";

interface MensajeProps {
    mensaje: string;
    color: "blue" | "red" | "green" | "yellow" | "purple" | "orange" | "black";
}

export function Mensaje({ mensaje, color }: MensajeProps) {
    const estilos = { ...styles.texto, color };

    return <Text style={estilos}>{mensaje}</Text>;
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
    },
});
