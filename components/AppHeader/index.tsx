import React, { ReactElement } from "react";
import SearchDestination from "../Shared/SearchDestination";
import { useAppSelector } from "../../redux/hooks";
import SearchUserLocation from "../Shared/SearchUserLocation";
import LocationReviewUpdate from "../Shared/LocationReviewUpdate";


export default function AppHeader(): ReactElement {
  const currentStatePlaces = useAppSelector(state => state.places.currentStatePlaces)
  const currentView = useAppSelector(state => state.app.currentView)
  return (
    <>
      {currentView === "default" ?
        <>
          {currentStatePlaces === "destination" ?
            <SearchDestination />
            :
            <SearchUserLocation />
          }
        </>
        :
        <LocationReviewUpdate />
      }
    </>
  )
}