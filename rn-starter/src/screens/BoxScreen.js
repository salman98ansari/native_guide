import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textstyle}>Box Screen</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textstyle: {
    borderWidth: 1,
    borderColor: "brown",
    // marginVertical: 20,
    // marginHorizontal: 20,
    margin: 20,
  },
});
