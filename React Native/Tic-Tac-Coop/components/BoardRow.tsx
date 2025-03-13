import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface BoardRowProps {
  children: ReactNode;
}

export const BoardRow = ({ children }: BoardRowProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1 / 3,
  },
});