import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="home" size={30} color="#1AA041" />
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome5 name="shopping-cart" size={30} color="gray" />
      </View>

      <View style={styles.iconContainer}>
        <Entypo name="menu" size={30} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    width: "90%",
    height: 50,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 50,
    alignSelf: "center",
  },

  textContainer: {
    color: "black",
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
