import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Settings Layout - Index" }}
      />
      <Stack.Screen
        name="usuario"
        options={{ title: "Settings Layout - Usuario" }}
      />
    </Stack>
  );
}