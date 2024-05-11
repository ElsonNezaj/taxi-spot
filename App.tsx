import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Content from './components/Content';

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Content />
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
