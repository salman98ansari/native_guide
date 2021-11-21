import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <ScrollView>
        <Text style={{ textAlign: "center" }}>Hey There !</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Components");
            }}
          >
            <Text>Go to Components</Text>
          </TouchableOpacity>
        </View>
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Square1");
            }}
          >
            <Text>Square Screen Reducers</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center" }}>Layoutss </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("BoxScreen");
            }}
          >
            <Text>Box Screen </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
