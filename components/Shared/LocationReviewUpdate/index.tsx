import React, { ReactElement } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { enableEditLocation } from "../../../redux/app/appSlice";
import ActionButtons from "../../MapView/OrderDetails/ActionButtons";

export default function LocationReviewUpdate(): ReactElement {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.places.userData)
  const destinationData = useAppSelector(state => state.places.destinationData)

  const handleEdit = (caller: string) => {
    dispatch(enableEditLocation(caller))
  }

  return <View style={styles.container}>
    <View style={styles.location}>
      <Text style={styles.helperText}>Vendndodhja juaj e nisjes</Text>
      <View style={styles.row}>
        <View style={styles.start} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationLabel}>
          {userData.description}
        </Text>
        <View style={styles.iconContainer}>
          <TouchableHighlight style={styles.iconBackground} onPress={() => handleEdit("user")}>
            <Image source={require("../../../assets/images/edit.png")} style={styles.icon} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
    <View style={styles.location}>
      <Text style={styles.helperText}>Destinacioni juaj</Text>
      <View style={styles.row}>
        <View style={styles.stop} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationLabel}>
          {destinationData.description}
        </Text>
        <View style={styles.iconContainer}>
          <TouchableHighlight style={styles.iconBackground} onPress={() => handleEdit("destination")}>
            <Image source={require("../../../assets/images/edit.png")} style={styles.icon} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
    <ActionButtons handleCancel={() => { }} handleProceed={() => { }} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    gap: 20,
    height: "100%",
    padding: 10
  },
  location: {
    marginLeft: 5,
    marginRight: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    justifyContent: "center",
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
  },
  label: {
    color: "white"
  },
  start: {
    width: 15,
    height: 15,
    backgroundColor: "#379bb0",
    borderRadius: 75
  },
  stop: {
    width: 15,
    height: 15,
    backgroundColor: "red",
    borderRadius: 75
  },
  locationLabel: {
    width: "70%",
    overflow: "hidden",
    flexWrap: "nowrap",
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  iconContainer: {
    width: "20%",
    alignItems: "flex-end"
  },
  iconBackground: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 75,
    elevation: 5
  },
  icon: {
    width: 20,
    height: 20,
  },
  helperText: {
    marginLeft: 25,
    color: "#ccc",
    letterSpacing: 0.5
  }
})