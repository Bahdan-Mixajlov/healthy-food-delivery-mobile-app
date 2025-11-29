import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarItems}>
        <FontAwesome name="search" size={24} color="gray" />
        <Text style={styles.textContainer}>Search dishes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    height: 40,
    margin: 5,
    borderRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textContainer: {
    color: "gray",
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
