import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PopularItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Popular Items</Text>

      <View style={styles.itemsContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.textContainer}>Item</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.textContainer}>Item</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },

  itemsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  itemContainer: {
    backgroundColor: "#2c323b",
    height: "80%",
    width: "50%",
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

export default PopularItems;
