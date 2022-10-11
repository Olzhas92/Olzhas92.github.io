import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoriteMusic = () => {
  return (
    <View style={styles.container}>
      <Text>Music</Text>
    </View>
  )
}

export default FavoriteMusic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})