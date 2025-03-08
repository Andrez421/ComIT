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
import { useRef, useEffect } from "react";
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

const SkillBar = ({ skill, level }: SkillBarProps) => {
  // Calcular el ancho basado en el nivel y el ancho de la pantalla
  const screenWidth = Dimensions.get('window').width;
  const containerPadding = tema.spacing.md * 2; // Padding del contenedor principal (izquierda y derecha)
  const profileInfoPadding = 0; // No hay padding adicional en profileInfoContainer
  const maxWidth = screenWidth - containerPadding - profileInfoPadding;
  const progressWidth = (maxWidth * level) / 100;

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
};

export default function Profile() {
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
  },
  contentContainer: {
    padding: tema.spacing.md,
    paddingTop: 0,
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    height: 150,
    borderRadius: tema.borderRadius.md,
    marginBottom: tema.spacing.lg + 10,
    position: 'relative',
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
    bottom: -75,
    alignSelf: 'center',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 75,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: tema.colors.text.primary,
    marginBottom: tema.spacing.sm,
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


