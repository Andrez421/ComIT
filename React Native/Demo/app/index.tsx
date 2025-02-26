import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Botones } from '../components/Botones';

type ContadorProps = {
  contador: number;
  tiempoRestante: number;
  estaActivo: boolean;
};

function Contador({ contador, tiempoRestante, estaActivo }: ContadorProps) {
  return (
    <View style={styles.contadorContainer}>
      <Text style={styles.contador}>{contador}</Text>
      {estaActivo ? (
        <Text style={styles.temporizador}>Tiempo restante: {tiempoRestante}s</Text>
      ) : (
        <Text style={styles.instrucciones}>
          Presiona "Comenzar" para ver cuántos toques puedes dar en 10 segundos
        </Text>
      )}
    </View>
  );
}

export default function Index() {
  const [contador, setContador] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [estaActivo, setEstaActivo] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    
    if (estaActivo && tiempoRestante > 0) {
      intervalo = setInterval(() => {
        setTiempoRestante(prev => prev - 1);
      }, 1000);
    } else if (tiempoRestante === 0) {
      setEstaActivo(false);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [estaActivo, tiempoRestante]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const pressHandler = () => {
    if (estaActivo) {
      setContador(prevContador => prevContador + 1);
      setBackgroundColor(getRandomColor());
    }
  };

  const iniciarJuego = () => {
    setContador(0);
    setTiempoRestante(10);
    setEstaActivo(true);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Contador 
        contador={contador} 
        tiempoRestante={tiempoRestante} 
        estaActivo={estaActivo}
      />
      <Botones 
        onIncrement={pressHandler} 
        onReset={iniciarJuego} 
        resetTitle="Comenzar"
        incrementDisabled={!estaActivo}
        contador={contador}
        juegoTerminado={tiempoRestante === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  contadorContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contador: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  temporizador: {
    fontSize: 24,
    color: '#666',
  },
  instrucciones: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
