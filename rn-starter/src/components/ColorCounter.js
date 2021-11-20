import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color, onDescrease, onInscrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Inscrease Color ${color}`} onPress={() => onInscrease()} />
      <Button
        title={`Descrease Color ${color}`}
        onPress={() => {
          onDescrease();
        }}
      />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
