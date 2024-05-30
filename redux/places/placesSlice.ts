import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  isConfirmLocationVisible: boolean;
  isConfirmTripVisible: boolean;
  currentStatePlaces: string;
  destination?: LatLng;
  userPosition?: LatLng;
  currentPosition?: any;
  destinationData: any;
  userData: any;
  directionsData: any;
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
  destinationData: undefined,
  userData: undefined,
  directionsData: undefined,
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
    saveDestinationData: (state: PlacesState, action: PayloadAction<any>) => {
      state.destinationData = action.payload;
    },
    saveUserData: (state: PlacesState, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    saveDirectionsData: (state: PlacesState, action: PayloadAction<any>) => {
      state.directionsData = action.payload;
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
  saveDestinationData,
  saveUserData,
  saveDirectionsData,
} = placesSlice.actions;
export default placesSlice.reducer;
