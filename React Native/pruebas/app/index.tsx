import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Banderas = () => {
  return (
    <SafeAreaView style={styles.container}>
       {/* Banderas en la parte superior */}
      <View style={styles.grupoSuperiorIzquierda}>
        {/* Bandera de Colombia */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: 'yellow' }]}>
              <Text style={[styles.text, { color: 'black' }]}>CO</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'blue' }]}>
              <Text style={styles.text}>LOM</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>BIA</Text>
            </View>
          </View>
        </View>
        
        {/* Bandera de Perú */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>PE</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: 'black' }]}>RU</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>🦙</Text>
            </View>
          </View>
        </View>
        
        {/* Bandera de Argentina */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>AR</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: '#F4B94E' }]}>GEN</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>TINA</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Banderas en el centro */}
      <View style={styles.horizontalFlagsContainer}>
        {/* Bandera de Colombia */}
        <View style={styles.banderaContainerHorizontal}>
          <View style={styles.banderaHorizontal}>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'yellow' }]}>
              <Text style={[styles.text, { color: 'black' }]}>CO</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'blue' }]}>
              <Text style={styles.text}>LOM</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>BIA</Text>
            </View>
          </View>
        </View>

        {/* Bandera de Perú */}
        <View style={styles.banderaContainerHorizontal}>
          <View style={styles.banderaHorizontal}>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>PE</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: 'black' }]}>RU</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>🦙</Text>
            </View>
          </View>
        </View>

        {/* Bandera de Argentina */}
        <View style={styles.banderaContainerHorizontal}>
          <View style={styles.banderaHorizontal}>
            <View style={[styles.franjaHorizontal, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>AR</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: '#F4B94E' }]}>GEN</Text>
            </View>
            <View style={[styles.franjaHorizontal, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>TINA</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Banderas en la parte inferior */}
      <View style={styles.grupoInferiorDerecha}>

        {/* Bandera de Colombia */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: 'yellow' }]}>
            <Text style={[styles.text, { color: 'black' }]}>CO</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'blue' }]}>
              <Text style={styles.text}>LOM</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>BIA</Text>
            </View>
          </View>
        </View>

        {/* Bandera de Perú */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>PE</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: 'black' }]}>RU</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>🦙</Text>
            </View>
          </View>
        </View>

        {/* Bandera de Argentina */}
        <View style={styles.banderaContainer}>
          <View style={styles.bandera}>
            <View style={[styles.franja, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>AR</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: 'white' }]}>
              <Text style={[styles.text, { color: '#F4B94E' }]}>GEN</Text>
            </View>
            <View style={[styles.franja, { backgroundColor: '#74ACDF' }]}>
              <Text style={styles.text}>TINA</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grupoSuperiorIzquierda: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  grupoInferiorDerecha: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  banderaContainer: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },
  bandera: {
    width: 100,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  franja: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horizontalFlagsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    alignSelf: 'center',
  },
  banderaContainerHorizontal: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    alignSelf: 'center',
  },
  banderaHorizontal: {
    width: 300,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  franjaHorizontal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Banderas;