import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
// Make sure this import isn't `react-native-shared-element` 👇
import { SharedElement } from 'react-navigation-shared-element'
import { useNavigation } from 'react-navigation-hooks'

const imageSource = { uri: 'https://source.unsplash.com/random' }

export default function MainScreen() {
  const { navigate } = useNavigation()
 
  const data = [
    { id: 'pizza' }, 
    // ...
  ]
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Destination')}>
        <SharedElement id="someUniqueId">
          <Image source={imageSource} style={styles.image} />
        </SharedElement>
      </TouchableOpacity>
      <>
      {data.map(item => ( 
        <TouchableOpacity key={item.id} onPress={() => navigate('Destination', { id: item.id })}>
          <SharedElement id={`photo-${item.id}`}> 
            <Image source={imageSource} style={styles.image} />
          </SharedElement>
        </TouchableOpacity>
      ))}
    </>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
})