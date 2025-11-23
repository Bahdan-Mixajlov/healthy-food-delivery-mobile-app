import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="white" />
      <Text style={styles.textContainer}>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b525e",
    flexDirection: "row",
    height: 30,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default SearchBar;
