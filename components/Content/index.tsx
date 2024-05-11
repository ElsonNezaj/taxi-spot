import React, { ReactElement, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
import SearchPlaces from "../SearchPlaces";

import * as Location from 'expo-location';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentPosition } from "../../redux/places/placesSlice";

export default function Content(): ReactElement {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.places.currentPosition)
  const destination = useAppSelector(state => state.places.destination)
  const [isBackdropVisible, setIsBackDropVisble] = useState<boolean>(false)
  const { width, height } = Dimensions.get("window");

  const aspectRatio = width / height;
  const latDelta = 0.02;
  const longDelta = latDelta * aspectRatio;

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
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  console.log(destination)

  return (
    <>
      {current &&
        <>
          <MapView
            followsUserLocation
            rotateEnabled={false}
            provider={PROVIDER_GOOGLE}
            initialRegion={current}
            style={styles.map}
          >
            <MarkerAnimated
              coordinate={current}
              style={{ backgroundColor: "#000" }}
            />

            {destination &&
              <MarkerAnimated coordinate={destination} />
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
          <SearchPlaces />
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
