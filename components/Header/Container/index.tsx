import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppHeader from "../AppHeader";
import Constants from "expo-constants";

export default function Header(): ReactElement {
  return <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.openButton}><Text>Open</Text></TouchableOpacity>
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
  }
})