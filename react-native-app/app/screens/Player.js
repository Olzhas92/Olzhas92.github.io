import { StyleSheet, View, FlatList, Dimensions, Image } from "react-native";
import React from "react";
import songs from "../../model/data";

const { width, height } = Dimensions.get("window");

const Player = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={songs}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.artwork} />
            </View>
          )}
          horizontal
          pagingEnabled
        />
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  bottomContainer: {},
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: 300,
    height: 340,
    borderRadius: 15,
  },
});
