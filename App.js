import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  StyleSheet,TouchableOpacity ,
  Text, SafeAreaView, ScrollView, 
  StatusBar,View} from 'react-native';
import { DataTable } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screen/HomeScreen';
import ListScreen from './Screen/ListScreen';
import DetailsScreen from './Screen/DetailsScreen';
import FavoriteScreen from './Screen/FavoriteScreen';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <>
     
     <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="list" component={ListScreen} />
        <Drawer.Screen name="details" component={DetailsScreen} />
        <Drawer.Screen name="favorite" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    

   
    

    </>
  )
}









export default App;
   