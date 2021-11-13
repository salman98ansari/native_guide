import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Hey There !</Text>
      <Button
        title="Go to Components"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("List");
          }}
        >
          <Text>Go to List</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("ImageScreen");
          }}
        >
          <Text>Image Screen</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Counter");
          }}
        >
          <Text>Counter Screen</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Color");
          }}
        >
          <Text>Color Screen</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Square");
          }}
        >
          <Text>Square Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    width: "80%",
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
