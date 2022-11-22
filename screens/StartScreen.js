import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const StartScreen = ({ onPickNumber }) => {
  const [userInput, setUserInput] = useState("");

  const userInputChangeHandler = (e) => {
    setUserInput(e);
  };

  const resetInputHandler = () => {
    setUserInput("");
  };

  const confirmInputHandler = () => {
    const enteredNumber = parseInt(userInput);

    if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 99) {
      Alert.alert("Invalid number", "Number has to be a number 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <Instruction>Enter a Number</Instruction>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={userInputChangeHandler}
          value={userInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
