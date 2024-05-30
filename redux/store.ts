import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./places/placesSlice";
import appReducer from "./app/appSlice";
import tripsReducer from "./trips/tripsSlice";

export const store = configureStore({
  reducer: {
    places: placesReducer,
    app: appReducer,
    trips: tripsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
