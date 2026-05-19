import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber); 
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title/>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Text></Text>
            <View>
                <Text>Higher or Lower ?</Text>
                {/* + - */}
            </View>
            {/* <View>LOG Rounds</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})