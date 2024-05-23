import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  currentView: string;
  isEditLocationEnabled: boolean;
  editLocationCaller?: string;
  hideOrderOnDrawer: boolean;
}

const initialState: AppState = {
  currentView: "default",
  isEditLocationEnabled: false,
  editLocationCaller: undefined,
  hideOrderOnDrawer: true,
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
    toggleOrderDetailsOnDrawer: (
      state: AppState,
      action: PayloadAction<boolean>
    ) => {
      state.hideOrderOnDrawer = action.payload;
    },
  },
});

export const {
  handleCurrentView,
  enableEditLocation,
  disableEditLocation,
  toggleOrderDetailsOnDrawer,
} = appSlice.actions;
export default appSlice.reducer;
