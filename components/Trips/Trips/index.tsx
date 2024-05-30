import React, { ReactElement } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useAppSelector } from "../../../redux/hooks"

export default function TripsContent(): ReactElement {
  const localTrips = useAppSelector(state => state.trips.localTrips)
  return (
    <View style={styles.tripsContainer}>
      {
        localTrips.map((trip, index) =>
          <View key={index}></View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tripsContainer: {
    flex: 1,
    padding: 10
  },

})