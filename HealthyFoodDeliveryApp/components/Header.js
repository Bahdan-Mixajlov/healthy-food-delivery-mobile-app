import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="map-marker-alt"
        size={24}
        color="white"
        class="marker"
      />
      <Text style={styles.textContainer}>Address</Text>
      <FontAwesome name="user-circle" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#494a49",
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default Header;
