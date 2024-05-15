import React, { ReactElement, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";
import { useAppSelector } from "../../../redux/hooks";
import SearchDestination from "../SearchDestination";
import SearchUserLocation from "../SearchUserLocation";
import Constants from "expo-constants";

export default function LocationReviewUpdate(): ReactElement {
  const userData = useAppSelector(state => state.places.userData)
  const destinationData = useAppSelector(state => state.places.destinationData)
  const [isEditView, setIsEditView] = useState<boolean>(false)
  const [editType, setEditType] = useState<string | undefined>(undefined)

  const handleEdit = (caller: string) => {
    setEditType(caller)
    setIsEditView(true)
  }

  return <View style={styles.container}>
    {isEditView ?
      editType === "destination" ?
        <SearchDestination isEditView={isEditView} setIsEditView={setIsEditView} /> :
        <SearchUserLocation isEditView={isEditView} setIsEditView={setIsEditView} />
      :
      <>
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
      </>
    }
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#8478A3',
    position: "absolute",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    gap: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
    marginLeft: 5,
    marginRight: 5
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
  }
})