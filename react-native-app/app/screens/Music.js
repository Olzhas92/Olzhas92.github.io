import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import songs from "../../model/data";
import Icon from "react-native-vector-icons/FontAwesome";
import MusicItem from "../components/MusicItem";

const Music = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={({ item }) => <MusicItem item={item} />}
      />
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    color: "white",
    paddingRight: 20,
    textAlign: "start",
    paddingBottom: 10,
  },
});
