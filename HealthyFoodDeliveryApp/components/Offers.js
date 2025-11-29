import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Latest Offers</Text>

      <View style={styles.offerContainer}>
        <Image
          style={styles.offerImages}
          source={require("../assets/images/offer.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
  },

  textContainer: {
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },

  offerContainer: {
    height: 180,
    width: "90%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  headerTextContainer: {
    width: "90%",
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    textAlign: "left",
  },

  offerImages: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default Offers;
