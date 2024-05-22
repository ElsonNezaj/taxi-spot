import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  currentView: string;
  isEditLocationEnabled: boolean;
  editLocationCaller?: string;
}

const initialState: AppState = {
  currentView: "default",
  isEditLocationEnabled: false,
  editLocationCaller: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleCurrentView: (state: AppState, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
    enableEditLocation: (state: AppState, action: PayloadAction<string>) => {
      (state.editLocationCaller = action.payload),
        (state.isEditLocationEnabled = true);
    },
    disableEditLocation: (state: AppState) => {
      (state.editLocationCaller = undefined),
        (state.isEditLocationEnabled = false);
    },
  },
});

export const { handleCurrentView, enableEditLocation, disableEditLocation } =
  appSlice.actions;
export default appSlice.reducer;
