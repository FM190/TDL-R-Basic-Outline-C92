import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator= () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name = "Dashboard" component = {TabNavigator}/>
    <Drawer.Screen name = "Profile" component = {Profile}/>

    </Drawer.Navigator>
  )
}

export default DrawerNavigator;