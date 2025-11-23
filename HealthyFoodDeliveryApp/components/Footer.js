import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="home" size={24} color="white" />
        <Text style={styles.textContainer}>Home</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome5 name="shopping-cart" size={24} color="white" />
        <Text style={styles.textContainer}>Cart</Text>
      </View>

      <View style={styles.iconContainer}>
        <Entypo name="menu" size={24} color="white" />
        <Text style={styles.textContainer}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#494a49",
    width: "100%",
    height: 50,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Roboto-Medium",
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
});

export default Footer;
