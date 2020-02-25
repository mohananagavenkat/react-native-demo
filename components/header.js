import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import config from '../constants/constants';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const header = props => {

    const navigation = useNavigation();

    let openDrawer = () => {
        console.log("clicking")
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.navIcon} activeOpacity={.9} onPress={openDrawer} >
                    <EvilIcons name="navicon" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 26,
        backgroundColor: config.headerColor,
        alignItems: 'center',
        flexDirection:'row',
        alignSelf:"flex-end",
    },
    navContainer: {
        width: 50,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    headerTextContainer:{
        flex:1,
        height:'100%',
        justifyContent:'center'
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily:'open-sans-bold',
        left:-25,
        letterSpacing:1
    }
});

export default header;