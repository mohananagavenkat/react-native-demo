import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabNavigation from '../navigation/TabNavigation';
import config from '../constants/constants';

import Header from '../components/header';
import CurrentLocation from '../components/currentLocation';

const Home = (props) => {
    // console.log(props.navigation);
    return (
      <React.Fragment>
        <Header title="Home"></Header>
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={{fontSize:70,writingDirection:'rtl',}}>👨‍💻</Text>
                <Text style={styles.title}>MORE ME 😉</Text>
            </View>
            <View style={styles.child2}>
                <TabNavigation></TabNavigation>
            </View>
        </View>
      </React.Fragment>
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
      justifyContent:"center"
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
      elevation:5,
      overflow:'hidden'
    },
    title:{
        fontSize:50,
        color:'white',
        fontFamily:'open-sans-SemiBold',
        letterSpacing:5,
        color:config.headerColor,
        textShadowColor:'rgba(0,0,0,0.25)',
        textShadowOffset:{width:1,height:2},
        textShadowRadius:10
    }
  });

export default Home;