import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberImputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType="numeric"
                onChangeText={numberImputHandler}
                autoCorrect={false}
                value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 26,
        marginTop: 80,
        marginHorizontal: 24,
        borderRadius: 8,
        // backgroundColor: '#12121258',
        // elevation: 5,
        // shadowColor: 'grey',
        // shadowOpacity: 0.25,
        alignItems: 'center'
    },
    numberInput: {
        height: 60,
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.border,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
        width: 60,
        color: 'white',
    },
    buttonContainer: {
        marginTop: 6,
        flexDirection: 'row',
    }
})

export default StartGameScreen;