import React from "react";
import { Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface IconoProps {
  icon: "github" | "x-twitter" | "at" | "instagram" | "facebook";
  size?: number;
  color?: string;
  activeColor?: string;
  onPress: () => void;
}

export const Icono = ({
  icon,
  size = 24,
  color = "darkblue",
  activeColor = "#40e0d0",
  onPress,
}: IconoProps) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <FontAwesome6
          name={icon}
          size={size}
          color={pressed ? activeColor : color}
        />
      )}
    </Pressable>
  );
};