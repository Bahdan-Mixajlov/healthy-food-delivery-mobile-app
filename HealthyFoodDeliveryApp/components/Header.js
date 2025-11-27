import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.geoContainer}>
        <FontAwesome5
          name="map-marker-alt"
          size={24}
          color="#55a62d"
          class="marker"
        />
        <View style={styles.addressWrapper}>
          <Text style={styles.textContainer}>Address</Text>
          <MaterialIcons name="expand-more" size={24} color="black" />
        </View>
      </View>
      <FontAwesome name="user-circle" size={24} color="#55a62d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
  },

  textContainer: {
    color: "black",
    fontSize: 15,
    fontFamily: "Roboto-Medium",
  },

  geoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  addressWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
