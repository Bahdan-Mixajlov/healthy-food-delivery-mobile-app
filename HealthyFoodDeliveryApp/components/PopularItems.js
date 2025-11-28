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
              uri: "https://img.freepik.com/premium-photo/fresh-vegan-buddha-bowl-white-background_711700-17766.jpg",
            }}
          />

          <View style={styles.rowContainer}>
            <Text style={styles.textContainer}>Buddha bowl</Text>
            <Text style={styles.textContainer}>$5.00</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.descriptionText}>
              Fresh & Healthy, 350 kcal • Vegan{" "}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Order"
                color="#55a62d"
                accessibilityLabel="Order this beautifull dish"
              />
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            style={styles.itemImages}
            source={{
              uri: "https://media.istockphoto.com/id/1290024277/photo/fresh-healthy-salad-in-bowl.jpg?s=612x612&w=0&k=20&c=Ki2kjMjSuVUsDRoP5jNoXt4hWi1-_GRa0s7JKDoXTxo=",
            }}
          />

          <View style={styles.rowContainer}>
            <Text style={styles.textContainer}>Salad bowl</Text>
            <Text style={styles.textContainer}>$3.50</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.descriptionText}>
              100% Organic, Healthy • 400g{" "}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Order"
                color="#55a62d"
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
    //backgroundColor: "#4645",
    height: "80%",
    width: "48%",
    margin: 5,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
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
});

export default PopularItems;
