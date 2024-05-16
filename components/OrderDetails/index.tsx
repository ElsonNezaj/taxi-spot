import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../redux/hooks";

export default function OrderDetails(): ReactElement {
  const currentView = useAppSelector(state => state.app.currentView)
  const directionsData = useAppSelector(state => state.places.directionsData)
  return (
    <>
      {
        currentView === "routing" &&
        <View style={styles.detailsContainer}>
          <View>
            <Text>Distanca : {directionsData?.distance}</Text>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    minHeight: 200,
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    bottom: "0%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20
  }
})