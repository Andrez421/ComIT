import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

import counterReducer from "./counterSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers: (getDefaultEnhancers) =>
    __DEV__
      ? getDefaultEnhancers().concat(
          devToolsEnhancer({
            name: "Redux DevTools",
            hostname: "localhost",
            port: 8081,
            realtime: true,
            secure: false,
            suppressConnectErrors: false
          })
        )
      : getDefaultEnhancers(),
});