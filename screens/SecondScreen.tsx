import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import questions from "../data/questions";

function WelcomeScreen() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.App}>
        <Text style={styles.h1}>USA Quiz 🇺🇸</Text>

        <Text style={styles.h2}>Score: {score}</Text>

        {showResults ? (
          <View style={styles.final_results}>
            <Text style={styles.h1}>Final Results</Text>
            <Text style={styles.h2}>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </Text>
            <Text>
              <Button onPress={() => restartGame()} title="Restart Game" />
            </Text>
          </View>
        ) : (
          <View style={styles.question_card}>
            <Text style={styles.h2}>
              Question: {currentQuestion + 1} out of {questions.length}
            </Text>
            <Text style={styles.question_text}>
              {questions[currentQuestion].text}
            </Text>
            {questions[currentQuestion].options.map((option) => {
              return (
                <View>
                  <Text>
                    <Button
                      onPress={() => optionClicked(option.isCorrect)}
                      title={option.text}
                      key={option.id}
                    />
                  </Text>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
  App: {},
  h1: {
    fontWeight: "bold",
    color: "#eb1064",
    fontSize: 30,
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 15,
    margin: 20,
  },
  final_results: {},
  question_card: {},
  question_text: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 10,
  },
});
