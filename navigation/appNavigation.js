import React, { } from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';


import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import CitiesScreen from '../screens/Cities';
import ImagesScreen from '../screens/Images';
import PhotosScreen from '../screens/Photos';
import PostsScreen from '../screens/Posts';
import UsersScreen from '../screens/Users';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        // <Tab.Navigator lazy={true} >
        //     <Tab.Screen name="Cities" component={CitiesScreen} />
        //     <Tab.Screen name="Images" component={ImagesScreen} />
        //     <Tab.Screen name="Posts" component={PostsScreen} />
        //     <Tab.Screen name="Users" component={UsersScreen} />
        // </Tab.Navigator>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Posts" component={PostsScreen} />
            <Drawer.Screen name="Photos" component={PhotosScreen} />
            {/* <Drawer.Screen name="Cities" component={CitiesScreen} />
            <Drawer.Screen name="Users" component={UsersScreen} /> */}
            </Drawer.Navigator>
      </NavigationContainer>
    );
}
const styles = StyleSheet.create({

});
export default AppNavigation;

