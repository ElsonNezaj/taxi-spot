import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppHeader from "../AppHeader";
import Constants from "expo-constants";

interface IProps {
  navigation: any
}

export default function Header({ navigation }: IProps): ReactElement {
  const handleOpen = () => {
    navigation.openDrawer()
  }
  return <View style={styles.headerContainer}>
    <TouchableOpacity onPress={handleOpen} style={styles.openButton}>
      <Image source={require("../../../assets/images/menu.png")} style={styles.icon} />
    </TouchableOpacity>
    <AppHeader />
  </View>
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    top: Constants.statusBarHeight + 20,
    position: "absolute"
  },
  openButton: {
    zIndex: 1,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
    marginLeft: 10,
    elevation: 10
  },
  icon: {
    width: 25,
    height: 25
  }
})