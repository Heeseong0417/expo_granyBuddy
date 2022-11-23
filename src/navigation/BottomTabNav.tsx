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
import IC from "../CertificationTest/index"
import Certification from '../Certification';
import CertificationResult from '../CertificationResult';
import KakaoLogin from '../kakao/KakaoLogin';
import Start_user from '../kakao/Start_user';
const Tab = createMaterialBottomTabNavigator();
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
function BottomTabNav() {
  return (
  
    <Tab.Navigator 
    labeled={true}
    backBehavior={"firstRoute"}
    //tabBarPosition="bottom"
    initialRouteName="홈"
    shifting={true}
      activeColor="#4A319A"
      inactiveColor='#fff'
      
      barStyle={{ backgroundColor: '#0073F0',opacity:0.8,maxHeight:100}}
  >
    
    <Tab.Screen
      name="HOME"
      
      component={Grany_main}
      
      options={{
        
        
        tabBarLabel: '홈',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
      
      <Tab.Screen
      name="버디예약"
      component={KakaoLogin}
      
      options={{
        
        
        tabBarLabel: '버디예약',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
        ),
      }}
      
    />
    <Tab.Screen
      name="결과"
      component={IC}
      options={{
        tabBarLabel: '결과',
        tabBarBadge: 3,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clock-check-outline" color={color} size={26} />
        ),
        
      }}
    />
    <Tab.Screen
      name="사용자"
      component={Start_user}
      options={{
        tabBarLabel: '사용자',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-box-multiple-outline" color={color} size={26} />
        ),
      }}
    />
   {/**<Tab.Screen
         
          name="Certification"
          component={Certification}
        />
         <Tab.Screen
         
         name="CertificationResult"
         component={CertificationResult}
       />
    **/}
  </Tab.Navigator>
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