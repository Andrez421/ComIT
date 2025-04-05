import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { VictoryPie } from "victory-native"; // Importar VictoryPie desde victory-native
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Svg from "react-native-svg"; // Asegurarse de que react-native-svg esté disponible

export default function Home() {
  const [taskStats, setTaskStats] = useState({ completed: 0, pending: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTaskStats();
  }, []);

  const fetchTaskStats = async () => {
    try {
      setIsLoading(true);
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);
      let completed = 0;
      let pending = 0;
      
      querySnapshot.forEach((doc) => {
        if (doc.data().completed) {
          completed++;
        } else {
          pending++;
        }
      });
      
      setTaskStats({ completed, pending });
    } catch (error) {
      setError("Error al cargar las tareas");
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/"); // Redirigir a la pantalla de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const navigateToTodos = () => {
    router.push("/(protected)/todos");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.chartSection}>
        {isLoading ? (
          <Text>Cargando datos...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (taskStats.completed === 0 && taskStats.pending === 0) ? (
          <Text>No hay tareas registradas</Text>
        ) : (
          <Svg width={250} height={250}>
            <VictoryPie
              standalone={false} // Asegurarse de que no cree su propio contenedor SVG
              data={[
                { x: "Completadas", y: taskStats.completed },
                { x: "Pendientes", y: taskStats.pending }
              ]}
              width={250}
              height={250}
              colorScale={["#4CAF50", "#FFA500"]}
              labels={({ datum }) => `${datum.x}\n${datum.y}`}
              labelRadius={({ innerRadius }) => innerRadius + 30}
              style={{
                labels: {
                  fill: "black",
                  fontSize: 14,
                  fontWeight: "bold"
                }
              }}
              padding={50}
            />
          </Svg>
        )}
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity style={[styles.button, styles.todoButton]} onPress={navigateToTodos}>
          <Text style={styles.buttonText}>Ir a Todos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "space-between", 
    padding: 20 
  },
  topSection: {
    alignItems: "center",
    paddingTop: 40
  },
  chartSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  middleSection: {
    alignItems: "center",
    marginBottom: 40
  },
  bottomSection: {
    alignItems: "center",
    paddingBottom: 40
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "black", 
    textAlign: "center" 
  },
  button: { 
    backgroundColor: "blue", 
    padding: 15, 
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center"
  },
  buttonText: { 
    color: "white", 
    fontSize: 16,
    fontWeight: "bold"
  },
  todoButton: {
    backgroundColor: '#4CAF50',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  },
});
