import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/success.png')}/>
            </View>
            <Text style={styles.summeryText}>You needed <Text style={styles.highligtht}> {roundsNumber} </Text> rounds to guess the number <Text style={styles.highligtht}> {userNumber} </Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
       flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summeryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: '#e9e9e9'
        
    },
    highligtht: {
        fontFamily: 'open-sans-bold',
        color: '#eb1064'
    }
})