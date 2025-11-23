import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Latest Offers</Text>

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
    alignItems: "center",
    paddingVertical: 10,
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },

  offerContainer: {
    backgroundColor: "#2c323b",
    height: 150,
    width: "80%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Offers;
