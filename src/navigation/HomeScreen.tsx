import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { data } from './data';
import { SharedElement } from 'react-navigation-shared-element';

export default function HomeScreen({ navigation }:any) {
    const { width } = Dimensions.get('screen');
    const ITEM_WIDTH = width * 0.9;
    const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
   
    return(
        <>
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <StatusBar hidden />
      {/* Header */}
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: '#888', textTransform: 'uppercase' }}>
          Saturday 9 January
        </Text>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>
          Today
        </Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
  <ScrollView
    indicatorStyle='white'
    contentContainerStyle={{ alignItems: 'center' }}
  >
    {data.map(item => (
      <View key={item.id}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginBottom: 14 }}
          onPress={() => navigation.navigate('DetailScreen',{ item ,navigation})}
        >
          <SharedElement id={`item_${item.id}_image`} >
          <Image
            style={{
              borderRadius: 14,
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT
            }}
            source={{ uri: item.image_url }}
            resizeMode='cover'
          />
          </SharedElement>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <SimpleLineIcons size={40} color='white' name={"location-pin"} />
              <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    lineHeight: 28
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 18
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
</View>
      </View>
      
    </>
    )
}
