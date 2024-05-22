import React, { ReactElement, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useAppSelector } from "../../../../redux/hooks";
import { useDispatch } from "react-redux";
import { handleCurrentView } from "../../../../redux/app/appSlice";
import {
  handleCurrentState,
  saveDestinationData,
  saveDirectionsData,
  setDestination,
  setUserLocation
} from "../../../../redux/places/placesSlice";
import MainInfo from "../MainInfo";
import CarSelection from "../CarSelection";
import { ExtraDetails } from "../ExtraDetails";
import LocationReviewUpdate from "../../../Shared/LocationReviewUpdate";

export default function OrderDetails(): ReactElement {
  const dispatch = useDispatch()
  const currentView = useAppSelector(state => state.app.currentView)
  const destination = useAppSelector(state => state.places.destination)
  const userLocation = useAppSelector(state => state.places.userPosition)

  const [detailsPayload, setDetailsPayload] = useState<any>(undefined)
  const [detailsView, setDetailsView] = useState<string>("update-location")

  const handleBack = (backValue: string) => {
    setDetailsView(backValue)
  }

  const handleCancel = () => {
    dispatch(handleCurrentView("default"))
    dispatch(saveDestinationData(undefined))
    dispatch(saveDirectionsData(undefined))
    dispatch(handleCurrentState("destination"))
    dispatch(setDestination(undefined))
    dispatch(setUserLocation(undefined))
  }

  const handleProceedInfo = (distance: number, duration: number, total: number) => {
    setDetailsView("car-selection")
    setDetailsPayload({
      ...detailsPayload,
      ["distance"]: distance,
      ["duration"]: duration,
      ["total"]: total
    })
  }

  const handleCarSelectionInfo = (rideType: any) => {
    setDetailsPayload({
      ...detailsPayload,
      ["rideType"]: rideType
    })
    setDetailsView("extra-details")
  }

  const handleExtraProceed = (details: any) => {
    setDetailsPayload({
      ...detailsPayload,
      ["details"]: details
    })
  }

  useEffect(() => {
    setDetailsView('update-location')
  }, [destination, userLocation])

  return (
    <>
      {
        currentView === "routing" &&
        <View style={styles.detailsContainer}>
          {
            detailsView === "update-location" ?
              <LocationReviewUpdate />
              :
              detailsView === "main-info" ?
                <MainInfo handleCancel={handleCancel} handleProceed={handleProceedInfo} />
                :
                detailsView === "car-selection" ?
                  <CarSelection
                    handleCancel={handleCancel}
                    handleProceed={handleCarSelectionInfo}
                    handleBack={handleBack}
                  />
                  : detailsView === "extra-details" &&
                  <ExtraDetails
                    handleCancel={handleCancel}
                    handleProceed={handleExtraProceed}
                    handleBack={handleBack}
                  />
          }
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    minHeight: 200,
    width: "100%",
    position: "absolute",
    backgroundColor: '#8478A3',
    bottom: 0,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    elevation: 5,
    zIndex: 0
  }
})