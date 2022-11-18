import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { enableScreens } from 'react-native-screens'
enableScreens()

import Origin from './MainScreen'
import Destination from './Destination'
import { NavigationContainer } from '@react-navigation/native'

const App1 =()=>{
const Stack = createSharedElementStackNavigator()


  return (
<>
<NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'
      
      >
        <Stack.Screen name='Origin' component={Origin}
        
         />
        <Stack.Screen name='Destination' component={Destination}
        sharedElements={(route: any) => {
          const post  = route.params;
          console.log(JSON.stringify(post))
          return [{ id: `item_${post.id}_image`, animation: "move" }];
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
</>

  )
}
export default App1



