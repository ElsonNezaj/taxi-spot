import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Content from './components/MapView/Content';
import { StatusBar } from 'expo-status-bar';
import ConfirmDialog from './components/Shared/ConfirmDialog';
import BottomDrawer from './components/MapView/BottomDrawer/DrawerContainer';
import OrderDetails from './components/MapView/OrderDetails/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Content />
        <StatusBar
          translucent
          animated
          backgroundColor='#8478A3'
          style='light'
        />
        <ConfirmDialog />
        <BottomDrawer />
        <OrderDetails />
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
