import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
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
  const [value, setValue] = useState<string>("")
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
    <>
      <View style={styles.container}>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={current && current} />
        <SearchPlaces setValue={setValue} />
        {value.length > 0 &&
          <View style={styles.backdrop} />
        }
      </View>
    </>
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
    flex: 1,
    zIndex: 1,
    backgroundColor: "black",
    left: 0,
    opacity: 0.3,
    height: 1000,
    width: 1000
  }

});
