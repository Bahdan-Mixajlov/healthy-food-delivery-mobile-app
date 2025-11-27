import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Latest Offers</Text>

      <View style={styles.offerContainer}>
        <Image
          style={styles.offerImages}
          source={{
            uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fresh-healthy-food-menu-design-template-7d4daa678d01ed12fb42d431e383637f_screen.jpg?ts=1651134481",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: 220,
    width: "80%",
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
    resizeMode: "stretch",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Offers;
