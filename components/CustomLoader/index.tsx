import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";


export default function CustomLoader(): ReactElement {
  return (
    <View style={styles.centerBody}>
      <View style={styles.loaderShape3}></View>
    </View>

  )
}

const styles = StyleSheet.create({
  centerBody: {
    backgroundColor: '#202628',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loaderShape3: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  loaderShape3After: {
    width: 30,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    marginTop: 15,
  },
  loaderShape3Before: {
    width: 20,
    height: 20,
    borderRadius: 100, // React Native does not support shorthand like `border-radius: 100% 100% 100% 0;`
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // boxShadow: '0 0 0 2px rgba(255, 255, 255, 1)', // React Native shadow style is different
    // animation: 'anm-SL-3-move 1s linear infinite', // React Native doesn't support `animation` directly
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }, { rotate: '-46deg' }],
    marginTop: 20,
    // content: '""', // This is a workaround; content is not directly used in React Native
  },
});