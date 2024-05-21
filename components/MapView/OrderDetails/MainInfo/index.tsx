import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../../../../redux/hooks";
import { calculateTotal } from "../../../../redux/services";
import ActionButtons from "../ActionButtons";

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
    <ActionButtons handleCancel={handleCancel} handleProceed={handleInfoProceed} />
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

})