import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export default function SharedHeader(): ReactElement {
  return (
    <View style={styles.sharedHeaderContainer}></View>
  )
}

const styles = StyleSheet.create({
  sharedHeaderContainer: {
    paddingTop: 80,
    backgroundColor: "#8478A3",
    flexDirection: "row"
  }
})