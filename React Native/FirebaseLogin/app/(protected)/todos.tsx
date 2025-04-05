import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { db } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "expo-router";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Todo[];        
        setTodos(list);
        setError(null);
      },
      (error) => {
        setError("Error al cargar los todos: " + error.message);
      }
    );

    return unsubscribe;
  }, []);

  const addTodo = async () => {
    try {
      if (task.trim()) {
        await addDoc(collection(db, "todos"), {
          title: task,
          completed: false,
        });
        setTask("");
        setError(null);
      }
    } catch (error: any) {
      setError("Error al agregar todo: " + error.message);
    }
  };

  const toggleComplete = async (id: string, completed: boolean) => {
    try {
      const todoRef = doc(db, "todos", id);
      await updateDoc(todoRef, {
        completed: !completed,
      });
      setError(null);
    } catch (error: any) {
      setError("Error al actualizar todo: " + error.message);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      setError(null);
    } catch (error: any) {
      setError("Error al eliminar todo: " + error.message);
    }
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={[styles.todoItem, { borderLeftWidth: 5, borderLeftColor: item.completed ? '#4CAF50' : '#FFA500' }]}>
      <TouchableOpacity 
        style={styles.todoContentWrapper}
        onPress={() => toggleComplete(item.id, item.completed)}
      >
        <View style={styles.todoContent}>
          <View style={[styles.statusIndicator, { backgroundColor: item.completed ? '#4CAF50' : '#FFA500' }]} />
          <Text
            style={{
              textDecorationLine: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
      <Button title="Borrar" onPress={() => deleteTodo(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        placeholder="Ingrese un nuevo Todo"
        value={task}
        onChangeText={setTask}
        style={styles.textInput}
      />
      <Button title="Agregar Todo" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 50,
    marginBottom: 20 // Añadimos margen inferior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 5,
    borderRadius: 5,     
    borderBottomColor: "#ddd",
    borderBottomWidth: 1, 
    elevation: 2,
    overflow: "hidden",
    
  },
  todoContentWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  todoContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  list: {
    maxHeight: '70%', // Limitamos la altura de la lista
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 'auto', // Empuja el botón hacia abajo
    marginBottom: 20, // Espacio adicional en la parte inferior
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
