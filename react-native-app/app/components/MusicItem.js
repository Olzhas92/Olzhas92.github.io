import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const MusicItem = ({ item }) => {
  const { title, artist, duration } = item;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="play" size={24} style={{ color: "#00FFFF" }} />
        <View style={styles.songData}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <Text style={styles.duration}>{duration}</Text>
    </View>
  );
};

export default MusicItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    width: width,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  songData: {
    marginLeft: 10,

    paddingLeft: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  artist: {
    color: "gray",
  },
  duration: {
    color: "gray",
  },
});
