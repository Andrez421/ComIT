import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface HeaderProps {
  status: string;
  onRefreshPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ status, onRefreshPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{status}</Text>
      <TouchableOpacity onPress={onRefreshPress}>
        <MaterialCommunityIcons name="restart" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});