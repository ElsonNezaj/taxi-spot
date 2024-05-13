import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

import Dialog from "react-native-dialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { handleConfirmLocation, handleCurrentState } from "../../../redux/places/placesSlice";

export default function ConfirmDialog(): ReactElement {
  const dispatch = useAppDispatch()
  const isConfirmLocationVisible = useAppSelector(state => state.places.isConfirmLocationVisible)

  const handleClose = () => {
    dispatch(handleConfirmLocation(false))
  }

  const handleReject = () => {
    dispatch(handleCurrentState("user"))
    handleClose()
  }

  return (
    <Dialog.Container visible={isConfirmLocationVisible}>
      <Dialog.Title><Text style={styles.title}>Konfirmoni Vendndodhjen Tuaj</Text></Dialog.Title>
      <Dialog.Description style={styles.description}>Deshironi te perdorni pozicionin tuaj aktual?</Dialog.Description>
      <View style={styles.buttonView}>
        <Dialog.Button label="JO" onPress={handleReject} style={styles.rejectButton} />
        <Dialog.Button label="Po" onPress={() => { }} style={styles.confirmButton} />
      </View>
    </Dialog.Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#8478A3",
    textAlign: "center"
  },
  description: {
    color: "grey",
    fontSize: 14
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  rejectButton: {
    backgroundColor: "#379bb0",
    height: 45,
    width: 45,
    borderRadius: 100,
    paddingTop: 10,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#C0FAFF"
  },
  confirmButton: {
    backgroundColor: "#8478A3",
    height: 45,
    width: 45,
    borderRadius: 100,
    paddingTop: 10,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#F7EBFF"
  }
})