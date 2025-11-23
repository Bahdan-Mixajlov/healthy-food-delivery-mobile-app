import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarItems}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.textContainer}>SearchBar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b525e",
    flexDirection: "row",
    height: 40,
    margin: 5,
    borderRadius: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textContainer: {
    color: "#ffffff",
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
