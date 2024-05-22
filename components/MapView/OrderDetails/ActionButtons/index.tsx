import React, { ReactElement } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface IProps {
  handleCancel: () => void,
  handleProceed: () => void
}

export default function ActionButtons({ handleCancel, handleProceed }: IProps): ReactElement {
  return <View style={styles.actionContainer}>
    <TouchableOpacity onPress={() => handleCancel()} style={styles.cancelButton}><Text style={styles.label}>Anullo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => handleProceed()} style={styles.proceedButton}><Text style={styles.label}>Vazhdo</Text></TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  actionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  cancelButton: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "red",
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