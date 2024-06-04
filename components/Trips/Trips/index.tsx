import React, { ReactElement } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useAppSelector } from "../../../redux/hooks"

export default function TripsContent(): ReactElement {
  const localTrips = useAppSelector(state => state.trips.localTrips)
  return (
    <View style={styles.tripsContainer}>
      {
        localTrips.map((trip, index) => {
          return (
            <View key={index} >
              {trip.userData?.description &&
                <View style={styles.singleTripContainer}>
                  <View style={styles.headerContainer}>
                    <View style={styles.tripStatusContainer} />
                    <View style={styles.tripLabelContainer}>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tripLabel}>{trip.userData?.description}</Text>
                      <Text style={styles.specialChar}>{">"}</Text>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tripLabel}>{trip.destinationData?.description}</Text>
                    </View>
                  </View>
                </View>
              }
            </View>
          )
        }
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
  singleTripContainer: {
    width: "100%",
    minHeight: 80,
    backgroundColor: "#8478A3",
    borderRadius: 15,
    padding: 5
  },
  headerContainer: {
    width: "100%",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    gap: 10
  },
  tripLabelContainer: {
    flexDirection: "row",
    width: "80%",
    gap: 10
  },
  tripLabel: {
    width: "50%",
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  specialChar: {
    color: "white",
    fontSize: 15
  },
  tripStatusContainer: {
    width: 15,
    height: 15,
    backgroundColor: "orange",
    borderRadius: 100
  }
})