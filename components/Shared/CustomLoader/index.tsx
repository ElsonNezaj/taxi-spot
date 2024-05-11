import React, { ReactElement } from "react";
import { StyleSheet, View, Text } from "react-native";


export default function CustomLoader(): ReactElement {
  return (
    <View style={styles.loader}>
      <Text style={styles.loaderText}>loading</Text>
      <Text style={styles.load}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    width: 80,
    height: 50,
    position: 'relative',
  },
  loaderText: {
    position: 'absolute',
    top: 0,
    padding: 0,
    margin: 0,
    color: '#C8B6FF',
    fontSize: 14, // Adjust the font size as needed for your design
    letterSpacing: 1,
    transform: [{ translateX: 0 }], // Initial transform
  },
  load: {
    backgroundColor: '#9A79FF',
    borderRadius: 50,
    height: 16,
    width: 16,
    bottom: 0,
    position: 'absolute',
    transform: [{ translateX: 64 }], // Initial transform
  },
  loadBefore: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#D1C2FF',
    borderRadius: 50, // Or whatever radius you need
    transform: [{ translateX: 0 }], // Initial transform
  },
});

