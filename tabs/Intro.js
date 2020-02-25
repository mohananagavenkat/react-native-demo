import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Intro = (props) => {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={{fontSize:70}}>🤵</Text>
                <Text style={{fontSize:30}}>Intro..!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor:'transparent'
    },
    child1:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#fff'
    }
  });

export default Intro;