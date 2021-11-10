import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Salman";
  const JSX = <Text>Salman here</Text>;
  return (
    <View>
      <Text style={[styles.textstyle]}>Getting Start With React Native!</Text>
      {/* <View>{JSX}</View> */}
      <Text style={{ fontSize: 20 }}>My name is {greeting}</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 40,
  },
});
