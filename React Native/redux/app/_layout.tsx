import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['SerializableStateInvariantMiddleware']);

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}