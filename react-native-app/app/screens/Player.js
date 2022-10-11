import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import songs from "../../model/data";
import { Audio } from "expo-av";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";

const { width, height } = Dimensions.get("window");

const Player = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [soundObj, setSoundObj] = useState(null);

  const handleMusic = async () => {
    if (soundObj === null) {
      const playbackObj = new Audio.Sound();
      const status = await playbackObj.loadAsync(songs[songIndex].url, {
        shouldPlay: true,
      });
      setSoundObj({ playbackObj, status });
      console.log(status);
    }

    // pause
    if (soundObj.status.isLoaded && soundObj?.status.isPlaying) {
      const status = await soundObj.playbackObj.pauseAsync();
      setSoundObj({ ...soundObj, status });
    }
  };

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
          onMomentumScrollEnd={(event) => {
            console.log(event.nativeEvent.contentOffset.x);
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            setSongIndex(index);
          }}
          horizontal
          pagingEnabled
        />
        <View style={styles.songData}>
          <View>
            <Text style={styles.title}>{songs[songIndex].title}</Text>
            <Text style={styles.artist}>{songs[songIndex].artist}</Text>
          </View>
          <Ionicons name="heart-outline" size={26} color="#00FFFF" />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#00FFFF"
          minimumTrackTintColor="#00FFFF"
          maximumTrackTintColor="#FFFFFF"
        />
      </View>
      <View style={styles.durationContainer}>
        <Text style={styles.duration}>00:00</Text>
        <Text style={styles.duration}>00:00</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable>
          <Ionicons name="play-skip-back-outline" size={30} color="#00FFFF" />
        </Pressable>
        <Pressable onPress={handleMusic}>
          <Ionicons name="ios-play-circle" size={80} color="#00FFFF" />
        </Pressable>
        <Pressable>
          <Ionicons
            name="play-skip-forward-outline"
            size={30}
            color="#00FFFF"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
  },
  mainContainer: {
    flex: 0.75,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 80,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: 360,
    height: 260,
    borderRadius: 15,
  },
  songData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  artist: {
    color: "gray",
    paddingBottom: 10,
  },
  slider: {
    width: width,
    height: 20,
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duration: {
    color: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
