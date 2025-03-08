import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Linking,
} from "react-native";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";
import { estudio } from "@/data/estudio";
import { proyectos } from "@/data/proyectos";
import { Iconos } from "@/components/Iconos";
import { TarjetaEstudio } from "@/components/TarjetaEstudio";
import { TarjetaProyecto } from "@/components/TarjetaProyectos";

export default function Index() {
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
          <Image
            source={require("@/assets/images/yo.jpg")}
            style={styles.imagenPersonal}
          />
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
          
          <Text style={styles.experiencia}>Experiencia Laboral</Text>
          
          {experiencias.map((experiencia, index) => (
            <TarjetaExperiencia
              key={`${index}-${experiencia.empresa}`}
              {...experiencia}
            />
          ))}
          <Text style={styles.estudio}>Estudios</Text>
          {estudio.map((item, index) => (
            <TarjetaEstudio
              key={`${index}-${item.empresa}`}
              {...item}
            />
          ))}
          <Text style={styles.proyecto}>Proyectos</Text>
          {proyectos.map((item, index) => (
            <TarjetaProyecto
              key={`${index}-${item.empresa}`}
              {...item}
            />
          ))}



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#61DBFB",
    alignItems: "center",
  },
  title: { 
    fontSize: 30, 
    fontWeight: "bold", 
    color: "darkblue",
    marginVertical: 10,
  },
  banner: { 
    width: "100%", 
    aspectRatio: 16 / 9 
  },
  imagenPersonal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  bio: { 
    padding: 20, 
    fontSize: 13, 
    textAlign: 'center',
    color: 'black',
  },
  experiencia: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
  },
  estudio: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
    marginTop: 15,
  },
  proyecto: {
    fontWeight: "bold",
    fontSize: 24,
    color: "darkblue",
    marginBottom: 15,
    marginTop: 15,
  },
});
