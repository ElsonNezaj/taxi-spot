import React, { ReactElement } from "react";
import NoTrips from "../NoTrips";
import { useAppSelector } from "../../../redux/hooks";
import TripsContent from "../Trips";

export default function Trips(): ReactElement {
  const localTrips = useAppSelector(state => state.trips.localTrips)
  return (
    <>
      {
        localTrips.length > 0 ?
          <TripsContent />
          :
          <NoTrips />
      }
    </>
  )
}