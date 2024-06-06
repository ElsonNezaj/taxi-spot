import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import { ParamListBase, useRoute } from "@react-navigation/native";
import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IProps {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>
}

export default function SharedHeader({ navigation }: IProps): ReactElement {
  const route = useRoute().name
  return (
    <View style={styles.sharedHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../../../assets/images/navigation/back.png")} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.routeLabel}>{route}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sharedHeaderContainer: {
    paddingTop: 60,
    backgroundColor: "#8478A3",
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: "#786d94",
    margin: 5,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: "center"
  },
  backIcon: {
    height: "50%",
    width: "50%",
    tintColor: "white",
  },
  routeLabel: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 2
  }
})