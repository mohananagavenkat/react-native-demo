import React, { } from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ExperienceTab from '../tabs/Experience';
import IntroTab from '../tabs/Intro';
import PortfolioTab from '../tabs/Portfolio';



const Tab = createMaterialTopTabNavigator();

const SmapleTabs = () => {
    return (
        <Tab.Navigator lazy={true} >
            <Tab.Screen name="Intro" component={IntroTab} />
            <Tab.Screen name="Experience" component={ExperienceTab} />
            <Tab.Screen name="Portfolio" component={PortfolioTab} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({

});
export default SmapleTabs;

