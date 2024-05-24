import React, { ReactElement } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Content from "../MapView/Content";
import Header from "../Header/Container";
import DrawerContent from "./DrawerContent";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";

export default function AppNavigation(): ReactElement {
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
        <Drawer.Screen name="Home" component={Content} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}