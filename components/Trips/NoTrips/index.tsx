import { useNavigation } from "@react-navigation/native";
import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NoTrips(): ReactElement {
  const navigation = useNavigation()
  return (
    <View style={styles.noTripsContainer}>
      <Image source={require("../../../assets/images/trips/no-trips2.png")} style={styles.image} />
      <Text style={styles.title}>Nuk keni udhetime</Text>
      <Text style={styles.label}>Porosisni nje taxi per te mbushur udhetimet tuaja!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonLabel}>Porosit nje taxi!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  noTripsContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#8478A3",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  label: {
    fontSize: 15,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "grey"
  },
  button: {
    width: 200,
    backgroundColor: "#8478A3",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25
  },
  buttonLabel: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16
  }
})