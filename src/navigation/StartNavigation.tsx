import { createStackNavigator } from "@react-navigation/stack";
import KakaoLogin from "../kakao/KakaoLogin";
import SiteUp from "../kakao/SiteUp";
import Start_user from "../kakao/Start_user";
import BottomTabNav from "./BottomTabNav";
import HomeScreen from "./HomeScreen";



const StartNavigation=()=>{
    const Stack = createStackNavigator();


    return(<>
       <Stack.Navigator initialRouteName='HomeScreen'
    screenOptions={{ headerShown: false,

    }}
    
    
      >
        <Stack.Screen  name='Start_user' component={Start_user}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
         />
        <Stack.Screen name='KakaoLogin' component={KakaoLogin}
       /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        />
        <Stack.Screen name='SiteUp' component={SiteUp}
       /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        />
          <Stack.Screen name='BottomTabNav' component={BottomTabNav}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
      </Stack.Navigator>
    </>)
}

export default StartNavigation;