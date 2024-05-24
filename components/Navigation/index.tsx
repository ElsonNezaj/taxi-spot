import React, { ReactElement, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Content from "../MapView/Content";
import Header from "../Header/Container";
import DrawerContent from "./DrawerContent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleOrderDetailsOnDrawer } from "../../redux/app/appSlice";
import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerContentComponentProps, DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

export default function AppNavigation(): ReactElement {
  const dispatch = useAppDispatch()
  const currentView = useAppSelector(state => state.app.currentView)
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props: DrawerContentComponentProps) => <DrawerContent navigation={props} />}
        backBehavior="history"
        screenOptions={{
          drawerPosition: "right",
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      >
        <Drawer.Screen name="Home" options={{ drawerLabel: "Hello" }} component={Content} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}