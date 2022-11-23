import {Alert, Easing} from "react-native";
import { Image , Text,View} from "react-native-animatable";
import { grany_home } from "../style/Styles";
import logo from "../assets/logo/logo.png"
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect, useRef, useState } from "react";
import Description from "../kakao/Description"
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated } from "react-native";
import kakao_img from "../assets/logo/kakao-talk.png"
const FadeInView = (props:any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const pan = useRef(new Animated.ValueXY()).current;
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 10000,
            useNativeDriver: false
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
const Start_user =({navigation}:any)=>{
    const AnimatedBox=Animated.createAnimatedComponent(logo);

  
   

    return(

        <>
<SafeAreaView style={grany_home.m_v} edges={['top', 'left', 'right']}>

        <View style={[grany_home.main_view]}>
            
   <View style={[{flex:1,margin:30}]}>
    <Image animation={"pulse"} easing="ease-out" iterationCount={3}  style={[{marginRight:10},grany_home.big_img]} source={logo}/>    
    </View>



     
    <TouchableOpacity style={[grany_home.flex_blue_btn,{backgroundColor:"#F7E600"}]} onPress={()=>navigation.navigate("SiteUp")}>
    
<Text  style={[grany_home.flex_blue_btn_text,{color:"#3A1D1D"}]}><Image style={[grany_home.icon_img]} source={kakao_img}/>  카카오 계정으로 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=> navigation.navigate("BottomTabNav")}>

<Text  style={[grany_home.flex_blue_btn_text]}>시작하기</Text>
            </TouchableOpacity>

        
            
            </View>        
        </SafeAreaView>
        
        
        
        
        </>
    )
}

export default Start_user