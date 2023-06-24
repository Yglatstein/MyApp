import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        Hi there! I'm Yahel, a dedicated and experienced product manager with a
        passion for creating innovative solutions that address real-world
        problems. I thrive in dynamic environments, collaborating with
        cross-functional teams to bring ideas to life and deliver exceptional
        products. With a keen eye for market trends and a customer-centric
        mindset, I excel at identifying user needs and translating them into
        actionable strategies. I am skilled in driving product roadmaps,
        prioritizing features, and ensuring successful product launches. I am
        constantly seeking opportunities to learn and grow, keeping up with the
        latest industry advancements. Together, let's build products that make a
        positive impact and drive meaningful change.
      </Text>
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
});
