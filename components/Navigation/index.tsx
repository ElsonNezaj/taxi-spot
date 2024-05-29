import React, { ReactElement, useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Content from "../MapView/Content";
import Header from "../Header/Container";
import DrawerContent from "./DrawerContent";
import SharedHeader from "./SharedHeader";
import Trips from "../Trips/Content";

export default function AppNavigation(): ReactElement {
  const Drawer = createDrawerNavigator();
  const [currentRoute, setCurrentRoute] = useState<string>("Home")

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={() => <DrawerContent />}
        backBehavior="initialRoute"
      >
        <Drawer.Screen name="Home" options={{
          drawerPosition: "right",
          header: ({ navigation, route }) => {
            setCurrentRoute(route.name)
            return <Header navigation={navigation} />
          },
        }}
          component={Content}
        />

        <Drawer.Screen
          name="Udhetimet"
          options={{
            drawerPosition: "right",
            header: ({ navigation, route }) => {
              setCurrentRoute(route.name)
              return <SharedHeader routeName={currentRoute} navigation={navigation} />
            }
          }}
          component={Trips}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}