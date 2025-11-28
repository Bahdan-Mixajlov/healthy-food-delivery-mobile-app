import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarItems}>
        <FontAwesome name="search" size={24} color="#999999" />
        <Text style={styles.textContainer}>Search dishes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    height: 40,
    margin: 5,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textContainer: {
    color: "#999999",
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
