import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.img} />
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
