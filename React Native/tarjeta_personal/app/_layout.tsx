import { Tabs } from "expo-router";
import { StatusBar } from "react-native";
import { tema } from "@/config/temas";
import { FontAwesome } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={tema.colors.background.default} />
      <Tabs 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: tema.colors.background.paper,
            borderTopWidth: 1,
            borderTopColor: tema.colors.background.accent,
          },
          tabBarActiveTintColor: tema.colors.primary.main,
          tabBarInactiveTintColor: tema.colors.text.secondary,
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="experiencia" 
          options={{
            title: "Experiencia",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="briefcase" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="estudios" 
          options={{
            title: "Educación",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="graduation-cap" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="proyectos" 
          options={{
            title: "Proyectos",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="code" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}