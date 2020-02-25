import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import config from "../constants/constants";

const MyButton = props => {

    return (
        <TouchableOpacity {...props} style={{ ...styles.btn, ...props.style }}>
            <View>
                <Text style={{ color: styles.btn.color }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    btn: {
        borderColor: config.headerColor,
        backgroundColor: 'transparent',
        color: config.headerColor,
        borderWidth: 1, maxWidth: 100,
        borderRadius: 4, height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
});

export default MyButton;