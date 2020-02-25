import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AppNavigation from './navigation/appNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
    'open-sans-SemiBold': require('./fonts/OpenSans-SemiBold.ttf'),
    'open-sans-italic': require('./fonts/OpenSans-Italic.ttf'),
    'open-sans-bold-italic': require('./fonts/OpenSans-BoldItalic.ttf')
  });
}

export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(false);
  const Drawer = createDrawerNavigator();

  if(!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onError={(error)=>{console.log(error)}}  onFinish={() => {
      console.log("Fonts Fetched");
      setFontsLoaded(true);
    }} />
  }

  return (
    <AppNavigation></AppNavigation>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor:'#f7287b'
  },
  child1:{
    flex:1,
  },
  child2:{
    flex:2,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:'#fff',
    shadowOffset:{width:0,height:2},
    shadowColor:'white',
    shadowOpacity:.25,
    shadowRadius:20,
    elevation:5
  }
});
