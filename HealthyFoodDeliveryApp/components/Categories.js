import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Categories</Text>

      <View style={styles.categoriesContainer}>
        <View style={styles.categorieContainer}>
          <View style={styles.pickedIconBackground}>
            <Text style={{ fontSize: 30 }}>🥗</Text>
          </View>
          <Text style={styles.textContainer}>Salads</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Text style={{ fontSize: 30 }}>🍹</Text>
          </View>
          <Text style={styles.textContainer}>Drinks</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Text style={{ fontSize: 30 }}>🥝</Text>
          </View>
          <Text style={styles.textContainer}>Fruits</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Text style={{ fontSize: 30 }}>🍣</Text>
          </View>
          <Text style={styles.textContainer}>Seafood</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },

  textContainer: {
    color: "black",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
  },

  headerTextContainer: {
    width: "90%",
    color: "black",
    fontSize: 20,
    marginHorizontal: 20,
    fontFamily: "Roboto-Medium",
    textAlign: "left",
  },

  categoriesContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  categorieContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },

  iconBackground: {
    width: 60,
    height: 60,

    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  pickedIconBackground: {
    width: 60,
    height: 60,
    backgroundColor: "#d5f0d9",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default Categories;
