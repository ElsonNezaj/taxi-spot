import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  isConfirmLocationVisible: boolean;
  currentStatePlaces: string;
  destination: any;
  currentPosition: any;
}

const initialState: PlacesState = {
  isConfirmLocationVisible: false,
  currentStatePlaces: "destination",
  destination: "",
  currentPosition: "",
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
    setDestination: (state: PlacesState, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setCurrentPosition: (state: PlacesState, action: PayloadAction<any>) => {
      state.currentPosition = action.payload;
    },
  },
});

export const {
  handleCurrentState,
  setDestination,
  setCurrentPosition,
  handleConfirmLocation,
} = placesSlice.actions;
export default placesSlice.reducer;
