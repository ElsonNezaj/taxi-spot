import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import SearchPlaces from './components/SearchPlaces';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomLoader from './components/CustomLoader';

export default function App() {
  const [current, setCurrent] = useState<any>(undefined)
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
      <Provider store={store}>
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
      </Provider>
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
