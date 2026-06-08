import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { useState, useCallback } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessesRounds, setGuessesRounds] = useState(0);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessesRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessesRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessesRounds(numberOfRounds);
  }

  return (
    // <SafeAreaView style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/Pic.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        onLayout={onLayoutRootView}
      >
      {screen}
      </ImageBackground>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
