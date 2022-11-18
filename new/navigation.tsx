import React from 'react';
import { View, Image } from 'react-native';
import Navigator, { SharedElement, SharedElementGroup } from 'native-navigation';

const onPress = id => () => 
 Navigator.push('ToScreen', { id }, {
  transitionGroup: id,
 });

class FromScreen extends React.Component {
 render() {
  const { posters } = this.props;
  return (
   <View>
    {posters.map(poster => (
     <SharedElementGroup id={poster.id}>
      <Touchable onPress={onPress(poster.id)}>
       <SharedElement
        type="poster"
        typeId={poster.id}
       >
        <Image source={{ uri: poster.url }} />
       </SharedElement>
      </Touchable>
     </SharedElementGroup>
    ))}
   </View>
  );
 }
}
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