import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INC = 15;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //   color = red , green , blue;
    // change = +15 , -15

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }

    // if (color === "red") {
    //   if (red + change > 255 || red + change < 0) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }
  };

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

export default SquareScreen;

const styles = StyleSheet.create({});

// alwayss create states in parent screenss not in components
// and for changing and set in usestate use callback methods
