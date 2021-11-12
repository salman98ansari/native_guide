import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Salman", age: 20 },
    { name: "Arman", age: 20 },
    { name: "Mobin", age: 20 },
    { name: "kamal", age: 20 },
    { name: "salau", age: 20 },
    { name: "Rizwan", age: 20 },
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.textstyle}>
            {item.name} - Age {item.age}
          </Text>
        )}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textstyle: {
    marginVertical: 50,
  },
});
