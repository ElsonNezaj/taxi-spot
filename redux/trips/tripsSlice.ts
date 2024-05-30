import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TripsState {
  localTrips: Trips[];
}

export interface Trips {
  details: TripDetails;
  distance: number;
  total: number;
  duration: number;
  rideType: RideType;
  destination: any;
  userLocation: any;
  destinationData: any;
  userData: any;
}

export interface TripDetails {
  details: string;
  name: string;
  phoneNumber: string;
}

export interface RideType {
  id: number;
  image: number;
  label: string;
  type: string;
}

const initialState: TripsState = {
  localTrips: [],
};

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    updateLocalTrips: (state: TripsState, action: PayloadAction<Trips>) => {
      state.localTrips = [action.payload, ...state.localTrips];
    },
  },
});

export const { updateLocalTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
