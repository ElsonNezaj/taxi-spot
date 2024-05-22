import React, { ReactElement } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import SearchUserLocation from "../SearchUserLocation";
import SearchDestination from "../SearchDestination";
import Constants from "expo-constants";
import { disableEditLocation } from "../../../redux/app/appSlice";

export default function EditLocation(): ReactElement {
  const dispatch = useAppDispatch()
  const isEditLocation = useAppSelector(state => state.app.isEditLocationEnabled)
  const editLocationCaller = useAppSelector(state => state.app.editLocationCaller)

  const handleClose = () => {
    dispatch(disableEditLocation())
  }

  return (
    <>
      {isEditLocation &&
        <TouchableOpacity onPress={handleClose} style={styles.absoluteView}>
          <View style={styles.inputContainer}>
            {
              editLocationCaller === "user" ? <SearchUserLocation /> : <SearchDestination />
            }
          </View>

        </TouchableOpacity>
      }
    </>
  )
}

const styles = StyleSheet.create({
  absoluteView: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    zIndex: 1,
    alignItems: "center",
    top: 0,
  },
  label: {
    color: "white",
    top: 50
  },
  inputContainer: {
    top: Constants.statusBarHeight + 20
  }
})