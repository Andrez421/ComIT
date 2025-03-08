import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Tabs, usePathname, useRouter } from "expo-router";
import { StatusBar, View, StyleSheet, Dimensions } from "react-native";
import { tema } from "../config/temas";
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, runOnJS, Easing, cancelAnimation } from 'react-native-reanimated';

export default function RootLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const isGestureActive = useSharedValue(false);
  const velocityTracker = useSharedValue({ x: 0, y: 0 });

  // Determinar el índice de la pestaña actual basado en la ruta
  const getTabIndex = useCallback((path: string): number => {
    switch (path) {
      case '/': return 0;
      case '/experiencia': return 1;
      case '/estudios': return 2;
      case '/proyectos': return 3;
      default: return 0;
    }
  }, []);

  // Actualizar el índice de la pestaña cuando cambia la ruta
  useEffect(() => {
    const index = getTabIndex(pathname);
    setCurrentTab(index);
  }, [pathname, getTabIndex]);

  // Limpiar animaciones al desmontar el componente
  useEffect(() => {
    return () => {
      // Cancelar todas las animaciones activas para evitar memory leaks
      cancelAnimation(translateX);
      cancelAnimation(scale);
      cancelAnimation(opacity);
    };
  }, []);

  // Rutas disponibles para navegación
  const routes = useMemo(() => ['/', '/experiencia', '/estudios', '/proyectos'], []);

  // Función para navegar a una pestaña específica
  const navigateToTab = useCallback((index: number) => {
    if (index === currentTab) return;
    
    const route = routes[index];
    
    if (route) {
      setCurrentTab(index);
      router.replace(route as "/" | "/experiencia" | "/estudios" | "/proyectos");
    }
  }, [currentTab, routes, router]);

  // Configurar el gesto de deslizamiento horizontal
  const panGesture = Gesture.Pan()
    .onStart(() => {
      isGestureActive.value = true;
      velocityTracker.value = { x: 0, y: 0 };
    })
    // Mejorar la detección de gestos horizontales vs verticales
    .activateAfterLongPress(0)
    .activeOffsetX([-3, 3]) // Mayor sensibilidad horizontal
    .failOffsetY([-10, 10])  // Mejor tolerancia para scroll vertical
    .onUpdate((event) => {
      // Actualizar el tracker de velocidad
      velocityTracker.value = { 
        x: event.velocityX, 
        y: event.velocityY 
      };
      
      // Verificar si el gesto es principalmente horizontal
      const isHorizontalGesture = Math.abs(event.velocityX) > Math.abs(event.velocityY * 1.2);
      
      if (isHorizontalGesture) {
        // Calcular el progreso del deslizamiento (0-1) con mejor curva
        const progress = Math.min(Math.abs(event.translationX) / (screenWidth * 0.4), 1);
        
        // Aplicar efectos visuales mejorados basados en el progreso
        scale.value = 1 - (progress * 0.05); // Reducción de escala más perceptible
        opacity.value = 1 - (progress * 0.15); // Reducción de opacidad más sutil
        
        // Limitar el deslizamiento en los bordes con mejor resistencia
        if ((currentTab === 0 && event.translationX > 0) || 
            (currentTab === routes.length - 1 && event.translationX < 0)) {
          // Función de resistencia mejorada para los bordes
          const dampingFactor = 4;
          translateX.value = event.translationX / (1 + Math.abs(event.translationX) / dampingFactor);
        } else {
          translateX.value = event.translationX;
        }
      }
    })
    .onEnd((event) => {
      isGestureActive.value = false;
      
      // Parámetros mejorados para detección de swipe
      const threshold = screenWidth * 0.12; // Umbral reducido para mayor sensibilidad
      const velocity = event.velocityX;
      const isHighVelocitySwipe = Math.abs(velocity) > 400;
      
      // Restaurar escala y opacidad con animación mejorada
      scale.value = withSpring(1, { damping: 18, stiffness: 180 });
      opacity.value = withSpring(1, { damping: 18, stiffness: 180 });
      
      // Verificar si el gesto fue principalmente horizontal
      const isHorizontalGesture = Math.abs(velocityTracker.value.x) > Math.abs(velocityTracker.value.y * 1.2);
      
      if ((Math.abs(event.translationX) > threshold || isHighVelocitySwipe) && isHorizontalGesture) {
        // Determinar la dirección del deslizamiento
        const direction = event.translationX > 0 ? -1 : 1;
        const nextTabIndex = Math.max(0, Math.min(routes.length - 1, currentTab + direction));
        
        if (nextTabIndex !== currentTab) {
          // Animación mejorada con spring para transición más natural
          translateX.value = withSpring(direction * -screenWidth, 
            { 
              damping: 22, 
              stiffness: 180,
              velocity: velocity,
              overshootClamping: true,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01
            }, 
            () => {
              translateX.value = 0;
              runOnJS(navigateToTab)(nextTabIndex);
            }
          );
        } else {
          // Volver a la posición original con spring mejorado
          translateX.value = withSpring(0, { 
            damping: 22, 
            stiffness: 220,
            velocity: velocity,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01
          });
        }
      } else {
        // No se superó el umbral, volver a la posición original con spring
        translateX.value = withSpring(0, { 
          damping: 22, 
          stiffness: 220,
          velocity: velocity,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01
        });
      }
    });

  // Estilo animado para el contenedor principal
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scale: scale.value }
      ],
      opacity: opacity.value,
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={tema.colors.background.default} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
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
              // Habilitar la navegación por gestos
              // Deshabilitar la animación incorporada ya que usamos gestos personalizados
              //animationEnabled: false,
              // Configuración para permitir deslizar entre tabs
              //swipeEnabled: true,
            }}
          >
            <Tabs.Screen 
              name="index" 
              options={{
                title: "Perfil",
                headerShown: false,
                tabBarIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="user" size={24} color={color} />
                ),
              }}
              listeners={{
                tabPress: (e) => {
                  if (currentTab !== 0) {
                    e.preventDefault();
                    navigateToTab(0);
                  }
                }
              }}
            />
            <Tabs.Screen 
              name="experiencia" 
              options={{
                title: "Experiencia",
                headerShown: false,
                tabBarIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="briefcase" size={24} color={color} />
                ),
              }}
              listeners={{
                tabPress: (e) => {
                  if (currentTab !== 1) {
                    e.preventDefault();
                    navigateToTab(1);
                  }
                }
              }}
            />
            <Tabs.Screen 
              name="estudios" 
              options={{
                title: "Educación",
                headerShown: false,
                tabBarIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="graduation-cap" size={24} color={color} />
                ),
              }}
              listeners={{
                tabPress: (e) => {
                  if (currentTab !== 2) {
                    e.preventDefault();
                    navigateToTab(2);
                  }
                }
              }}
            />
            <Tabs.Screen 
              name="proyectos" 
              options={{
                title: "Proyectos",
                headerShown: false,
                tabBarIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="code" size={24} color={color} />
                ),
              }}
              listeners={{
                tabPress: (e) => {
                  if (currentTab !== 3) {
                    e.preventDefault();
                    navigateToTab(3);
                  }
                }
              }}
            />
          </Tabs>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});