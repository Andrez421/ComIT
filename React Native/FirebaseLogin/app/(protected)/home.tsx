import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";

export default function Home() {
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
        <Text style={styles.title}>home</Text>
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
  middleSection: {
    alignItems: "center"
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
});
