import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionsText from '../components/ui/InstructionsText';

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
        <View style={styles.rootContainer}>
            <Title> Guess Number</Title>
            <Card>
                <InstructionsText>Enter a Number</InstructionsText>
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
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
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