import { createStackNavigator } from "@react-navigation/stack";
import KakaoLogin from "./KakaoLogin";
import SiteUp from "./SiteUp";
import Start_user from "./Start_user";
import BottomTabNav from "../navigation/BottomTabNav";
import HomeScreen from "../navigation/HomeScreen";
import Web_cer from "../WebView/App"
import CertificationTest from "../CertificationTest";
import Certification from "../Certification";
import CertificationResult from "../CertificationResult";
import UserCertifcationForm from "./UserCertifcationForm";


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
          <Stack.Screen name='CertificationTest' component={CertificationTest}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
          <Stack.Screen name='Certification' component={Certification}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        
        />
          <Stack.Screen name='CertificationResult' component={CertificationResult}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
          <Stack.Screen name='UserCertifcationForm' component={UserCertifcationForm}
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