import React from 'react';
import { View, Image } from 'react-native';
import Navigator, { SharedElement, SharedElementGroup } from 'native-navigation';

class ToScreen extends React.Component {
 render() {
  return (
   <View>
    {/* ... */}
    <SharedElement
     type="poster"
     typeId={poster.id}
    >
     <Image source={{ uri: poster.url }} />
    </SharedElement>
    {/* ... */}
   </View>
  );
 }
}