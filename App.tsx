import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SearchPlaces from './components/SearchPlaces';

interface PositionType {
  latitude: number;
  longitude: number;
}

export default function App() {
  const [current, setCurrent] = useState<any>(undefined)
  const [isBackdropVisible, setIsBackDropVisble] = useState<boolean>(false)
  const [hardDelete, setHardDelete] = useState<boolean>(true)
  const { width, height } = Dimensions.get("window");
  const aspectRatio = width / height;
  const latDelta = 0.002;
  const longDelta = latDelta * aspectRatio;

  const getLocationAsync = async () => {
    await Location.requestForegroundPermissionsAsync()
    let currentLocation = await Location.getCurrentPositionAsync({})
    const latitude = currentLocation.coords.latitude
    const longitude = currentLocation.coords.longitude

    setCurrent({
      latitude,
      longitude,
      latitudeDelta: latDelta,
      longitudeDelta: longDelta
    })
  }


  useEffect(() => {
    getLocationAsync()
    setInterval(() => getLocationAsync(), 10000)
  }, [])

  return (
    <View style={styles.container}>
      {current &&
        <>
          <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={current} />
          {isBackdropVisible &&
            <View style={styles.backdrop}>
              <TouchableOpacity
                onPress={() => setIsBackDropVisble(false)}
                style={styles.touchView}
              />
            </View>
          }
          <SearchPlaces
            setIsBackDropVisble={setIsBackDropVisble}
            isBackdropVisible={isBackdropVisible}
          />
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    flex: 1,
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
