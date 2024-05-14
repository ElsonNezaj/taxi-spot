import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../../../redux/hooks";
import { handleConfirmTrip, handleCurrentState, setUserLocation } from "../../../redux/places/placesSlice";
import { handleCurrentView } from "../../../redux/app/appSlice";

export default function DrawerContent(): ReactElement {
  const dispatch = useAppDispatch()

  const handleReject = () => {
    dispatch(setUserLocation(undefined))
    dispatch(handleCurrentState("user"))
    dispatch(handleConfirmTrip(false))
  }

  const handleConfirm = () => {
    dispatch(handleCurrentState("destination"))
    dispatch(handleCurrentView("routing"))
    dispatch(handleConfirmTrip(false))
  }

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.header}>Konfirmoni udhetimin</Text>
      <Text style={styles.label}>Jeni te sigurte qe doni te perdorni keto dy pika per udhetimin tuaj?</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => handleReject()} style={styles.reject}>
          <Text style={styles.buttonLabel}>Jo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleConfirm()} style={styles.confirm}>
          <Text style={styles.buttonLabel}>Po</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 20,
    height: "90%",
  },
  header: {
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "center",
    color: "#8478A3",
    fontWeight: "bold"
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 40
  },
  actionContainer: {
    flexDirection: "row",
    width: "70%",
    marginTop: 50,
    justifyContent: "space-between",
    gap: 20,
    margin: "auto"
  },
  reject: {
    width: "40%",
    backgroundColor: "#379bb0",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 8
  },
  confirm: {
    width: "40%",
    backgroundColor: "#8478A3",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 8
  },
  buttonLabel: {
    color: "white",
    fontSize: 18
  }
})