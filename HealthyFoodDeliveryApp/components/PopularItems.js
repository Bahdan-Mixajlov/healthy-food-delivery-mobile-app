import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const PopularItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>Popular Items</Text>

      <View style={styles.itemsContainer}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.itemImages}
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/030/768/176/non_2x/buddha-bowl-vegetarian-bowl-with-grains-veggies-and-protein-isolated-png.png",
            }}
          />

          <View style={styles.rowContainer}>
            <Text style={styles.textContainer}>Buddha bowl</Text>
            <Text style={styles.priceContainer}>$5.00</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.descriptionText}>
              Fresh & Healthy, 350 kcal • Vegan{" "}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Order"
                color="#1AA041"
                accessibilityLabel="Order this beautifull dish"
              />
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            style={styles.itemImages}
            source={{
              uri: "https://img.pikbest.com/png-images/20240728/salad-healthy-green-vegetable-bowl-nutritious-_10685144.png!bw700",
            }}
          />

          <View style={styles.rowContainer}>
            <Text style={styles.textContainer}>Salad bowl</Text>
            <Text style={styles.priceContainer}>$3.50</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.descriptionText}>
              100% Organic, Healthy • 400g{" "}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Order"
                color="#1AA041"
                accessibilityLabel="Order this beautifull dish"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  textContainer: {
    color: "black",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    textAlign: "left",
  },

  itemsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemContainer: {
    backgroundColor: "#f2f2f2",
    height: "80%",
    width: "48%",
    margin: 5,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTextContainer: {
    width: "90%",
    color: "black",
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    textAlign: "left",
  },

  itemImages: {
    width: "100%",
    height: "65%",
    resizeMode: "contain",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
  },

  buttonContainer: {
    transform: [{ scale: 0.8 }],
    borderRadius: 10,
    overflow: "hidden",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
  },

  descriptionText: {
    color: "gray",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
    paddingHorizontal: 3,
  },

  priceContainer: {
    marginRight: 10,
    fontFamily: "Roboto-Medium",
    color: "#1AA041",
  },
});

export default PopularItems;
