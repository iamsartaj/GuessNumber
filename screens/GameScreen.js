import { Text, View, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionsText from '../components/ui/InstructionsText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItems from '../components/game/GuessLogItems';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if(direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newGuess);
        setGuessRounds(prevGuessRounds => [newGuess, ...prevGuessRounds]);
    }

    const guessRoundsLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title/>
            <Text style={styles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionsText>Higher or Lower ?</InstructionsText>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                      <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                      <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItems roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary1,
        textAlign: 'center',
        marginBottom: 8,
    },
    instructionText: {
        fontSize: 16,
        color: Colors.primary1,
        textAlign: 'center',
        marginBottom: 12,
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 14
    }
})