import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

const input = props => {
    return  <TextInput {...props} style={{...styles.input,...props.style}} />
}
const styles = StyleSheet.create({
    input:{
        fontSize:16,
        borderBottomColor:'#000',
        borderBottomWidth:2,
        marginVertical:20
    }
})
export default input;