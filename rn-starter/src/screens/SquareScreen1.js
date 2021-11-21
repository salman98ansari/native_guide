import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INC = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
  }
};
const SquareScreen1 = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="Red"
        onInscrease={() => setColor("red", COLOR_INC)}
        onDescrease={() => setColor("red", -1 * COLOR_INC)}
      />
      <ColorCounter
        color="Blue"
        onInscrease={() => setColor("blue", COLOR_INC)}
        onDescrease={() => setColor("blue", -1 * COLOR_INC)}
      />

      <ColorCounter
        color="Green"
        onInscrease={() => setColor("green", COLOR_INC)}
        onDescrease={() => setColor("green", -1 * COLOR_INC)}
      />
      <View
        style={{
          height: 210,
          width: 210,
          backgroundColor: `rgb(${red} , ${green} , ${blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen1;

const styles = StyleSheet.create({});

// alwayss create states in parent screenss not in components
// and for changing and set in usestate use callback methods
