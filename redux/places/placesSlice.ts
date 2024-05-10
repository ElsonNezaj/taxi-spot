import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  currentStatePlaces: string;
  destination: string;
  currentPosition: string;
}

const initialState: PlacesState = {
  currentStatePlaces: "destination",
  destination: "",
  currentPosition: "",
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    handleCurrentState: (state: PlacesState, action: PayloadAction<string>) => {
      state.currentStatePlaces = action.payload;
    },
  },
});

export const { handleCurrentState } = placesSlice.actions;
export default placesSlice.reducer;
