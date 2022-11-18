import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

const imageSource = { uri: 'https://source.unsplash.com/random' }

export default function Destination() {
  return (
    <View>
      <SharedElement id="someUniqueId">
        <Image source={imageSource} style={styles.image} />
      </SharedElement>
    </View>
  )
}

Destination.sharedElements = (navigation: any, otherNavigation: any, showing: any) => {
  return ['someUniqueId']
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
})