import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
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
import CarSelection from "../CarSelection";
import { ExtraDetails } from "../ExtraDetails";
import LocationReviewUpdate from "../../../Shared/LocationReviewUpdate";

export default function OrderDetails(): ReactElement {
  const dispatch = useDispatch()
  const currentView = useAppSelector(state => state.app.currentView)
  const destination = useAppSelector(state => state.places.destination)
  const userLocation = useAppSelector(state => state.places.userPosition)
  const hideOrderDetails = useAppSelector(state => state.app.hideOrderOnDrawer)
  const isEditLocationEnabled = useAppSelector(state => state.app.isEditLocationEnabled)

  const [detailsPayload, setDetailsPayload] = useState<any>(undefined)
  const [detailsView, setDetailsView] = useState<string>("update-location")
  const translateY = useRef(new Animated.Value(300)).current;

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
    Animated.timing(translateY, {
      toValue: hideOrderDetails ? 0 : 300,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, [hideOrderDetails, isEditLocationEnabled]);

  useEffect(() => {
    setDetailsView('update-location')
  }, [destination, userLocation])

  return (
    <>
      {
        currentView === "routing" &&
        <Animated.View style={[styles.detailsContainer, { transform: [{ translateY }] }]}>
          {
            detailsView === "update-location" ?
              <LocationReviewUpdate
                handleCancel={handleCancel}
                handleProceed={handleProceedInfo}
              />
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
        </Animated.View>
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
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    elevation: 5,
    zIndex: 0,
    bottom: 0,
  }
})