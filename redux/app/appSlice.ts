import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  currentView: string;
}

const initialState: AppState = {
  currentView: "default",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleCurrentView: (state: AppState, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
  },
});

export const { handleCurrentView } = appSlice.actions;
export default appSlice.reducer;
