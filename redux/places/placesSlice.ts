import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  isConfirmLocationVisible: boolean;
  isConfirmTripVisible: boolean;
  currentStatePlaces: string;
  destination?: LatLng;
  userPosition?: LatLng;
  currentPosition?: any;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

const initialState: PlacesState = {
  isConfirmLocationVisible: false,
  isConfirmTripVisible: false,
  currentStatePlaces: "destination",
  destination: undefined,
  currentPosition: undefined,
  userPosition: undefined,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    handleConfirmLocation: (
      state: PlacesState,
      action: PayloadAction<boolean>
    ) => {
      state.isConfirmLocationVisible = action.payload;
    },
    handleCurrentState: (state: PlacesState, action: PayloadAction<string>) => {
      state.currentStatePlaces = action.payload;
    },
    handleConfirmTrip: (state: PlacesState, action: PayloadAction<boolean>) => {
      state.isConfirmTripVisible = action.payload;
    },
    setDestination: (state: PlacesState, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setCurrentPosition: (state: PlacesState, action: PayloadAction<any>) => {
      state.currentPosition = action.payload;
    },
    setUserLocation: (state: PlacesState, action: PayloadAction<any>) => {
      state.userPosition = action.payload;
    },
  },
});

export const {
  handleCurrentState,
  handleConfirmTrip,
  setDestination,
  setCurrentPosition,
  handleConfirmLocation,
  setUserLocation,
} = placesSlice.actions;
export default placesSlice.reducer;
