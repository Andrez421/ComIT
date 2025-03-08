import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="briefcase" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="graduation-cap" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="proyectos"
        options={{
          title: "Proyectos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="code" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}