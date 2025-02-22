import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Mensaje } from "@/components/Mensaje";

export default function Index() {
  return (
    <View style={styles.container}>
      <Mensaje mensaje="Mi" color="red" />
      <Mensaje mensaje="Amor" color="black" />
      <Mensaje mensaje="Linda" color="red" />
      <View style={styles.spacing} />
      <Mensaje mensaje="Te" color="black" />
      <Mensaje mensaje="Adoro" color="red" />
      <View style={styles.spacing} />
      <Image
        source={{ uri: 'data:image/png;base64,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' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    height: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
});