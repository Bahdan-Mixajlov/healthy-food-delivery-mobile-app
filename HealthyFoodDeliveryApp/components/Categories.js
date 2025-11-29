import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
            <Image
              style={styles.iconImages}
              source={{
                uri: "https://cdn3d.iconscout.com/3d/premium/thumb/salad-3d-icon-png-download-10343036.png",
              }}
            />
          </View>
          <Text style={styles.textContainer}>Salads</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Image
              style={styles.iconImages}
              source={{
                uri: "https://png.pngtree.com/png-vector/20250903/ourmid/pngtree-3d-smoothie-glass-icon-with-straw-healthy-lifestyle-vibe-png-image_17355900.webp",
              }}
            />
          </View>
          <Text style={styles.textContainer}>Drinks</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Image
              style={styles.iconImages}
              source={{
                uri: "https://cdn3d.iconscout.com/3d/premium/thumb/avocado-fruit-3d-icon-png-download-4086698.png",
              }}
            />
          </View>
          <Text style={styles.textContainer}>Fruits</Text>
        </View>

        <View style={styles.categorieContainer}>
          <View style={styles.iconBackground}>
            <Image
              style={styles.iconImages}
              source={{
                uri: "https://cdn3d.iconscout.com/3d/premium/thumb/salmon-sashimi-3d-icon-png-download-11135775.png",
              }}
            />
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

    borderRadius: 15,
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
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  iconImages: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});

export default Categories;
