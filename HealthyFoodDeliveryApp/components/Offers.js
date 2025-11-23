import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Latest Offers</Text>

      <View style={styles.offerContainer}>
        <Text style={styles.textContainer}>Offer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },

  offerContainer: {
    backgroundColor: "#2c323b",
    height: 200,
    width: "80%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTextContainer: {
    width: "90%",
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    textAlign: "left",
  },
});

export default Offers;
