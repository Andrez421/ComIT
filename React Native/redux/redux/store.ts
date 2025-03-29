import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import counterReducer from "./counterSlice";

// Configuración del enhancer con opciones correctas
const enhancer = devToolsEnhancer({
  name: "React Native Redux",
  realtime: true,
  trace: true
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: __DEV__, // Usamos __DEV__ para asegurarnos que solo se active en desarrollo
  enhancers: (getDefaultEnhancers) => {
    if (__DEV__) {
      return getDefaultEnhancers().concat(enhancer);
    }
    return getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Agregamos logging para desarrollo
if (__DEV__) {
  store.subscribe(() => {
    console.log("Estado actualizado:", store.getState());
  });
}
