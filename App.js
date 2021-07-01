import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import Deconnexion from "./app/screens/Deconnexion"
import Reservation from "./app/screens/Reservation"
import Confirmation from "./app/screens/Confirmation"

// imports for calendar
import 'moment';
import 'moment/locale/fr';

// components
import AppDrawer from './app/components/AppDrawer';

//config
import colors from "./app/config/colors"

const Stack = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Deconnexion"
        drawerType={"front"}
        overlayColor="transparent"
        edgeWidth={100}
        drawerStyle={{
          backgroundColor: colors.white,
          width: "60%"
        }}
        drawerContent={(props) => <AppDrawer {...props} />}
      >
        <Stack.Screen name="Deconnexion">{(props) => <Deconnexion {...props} />}</Stack.Screen>
        <Stack.Screen name="Reservation">{(props) => <Reservation {...props} />}</Stack.Screen>
        <Stack.Screen name="Confirmation">{(props) => <Confirmation {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
