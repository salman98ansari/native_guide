import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Inscrease"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Descrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count :: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
