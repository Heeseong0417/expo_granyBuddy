import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, useWindowDimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardStyleInterpolators } from 'react-navigation-stack';
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from './HomeScreen';
import Main_home from './Main_home';
import Navigation from './Navigation';
import None1 from './None';
import { grany_home } from '../style/Styles';
import Grany_main from './Grany_main';

const Tab = createMaterialBottomTabNavigator();
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
function BottomTabNav() {
  return (
    <SafeAreaProvider>
    <Tab.Navigator 
    labeled={true}
    backBehavior={"firstRoute"}
    //tabBarPosition="bottom"
    initialRouteName="홈"
    shifting={true}
      activeColor="#4A319A"
      barStyle={{ backgroundColor: '#0073F0' }}
  >
    
    <Tab.Screen
      name="HOME"
      
      component={Navigation}
      
      options={{
        
        
        tabBarLabel: '홈',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
      
      <Tab.Screen
      name="버디예약"
      component={Grany_main}
      
      options={{
        
        
        tabBarLabel: '버디예약',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      
    />
    <Tab.Screen
      name="결과"
      component={None1}
      options={{
        tabBarLabel: '결과',
        tabBarBadge: 3,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
        
      }}
    />
    <Tab.Screen
      name="사용자"
      component={HomeScreen}
      options={{
        tabBarLabel: '사용자',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator></SafeAreaProvider>
  );
}
export default BottomTabNav;


/**
 * 
 *  <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
      shifting={true}
    >
      
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        
        options={{
          
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={None1}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
 */