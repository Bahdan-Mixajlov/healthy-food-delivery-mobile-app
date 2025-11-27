import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarItems}>
        <FontAwesome name="search" size={24} color="black" />
        <Text style={styles.textContainer}>SearchBar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    margin: 5,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textContainer: {
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    margin: 10,
  },

  SearchBarItems: {
    display: "inline",
    margin: 20,
  },
});

export default SearchBar;
