import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import Offers from "./components/Offers";
import SearchBar from "./components/SearchBar";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <Offers></Offers>
      <PopularItems></PopularItems>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
