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
import { FontAwesome6 } from "@expo/vector-icons";

export default function Index() {
  const onContactHandler = () => {
    Linking.openURL("mailto:andres931204@gmail.com");
  };


  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
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
          <Text style={styles.title}>Andres Sebastian</Text>

          <View style={styles.contenedorIconos}>
            <FontAwesome6 name="github" size={24} color="darkblue" />
            <FontAwesome6 name="x-twitter" size={24} color="darkblue" />
            <FontAwesome6 name="at" size={24} color="darkblue" />
            <FontAwesome6 name="instagram" size={24} color="darkblue" />
            <FontAwesome6 name="facebook" size={24} color="darkblue" />
          </View>
          <Button title="Contacto" onPress={onContactHandler}/>
          <Text style={styles.bio}>
            Dirvertido programador que actualmente vive en Popayan. Me gusta
            mucho programar en React Native y Python.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 10,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
              }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Posición</Text>
              <Text style={{ fontSize: 12, lineHeight: 18 }}>Empresa</Text>
              <Text style={{ fontSize: 12, color: "#808080", lineHeight: 18 }}>
                Fecha
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                  lineHeight: 18,
                  marginBottom: 10,
                }}
              >
                Locación
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: 18,
                }}
              >
                Tecnologías
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 10,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
              }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Posición</Text>
              <Text style={{ fontSize: 12, lineHeight: 18 }}>Empresa</Text>
              <Text style={{ fontSize: 12, color: "#808080", lineHeight: 18 }}>
                Fecha
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                  lineHeight: 18,
                  marginBottom: 10,
                }}
              >
                Locación
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: 18,
                }}
              >
                Tecnologías
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 10,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
              }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Posición</Text>
              <Text style={{ fontSize: 12, lineHeight: 18 }}>Empresa</Text>
              <Text style={{ fontSize: 12, color: "#808080", lineHeight: 18 }}>
                Fecha
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                  lineHeight: 18,
                  marginBottom: 10,
                }}
              >
                Locación
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: 18,
                }}
              >
                Tecnologías
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 10,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/C560BAQFoMbh8Jawjhg/company-logo_100_100/company-logo_100_100/0/1631338342207?e=1749081600&v=beta&t=6fgq4Zi_lslt6EwSEinoOUmyLfOT2qaNu9C_ny94y9c",
              }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Posición</Text>
              <Text style={{ fontSize: 12, lineHeight: 18 }}>Empresa</Text>
              <Text style={{ fontSize: 12, color: "#808080", lineHeight: 18 }}>
                Fecha
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                  lineHeight: 18,
                  marginBottom: 10,
                }}
              >
                Locación
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: 18,
                }}
              >
                Tecnologías
              </Text>
            </View>
          </View>            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30, fontWeight: "bold", color: "darkblue" },
  banner: { width: "100%", aspectRatio: 16 / 9 },
  imagenPersonal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  contenedorIconos: { flexDirection: "row", marginVertical: 10, gap: 10 },
  bio: { padding: 10, fontSize: 12, lineHeight: 18 },
  experiencia: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: "darkblue",
    marginBottom: 10,
  },
});