import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Linking,
  Animated,
} from "react-native";
import { useRef, useEffect } from "react";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";
import { estudio } from "@/data/estudio";
import { Iconos } from "@/components/Iconos";
import { TarjetaEstudio } from "@/components/TarjetaEstudio";

import { tema } from "@/config/temas";

const skills = [
  { name: "React Native", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  // ...más habilidades
];

// Componente de barra de progreso
interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar = ({ skill, level }: SkillBarProps) => (
  <View style={styles.skillBar}>
    <Text>{skill}</Text>
    <View style={[styles.progress, { width: `${level}%` }]} />
  </View>
);

  const onContactHandler = () => {
    Linking.openURL("mailto:andres931204@gmail.com");
  };

  const onGithubPressHandler = () => {
    Linking.openURL("https://github.com/Andrez421");
  };

  const onTwitterPressHandler = () => {
    Linking.openURL("https://x.com/andres931204");
  };

  const onAtPressHandler = () => {
    Linking.openURL("https://www.threads.net/@2451ap");
  };

  const onInstagramPressHandler = () => {
    Linking.openURL("https://www.instagram.com/2451ap/");
  };

  const onFacebookPressHandler = () => {
    Linking.openURL("https://web.facebook.com/andres931204/");
  };

  // Añadir animación al cargar la imagen de perfil
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Image
            source={{
              uri: "https://itspectrumsolutions.com/wp-content/uploads/2024/03/reactnative.jpg",
            }}
            style={styles.banner}
          />
          <Animated.Image
            source={require("@/assets/images/yo.jpg")}
            style={[styles.imagenPersonal, { opacity: fadeAnim }]}
          />
          <Text tema={styles.title}>Andrés Sebastián</Text>
          <Iconos 
            onGithubPress={onGithubPressHandler}
            onTwitterPress={onTwitterPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onFacebookPress={onFacebookPressHandler}
          />
          <Button 
            title="Contacto" 
            onPress={onContactHandler}
            color="#007AFF"
          />
          <Text style={styles.bio}>            
            Estudiante de Ing. de Sistemas en Unicauca que actualmente vive en Popayán. 
            Trabajo en Sena CCyS como Analista de Sistemas y me gusta
            mucho programar en React Native y Python.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

