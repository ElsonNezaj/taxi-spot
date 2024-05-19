import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../../../redux/hooks";
import { calculateTotal } from "../../../redux/services";

interface IProps {
  handleCancel: any,
  handleProceed: (distance: number, duration: number, total: number) => void
}

export default function MainInfo({ handleCancel, handleProceed }: IProps): ReactElement {
  const directionsData = useAppSelector(state => state.places.directionsData)

  const handleInfoProceed = () => {
    handleProceed(
      Number(directionsData?.distance.toFixed(2)),
      Math.ceil(directionsData?.duration),
      calculateTotal(directionsData?.distance, Math.ceil(directionsData?.duration))
    )
  }

  return <View>
    <View style={styles.travelInformation}>
      <Text style={styles.travelLabel}>
        Distanca : &nbsp;
        <Text style={styles.value}>{directionsData?.distance.toFixed(2)} km</Text>
      </Text>
      <Text style={styles.travelLabel}>
        Kohezgjatja : &nbsp;
        <Text style={styles.value}>~{Math.ceil(directionsData?.duration)} min.</Text>
      </Text>
      <Text style={styles.travelLabel}>
        Total : &nbsp;
        <Text style={styles.value}>{calculateTotal(directionsData?.distance, Math.ceil(directionsData?.duration))} LEK</Text>
      </Text>
    </View>
    <View style={styles.actionContainer}>
      <TouchableOpacity onPress={() => handleCancel()} style={styles.cancelButton}><Text style={styles.label}>Anullo</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleInfoProceed()} style={styles.proceedButton}><Text style={styles.label}>Vazhdo</Text></TouchableOpacity>
    </View>
  </View>
}

const styles = StyleSheet.create({
  travelInformation: {
    justifyContent: "space-between",
    gap: 10
  },
  travelLabel: {
    fontSize: 15,
    letterSpacing: 2
  },
  value: {
    fontWeight: "bold"
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30
  },
  cancelButton: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "red",
    width: "40%",
    alignItems: "center",
    borderRadius: 5
  },
  proceedButton: {
    backgroundColor: "#379bb0",
    height: 40,
    justifyContent: "center",
    width: "40%",
    alignItems: "center",
    borderRadius: 5
  },
  label: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
})