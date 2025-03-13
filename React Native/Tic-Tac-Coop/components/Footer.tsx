import React from "react";
import { StyleSheet, View, Button } from "react-native";

interface FooterProps {
  onHistoryPress: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onHistoryPress }) => {
  return (
    <View style={styles.footer}>
      <Button title="Mostrar Historial" onPress={onHistoryPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    justifyContent: "center",
    backgroundColor: "black",
    
  },
});