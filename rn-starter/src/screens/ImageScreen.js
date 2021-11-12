import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="beach" img={require("../../assets/beach.jpg")} />
      <ImageDetail title="forest" img={require("../../assets/forest.jpg")} />
      <ImageDetail
        title="mountain"
        img={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
