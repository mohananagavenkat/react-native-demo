import React from 'react';
import { View, StyleSheet } from 'react-native';
const card = props => {
    return (
        <View {...props} style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        margin:20,
        padding:20,
        backgroundColor:'#eee',
        shadowColor:'#000',
        shadowOpacity:.25,
        shadowRadius:10,
        shadowOffset:{width:0,height:1},
        elevation:5,
    }
})

export default card;
