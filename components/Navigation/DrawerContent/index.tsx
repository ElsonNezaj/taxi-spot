import React, { ReactElement } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

export default function DrawerContent(navigation: any): ReactElement {
  return <View style={styles.drawerContent}>
    <View style={styles.headerView}>
      <Image source={require("../../../assets/images/profile.png")} style={styles.profileImage} />
      <View>
        <Text style={styles.usernameLabel}>Unregistered User</Text>
        <Text style={styles.subLabel}>Click here to login / create user</Text>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  headerView: {
    backgroundColor: "#8478A3",
    height: 150,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 5,
    paddingRight: 5,
    elevation: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",

  },
  profileImage: {
    width: 80,
    height: 80
  },
  usernameLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1.5
  },
  subLabel: {
    color: "#ddd",
    fontSize: 12,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  }
})