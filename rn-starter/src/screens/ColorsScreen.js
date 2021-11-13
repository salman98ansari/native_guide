import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        title="Add A color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red} , ${green} , ${blue})`;
};

export default ColorsScreen;

const styles = StyleSheet.create({});
