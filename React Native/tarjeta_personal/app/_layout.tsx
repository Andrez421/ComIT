import React from 'react';
import { Tabs, usePathname, useRouter } from "expo-router";
import { StatusBar, View, Dimensions } from "react-native";
import { tema } from "../config/temas";
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';

const SWIPE_THRESHOLD = 50; // Umbral para considerar un deslizamiento válido

export default function RootLayout() {
  const pathname = usePathname();
  const router = useRouter();

  // Determinar el índice de la pestaña actual basado en la ruta
  const getTabIndex = (path: string) => {
    switch (path) {
      case '/': return 0;
      case '/experiencia': return 1;
      case '/estudios': return 2;
      case '/proyectos': return 3;
      default: return 0;
    }
  };

  const currentTabIndex = getTabIndex(pathname);

  // Función para navegar a la siguiente o anterior pestaña
  const navigateToTab = (direction: 'next' | 'prev') => {
    let newIndex = currentTabIndex;
    
    if (direction === 'next' && currentTabIndex < 3) {
      newIndex = currentTabIndex + 1;
    } else if (direction === 'prev' && currentTabIndex > 0) {
      newIndex = currentTabIndex - 1;
    }
    
    if (newIndex !== currentTabIndex) {
      switch (newIndex) {
        case 0:
          router.replace('/');
          break;
        case 1:
          router.replace('/experiencia');
          break;
        case 2:
          router.replace('/estudios');
          break;
        case 3:
          router.replace('/proyectos');
          break;
      }
    }
  };

  // Manejar el gesto de deslizamiento
  const handleGestureEvent = (event: any) => {
    const { translationX } = event.nativeEvent;
    
    if (Math.abs(translationX) > SWIPE_THRESHOLD) {
      if (translationX > 0) {
        // Deslizamiento hacia la derecha (pestaña anterior)
        navigateToTab('prev');
      } else {
        // Deslizamiento hacia la izquierda (pestaña siguiente)
        navigateToTab('next');
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={tema.colors.background.default} />
      <PanGestureHandler
        onEnded={handleGestureEvent}
        activeOffsetX={[-10, 10]} // Activar el gesto después de mover 10px en cualquier dirección
      >
        <View style={{ flex: 1 }}>
          <Tabs 
            screenOptions={{
              headerShown: false,
              header: () => null,
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
                headerShown: false,
                header: () => null,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen 
              name="experiencia" 
              options={{
                title: "Experiencia",
                headerShown: false,
                header: () => null,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="briefcase" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen 
              name="estudios" 
              options={{
                title: "Educación",
                headerShown: false,
                header: () => null,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="graduation-cap" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen 
              name="proyectos" 
              options={{
                title: "Proyectos",
                headerShown: false,
                header: () => null,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="code" size={24} color={color} />
                ),
              }}
            />
          </Tabs>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}