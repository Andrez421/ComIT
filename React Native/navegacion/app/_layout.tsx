import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ headerTitle: "Home", drawerLabel: "Home Label" }}
        />
        <Drawer.Screen name="about" options={{ headerTitle: "About" }} />
        <Drawer.Screen name="profile" options={{ headerTitle: "Profile" }} />
        <Drawer.Screen name="settings" options={{ headerTitle: "Settings" }} />
        <Drawer.Screen
          name="modal"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}