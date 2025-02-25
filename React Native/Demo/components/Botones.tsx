import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

type BotonesProps = {
  onIncrement: () => void;
  onReset: () => void;
  resetTitle?: string;
  incrementDisabled?: boolean;
  contador: number;
  juegoTerminado: boolean;
};

export function Botones({ 
  onIncrement, 
  onReset, 
  resetTitle = "Reset",
  incrementDisabled = false,
  contador,
  juegoTerminado
}: BotonesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button 
          title="Tocar" 
          onPress={onIncrement}
          disabled={incrementDisabled}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title={resetTitle} 
          onPress={onReset}
        />
      </View>
      {juegoTerminado && (
        <Text style={styles.mensaje}>
          {contador < 60 ? "¡Buuu Lentica jijiji ! 🐌" : "¡Eres muy rápida, se gano una manoseada! 🚀"}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonContainer: {
    marginVertical: 5,
    height: 45,
    justifyContent: 'center',
  },
  mensaje: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    color: '#333',
    fontWeight: 'bold'
  }
});