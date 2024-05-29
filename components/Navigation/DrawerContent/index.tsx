import React, { ReactNode } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

interface RootStackParaList {
  Home: undefined
  Trips: undefined
}

export default function DrawerContent(): ReactNode {
  const navigation = useNavigation<NavigationProp<RootStackParaList>>();

  return <View style={styles.drawerContent}>
    <View style={styles.headerView}>
      <Image source={require("../../../assets/images/profile.png")} style={styles.profileImage} />
      <View>
        <Text style={styles.usernameLabel}>Unregistered User</Text>
        <Text style={styles.subLabel}>Click here to login / create user</Text>
      </View>
    </View>
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navigation}>
        <Image source={require("../../../assets/images/navigation/home.png")} style={styles.icon} tintColor="white" />
        <Text style={styles.navigationLabel}>Kreu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Trips")} style={styles.navigation}>
        <Image source={require("../../../assets/images/navigation/previous.png")} style={styles.icon} tintColor="white" />
        <Text style={styles.navigationLabel}>Udhetimet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigation}>
        <Image source={require("../../../assets/images/navigation/address.png")} style={styles.icon} tintColor="white" />
        <Text style={styles.navigationLabel}>Rezervimet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigation}>
        <Image source={require("../../../assets/images/navigation/favorite.png")} style={styles.icon} tintColor="white" />
        <Text style={styles.navigationLabel}>Adreast e ruajtura</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigation}>
        <Image source={require("../../../assets/images/navigation/coupon.png")} style={styles.icon} tintColor="white" />
        <Text style={styles.navigationLabel}>Uljet / Ofertat</Text>
      </TouchableOpacity>
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
  },
  navigationContainer: {
    padding: 10,
    flex: 1,
    gap: 20
  },
  navigation: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#8478A370",
    padding: 5,
    borderRadius: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  navigationLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  }
})