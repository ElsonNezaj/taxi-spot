import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { LatLng, MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleConfirmLocation, handleCurrentState, setCurrentPosition, setUserLocation } from "../../redux/places/placesSlice";
import AppHeader from "../AppHeader";

export default function Content(): ReactElement {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.places.currentPosition)
  const userLocation = useAppSelector(state => state.places.userPosition)
  const destination = useAppSelector(state => state.places.destination)
  const currentStatePlaces = useAppSelector(state => state.places.currentStatePlaces)
  const [isBackdropVisible, setIsBackDropVisble] = useState<boolean>(false)
  const { width, height } = Dimensions.get("window");

  const aspectRatio = width / height;
  const latDelta = 0.02;
  const longDelta = latDelta * aspectRatio;

  const mapRef = useRef<MapView>(null)

  const getLocationAsync = async () => {
    await Location.requestForegroundPermissionsAsync()
    let currentLocation = await Location.getCurrentPositionAsync({})
    const latitude = currentLocation.coords.latitude
    const longitude = currentLocation.coords.longitude
    dispatch(setCurrentPosition({
      latitude,
      longitude,
      latitudeDelta: latDelta,
      longitudeDelta: longDelta
    }))
    dispatch(setUserLocation({
      latitude,
      longitude,
    }))
  }

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 500 })
      dispatch(handleCurrentState("user"))
    }
  }

  useEffect(() => {
    if (currentStatePlaces === "destination" && destination) {
      moveTo(destination)
      setTimeout(() => {
        dispatch(handleConfirmLocation(true))
      }, 2000)
    }
  }, [currentStatePlaces, destination])

  useEffect(() => {
    getLocationAsync()
  }, [])

  return (
    <>
      {current &&
        <>
          <MapView
            ref={mapRef}
            followsUserLocation
            rotateEnabled={false}
            provider={PROVIDER_GOOGLE}
            initialRegion={current}
            style={styles.map}
          >
            {
              userLocation &&
              <MarkerAnimated
                image={require("../../assets/images/userLocation.png")}
                coordinate={userLocation}
              />
            }
            {destination &&
              <MarkerAnimated
                image={require("../../assets/images/destination.png")}
                coordinate={destination}
              />
            }

          </MapView>
          {isBackdropVisible &&
            <View style={styles.backdrop}>
              <TouchableOpacity
                onPress={() => setIsBackDropVisble(false)}
                style={styles.touchView}
              />
            </View>
          }
          <AppHeader />
        </>
      }
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: "99%"
  },
  backdrop: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "black",
    left: 0,
    opacity: 0.3,
    height: "100%",
    width: "100%"
  },
  touchView: {
    height: "100%",
    width: "100%"
  }

});
