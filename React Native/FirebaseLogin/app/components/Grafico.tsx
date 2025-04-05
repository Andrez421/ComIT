import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";

// Función para convertir grados a radianes
const degToRad = (degrees: number) => {
  return degrees * Math.PI / 180;
};

// Función para describir un arco SVG
const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number): string => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  
  return [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", x, y,
    "Z"
  ].join(" ");
};

// Función para convertir coordenadas polares a cartesianas
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number): { x: number; y: number } => {
  const angleInRadians = degToRad(angleInDegrees - 90);
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

interface GraficoProps {
  completed: number;
  pending: number;
  isLoading: boolean;
  error: string;
}

export default function Grafico({ completed, pending, isLoading, error }: GraficoProps) {
  if (isLoading) {
    return <Text>Cargando datos...</Text>;
  }
  
  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }
  
  if (completed === 0 && pending === 0) {
    return <Text>No hay tareas registradas</Text>;
  }
  
  return (
    <View style={styles.chartContainer}>
      <Svg width={250} height={250} viewBox="0 0 250 250">
        <G x="125" y="125">
          {/* Completadas - Verde */}
          {completed > 0 && (
            <Path
              d={describeArc(0, 0, 80, 0, (completed / (completed + pending)) * 360)}
              fill="#4CAF50"
            />
          )}
          {/* Pendientes - Naranja */}
          {pending > 0 && (
            <Path
              d={describeArc(0, 0, 80, (completed / (completed + pending)) * 360, 360)}
              fill="#FFA500"
            />
          )}
        </G>
      </Svg>
      
      {/* Leyenda */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#4CAF50' }]} />
          <Text>Completadas: {completed}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FFA500' }]} />
          <Text>Pendientes: {pending}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  legendContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  },
});