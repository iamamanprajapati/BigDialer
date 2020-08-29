import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Favorites } from './Screens/Favorites'
import { ContactList } from "./Screens/ContactList";
import { Recents } from "./Screens/Recents";


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Recents" component={Recents} />
        <Tab.Screen name="ContactList" component={ContactList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
