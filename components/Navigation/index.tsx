import React, { ReactElement } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Content from "../MapView/Content";
import Header from "../Header/Container";

export default function AppNavigation(): ReactElement {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ navigation }) => <Header />,
        }}
      >
        <Drawer.Screen name="Home" component={Content} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}