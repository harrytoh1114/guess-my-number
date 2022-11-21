import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMethod="auto"
        style={styles.rootScreen}
        imageStyle={styles.backgrounImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgrounImage: {
    opacity: 0.15,
  },
});
