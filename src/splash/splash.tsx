
import React, { useEffect, useState } from 'react';



import grany from "../assets/logo/logo_a.gif"
import {View} from 'react-native-animatable';
import Fastimg from'react-native-fast-image'
import { Image } from 'react-native-animatable';
import comax from './logoComax.gif'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoding from "expo-app-loading"
import * as Font from 'expo-font';
import Main_home from '../navigation/Main_home';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;


export  const Main: any =()=>{
    const [splash, setsplash] = useState(true)
    const [isReady, setIsReady] = useState(false);
    const getFonts = async () => {
      await Font.loadAsync({
        GmarketSansTTFBold: require("../assets/fonts/GmarketSansTTFBold.ttf"),
        GmarketSansTTFLight: require("../assets/fonts/GmarketSansTTFLight.ttf"),
        GmarketSansTTFMedium: require("../assets/fonts/GmarketSansTTFMedium.ttf"),
      });
    };
    useEffect(() => {
    
      setTimeout(() => {
        setsplash(data => data = false)
      }, 3000);
      return () => {
       
      }
    }, [])

    
      return (<>
      {
isReady? (splash ? (<>

<View style={{backgroundColor:"#fff",flex:1,justifyContent:"center"}}><Image source={grany}  style={{width:WINDOW_WIDHT,height:WINDOW_WIDHT}} /></View></>):(<NativeBaseProvider><SafeAreaProvider><Main_home/></SafeAreaProvider></NativeBaseProvider>)):
(<AppLoding startAsync={getFonts} onFinish={() => setIsReady(true)} onError={() => {}}/>)

      }
      
      
      
      </>);

  }
 