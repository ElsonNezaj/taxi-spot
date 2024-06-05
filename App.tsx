import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { StatusBar } from 'expo-status-bar';
import AppNavigation from './components/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AppNavigation />
        <StatusBar backgroundColor='rgba(0, 0, 0, 0.5)' style='light' />
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
  },
  modal: {
    position: 'absolute',
    height: 60
  }

});
