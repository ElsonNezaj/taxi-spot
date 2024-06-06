import { combineReducers, configureStore } from "@reduxjs/toolkit";
import placesReducer from "./places/placesSlice";
import appReducer from "./app/appSlice";
import tripsReducer from "./trips/tripsSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["places", "app"],
};

const rootReducer = combineReducers({
  places: placesReducer,
  app: appReducer,
  trips: tripsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});

const persistor = persistStore(store);

persistor.subscribe(() => {
  const state = store.getState();
});

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
