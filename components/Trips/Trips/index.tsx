import React, { ReactElement } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAppSelector } from "../../../redux/hooks"

export default function TripsContent(): ReactElement {
  const localTrips = useAppSelector(state => state.trips.localTrips)
  return (
    <>
      <View style={styles.tripsContainer}>
        {
          localTrips.map((trip, index) => {
            return (
              <View key={index} >
                {trip.userData?.description &&
                  <TouchableOpacity style={styles.singleTripContainer}>
                    <View style={styles.headerContainer}>
                      <View style={styles.tripStatusContainer} />
                      <View style={styles.tripLabelContainer}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tripLabel}>{trip.userData?.structured_formatting.main_text}</Text>
                        <Text style={styles.specialChar}>----</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tripLabel}>{trip.destinationData?.structured_formatting.main_text}</Text>
                      </View>
                    </View>
                    <View style={styles.rowContainer}>
                      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={styles.label}>Distanca: </Text>
                        <Text style={styles.value}>{trip.distance} km</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={styles.label}>Kohezgjatja: </Text>
                        <Text style={styles.value}>{trip.duration} min.</Text>
                      </View>
                    </View>
                    <View style={styles.rowContainer}>
                      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={styles.label}>Automjeti: </Text>
                        <Text style={styles.value}>{trip.rideType.label}&nbsp;{`(${trip.rideType.type})`}</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={styles.label}>Totali: </Text>
                        <Text style={styles.value}>{trip.total} ALL</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                }
              </View>
            )
          }
          )
        }
      </View>
      <ScrollView
        horizontal
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.legendsContainer}
      >
        <View style={styles.singleLegend}>
          <View style={[styles.legend, { backgroundColor: "orange" }]} />
          <Text style={[styles.specialChar, { color: "black" }]}> -- </Text>
          <Text style={styles.legendLabel}>Ne pritje</Text>
        </View>
        <View style={styles.singleLegend}>
          <View style={[styles.legend, { backgroundColor: "red" }]} />
          <Text style={[styles.specialChar, { color: "black" }]}> -- </Text>
          <Text style={styles.legendLabel}>E anulluar</Text>
        </View>
        <View style={styles.singleLegend}>
          <View style={[styles.legend, { backgroundColor: "yellow" }]} />
          <Text style={[styles.specialChar, { color: "black" }]}> -- </Text>
          <Text style={styles.legendLabel}>Ne konfirmim</Text>
        </View>
        <View style={styles.singleLegend}>
          <View style={[styles.legend, { backgroundColor: "green" }]} />
          <Text style={[styles.specialChar, { color: "black" }]}> -- </Text>
          <Text style={styles.legendLabel}>E perfunduar</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  tripsContainer: {
    padding: 10,
    gap: 10,
    height: "95%",
  },
  singleTripContainer: {
    width: "100%",
    minHeight: 100,
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
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  label: {
    color: "white",
    fontSize: 13
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white"
  },
  scrollViewContainer: {
    height: "5%",
  },
  legendsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    padding: 5

  },
  singleLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1
  },
  legend: {
    width: 15,
    height: 15,
    borderRadius: 100,
    opacity: 0.9
  },
  legendLabel: {
    color: "grey",
    fontSize: 13
  }
})