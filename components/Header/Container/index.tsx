import React, { ReactElement, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppHeader from "../AppHeader";
import Constants from "expo-constants";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleOrderDetailsOnDrawer } from "../../../redux/app/appSlice";
import { useDrawerStatus } from '@react-navigation/drawer';
import { useRoute } from "@react-navigation/native";


interface IProps {
  navigation: any
}

export default function Header({ navigation }: IProps): ReactElement {
  const dispatch = useAppDispatch()
  const currentView = useAppSelector(state => state.app.currentView)
  const isDrawerOpen = useDrawerStatus()

  const handleOpen = () => {
    currentView === "routing" && dispatch(toggleOrderDetailsOnDrawer(false))
    navigation?.openDrawer()
  }

  useEffect(() => {
    if (isDrawerOpen === "closed" && currentView === "routing") {
      dispatch(toggleOrderDetailsOnDrawer(true))
    }
  }, [isDrawerOpen])

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
    width: 45,
    height: 45,
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