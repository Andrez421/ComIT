import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SquareProps {
  value: string | null;
  onSquarePress: () => void;
}

export const Square = ({ value, onSquarePress }: SquareProps) => {
  return (
    <View style={styles.square}>
      <TouchableOpacity style={styles.pressable} onPress={onSquarePress}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1 / 3,
  },
  pressable: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 80,
  },
});