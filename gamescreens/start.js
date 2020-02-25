import React, { useState, componentD } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Card from '../components/card'
import MyButton from '../components/button'
import Input from '../components/input'

const gameStart = props => {

    console.log("rendering"+Math.random());

    let [userInput, setUserInput] = useState('');
    let [isConfirmed, setIsConfirmed] = useState(false);
    let [enteredValue, setEnteredValue] = useState();
    let userInputDisplay = null;

    userInputChangeHandler = (text) => {
        setUserInput(text);
    }

    confirmHandler = (event) => {
        if (!isNaN(userInput) && userInput !== "") {
        } else {
            Alert.alert('Error', 'Enter A Valid Number');
            return;
        }
        Alert.alert('Final Call', 'Are you sure...?', [{
            text: 'OK', onPress: () => {
                console.log('clicked ok');
                setEnteredValue(userInput);
                setIsConfirmed(true);
                setUserInput('');
            }
        }, {
            text: 'Cancel', onPress: () => {
                resetHandler();
            }
        }])
        // setUserInput('')
    }

    resetHandler = (event) => {
        console.log(userInput);
        setIsConfirmed(false);
        setUserInput('')
    }

    if (isConfirmed) {
        userInputDisplay = (
            <Card>
                <Text>Entered Number : {enteredValue} </Text>
            </Card>
        );
    }






    return (
        <React.Fragment>
            <Card>
                <Text style={styles.gameText}>Select Number</Text>
                <Input keyboardType="numeric" autoFocus={true} onChangeText={userInputChangeHandler} value={userInput} />
                <View style={styles.gameButtons} >
                    <MyButton onPress={confirmHandler} title="Confirm" />
                    <MyButton onPress={resetHandler} title="Reset" />
                </View>
            </Card>
            {
                userInputDisplay
            }
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    gameText: {
        fontSize: 16
    },
    gameInput: {
        fontSize: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginVertical: 20
    },
    gameButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    gameButton: {
        flex: 1,
        paddingHorizontal: 4
    }
})

export default gameStart;