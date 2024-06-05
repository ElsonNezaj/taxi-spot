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
const reducer = combineReducers({
  places: placesReducer,
  app: appReducer,
  trips: tripsReducer,
});

const persistState = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistState,
});

export const persistor = persistStore(store);

const exported = { store, persistor };

export default exported;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
