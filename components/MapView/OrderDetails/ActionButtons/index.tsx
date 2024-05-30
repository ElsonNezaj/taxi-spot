import React, { ReactElement } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface IProps {
  handleCancel: () => void,
  handleProceed: () => void
  caller?: string
}

export default function ActionButtons({ handleCancel, handleProceed, caller }: IProps): ReactElement {
  return <View style={styles.actionContainer}>
    <TouchableOpacity onPress={() => handleCancel()} style={styles.cancelButton}>
      <Text style={styles.label}>Anullo</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleProceed()} style={styles.proceedButton}>
      <Text style={styles.label}>{caller === "extra" ? "Perfundo" : "Vazhdo"}</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  actionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "#494454",
    width: "25%",
    alignItems: "center",
    borderRadius: 5,
    elevation: 1
  },
  proceedButton: {
    backgroundColor: "#379bb0",
    height: 40,
    justifyContent: "center",
    width: "25%",
    alignItems: "center",
    borderRadius: 5,
    elevation: 1
  },
  label: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
})