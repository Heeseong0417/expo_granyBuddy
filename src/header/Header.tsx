import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, Dimensions, GestureResponderEvent, Alert, StatusBar} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { grany_home, styles_main } from "../style/Styles";
import {Text} from 'react-native'

type props ={
name:string
nav: any
}
export type BnbNavigator = {

    Home: undefined;
    Traffic: undefined;
    Safety: undefined;
    CarLog:undefined;
    Account:undefined;  
    jumpTo(arg0: string): void;
    
  };
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export const Header_create =({name,nav}: props)=>{
  const [state, setstate] = useState("none")
const [user, setuser] = useState("")
 
    return(
    <>
    <StatusBar backgroundColor="#fff" barStyle="light-content" />
    <Text style={[{position:"absolute",alignSelf:"center",top:20,color:"#000",zIndex:2},grany_home.main_ht]}>{name}</Text>
    
    <View style={[grany_home.main_header]}>
   
  <TouchableOpacity style={[styles_main.header_text,{position:"absolute",alignSelf:"center",right:20,top:15}]} onPress={()=> nav()}>
    <Ionicons onTextLayout={()=>"my"}  color={"#0073F0"} name={"menu"} size={WINDOW_WIDHT/10}/>
  </TouchableOpacity>
       
    </View>
 

      </>
      )
 }
