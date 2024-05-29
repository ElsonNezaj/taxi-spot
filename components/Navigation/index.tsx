import React, { ReactElement, useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Content from "../MapView/Content";
import Header from "../Header/Container";
import DrawerContent from "./DrawerContent";
import Trips from "../Trips/Content";
import { Button, View } from "react-native";
import SharedHeader from "./SharedHeader";

export default function AppNavigation(): ReactElement {
  const Drawer = createDrawerNavigator();
  const [currentRoute, setCurrentRoute] = useState<string>("Home")

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={() => <DrawerContent />}
        backBehavior="initialRoute"
        screenOptions={currentRoute === "Home" ? {
          drawerPosition: "right",
          header: ({ navigation, route }) => {
            setCurrentRoute(route.name)
            return <Header navigation={navigation} />
          },
        }
          : {}
        }
      >
        <Drawer.Screen name="Home" component={Content} />
        <Drawer.Screen
          name="Trips"
          options={{
            drawerPosition: "right",
            title: "Udhetimet",
            header: ({ navigation }) => <SharedHeader />
          }}
          component={Trips}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}