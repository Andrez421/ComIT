import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Icono } from "@/components/Icono";

interface IconosProps {
  onGithubPress: () => void;
  onTwitterPress: () => void;
  onAtPress: () => void;
  onInstagramPress: () => void;
  onFacebookPress: () => void;
}
export const Iconos = ({
  onGithubPress,
  onTwitterPress,
  onAtPress,
  onInstagramPress,
  onFacebookPress,
}: IconosProps) => {
  return (
    <View style={styles.contenedorIconos}>
      <Icono icon="github" onPress={onGithubPress} />
      <Icono icon="x-twitter" onPress={onTwitterPress} />
      <Icono icon="at" onPress={onAtPress} />
      <Icono icon="instagram" onPress={onInstagramPress} />
      <Icono icon="facebook" onPress={onFacebookPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorIconos: { flexDirection: "row", marginVertical: 10, gap: 15 },
});