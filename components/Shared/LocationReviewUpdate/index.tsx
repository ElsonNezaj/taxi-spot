import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import SearchDestination from "../SearchDestination";
import SearchUserLocation from "../SearchUserLocation";

export default function LocationReviewUpdate(): ReactElement {
  return <View style={styles.container}>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    paddingTop: 30,
    gap: 10
  }
})