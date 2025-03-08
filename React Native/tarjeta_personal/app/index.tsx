import React from 'react';
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
  Dimensions,
} from "react-native";
import { useRef, useEffect, useMemo } from "react";
import { Iconos } from "../components/Iconos";
import { tema } from "../config/temas";

const skills = [
  { name: "React Native", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "HTML/CSS", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 65 },
];

// Componente de barra de progreso
interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar = React.memo(({ skill, level }: SkillBarProps) => {
  const screenWidth = Dimensions.get('window').width;
  const containerPadding = tema.spacing.md * 2;
  const maxWidth = screenWidth - containerPadding - 40;
  const progressWidth = Math.max(0, Math.min((maxWidth * level) / 100, maxWidth));

  return (
    <View style={styles.skillBar}>
      <View style={styles.skillLabelContainer}>
        <Text style={styles.skillLabel}>{skill}</Text>
        <Text style={styles.skillLevel}>{level}%</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.progress, { width: progressWidth }]} />
      </View>
    </View>
  );
});

export default function Profile() {
  // Memoizar los handlers para evitar recreaciones innecesarias
  const onContactHandler = useMemo(() => () => {
    Linking.openURL("mailto:andres931204@gmail.com");
  }, []);

  const onGithubPressHandler = useMemo(() => () => {
    Linking.openURL("https://github.com/Andrez421");
  }, []);

  const onTwitterPressHandler = useMemo(() => () => {
    Linking.openURL("https://x.com/andres931204");
  }, []);

  const onAtPressHandler = useMemo(() => () => {
    Linking.openURL("https://www.threads.net/@2451ap");
  }, []);

  const onInstagramPressHandler = useMemo(() => () => {
    Linking.openURL("https://www.instagram.com/2451ap/");
  }, []);

  const onFacebookPressHandler = useMemo(() => () => {
    Linking.openURL("https://web.facebook.com/andres931204/");
  }, []);

  // Añadir animación al cargar la imagen de perfil
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    
    animation.start();
    
    return () => {
      animation.stop();
      fadeAnim.setValue(0);
    };
  }, []);

  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://itspectrumsolutions.com/wp-content/uploads/2024/03/reactnative.jpg",
              }}
              style={styles.banner}
            />
            <Animated.Image
              source={require("../assets/images/yo.jpg")}
              style={[styles.imagenPersonal, { opacity: fadeAnim }]}
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.title}>Andrés Sebastián</Text>
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

            <Text style={styles.sectionTitle}>Habilidades</Text>
            {skills.map((skill, index) => (
              <SkillBar 
                key={`${index}-${skill.name}`} 
                skill={skill.name} 
                level={skill.level} 
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: tema.colors.background.default,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 0, // Eliminar el padding superior para que el banner esté pegado al borde
  },
  contentContainer: {
    padding: tema.spacing.md,
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    height: 150,
    borderRadius: tema.borderRadius.md,
    marginBottom: tema.spacing.lg + 75, // Espacio para la mitad de la imagen de perfil
    position: 'relative', // Para posicionar la imagen de perfil
  },
  banner: {
    width: '100%',
    height: '100%',
    borderRadius: tema.borderRadius.md,
  },
  imagenPersonal: {
    width: 150,
    height: 150,
    borderRadius: tema.borderRadius.circle,
    borderWidth: 3,
    borderColor: tema.colors.primary.main,
    position: 'absolute',
    bottom: -75, // La mitad de la altura de la imagen
    alignSelf: 'center',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 0, // Ya no necesitamos margen superior adicional
    width: '100%', // Asegurar que ocupe todo el ancho disponible
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: tema.colors.text.primary,
    marginBottom: tema.spacing.sm,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: tema.colors.text.secondary,
    textAlign: 'center',
    marginVertical: tema.spacing.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: tema.colors.primary.dark,
    marginTop: tema.spacing.lg,
    marginBottom: tema.spacing.md,
    alignSelf: 'flex-start',
  },
  skillBar: {
    width: '100%',
    marginBottom: tema.spacing.sm,
  },
  skillLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: tema.spacing.xs,
  },
  skillLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tema.colors.text.primary,
  },
  skillLevel: {
    fontSize: 14,
    color: tema.colors.text.secondary,
  },
  progressContainer: {
    height: 10,
    backgroundColor: tema.colors.background.accent,
    borderRadius: tema.borderRadius.sm,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: tema.colors.primary.main,
    borderRadius: tema.borderRadius.sm,
  },
});


