import axios from "axios";
import React, { useState } from "react";
import { Alert, ScrollView, TextInput, TouchableOpacity } from "react-native";
import {Text,View ,Image} from "react-native-animatable";
import Modal from "react-native-modal/dist/modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { grany_home, grany_start } from "../style/Styles";
import * as Notifications from 'expo-notifications';
const Login =({navigation}:any)=>{
    const [isModal, setModal] = useState(false);
    const [visible, setvisible] = useState(false)
    const [users_data, setusers_data] = useState({id:"",password:""})
    const axios_data =()=>{  
  
        const Uri = 'http://10.0.2.2:8080/site_in'
        const data_test = {
          company:"(주)밸리언트데이터",
          userId :users_data.id,
      userPassword :users_data.password,
      userName :"",
      userPhone :"",
      userAddress :"",
      userKakao :"카카오아이디",
      userPay :"페이",
      startDate: new Date(),
      //new Date(),//.toISOString().substring(0,10),
      
      userLevel :"3",
      notice :"없음"
        }
        console.log(JSON.stringify(data_test))
        alert(JSON.stringify(data_test))
        
    
        axios.post(Uri, data_test).then(function (response) {
          console.log(JSON.stringify(response.data))
          if(response.data == false){
            Alert.alert("아이디 또는 비밀번호가 일치하지 않습니다! 다시 로그인해주세요.") 
          }else{
           navigation.reset({routes: [{name: 'BottomTabNav'}]}) 
          }
           
        }).catch(function (error) {
          console.log(error);
         Alert.alert("에러가 발생하였습니다! 다시 로그인해주세요") 
        })
    
         
      
        
    
    
    }

return(<>
    <SafeAreaView style={grany_home.m_v} edges={['top', 'left', 'right']}>
        <ScrollView>
        
    <View style={[grany_start.siteup_con]}>
        <View style={[grany_start.form_title_con]}>
            <Text style={[grany_start.form_title]}>회원 가입</Text>
            <View style={[grany_home.stick]}/>
            <View style={[{margin:10,marginTop:10}]}>
                <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    환영합니다 
                </Text>
                <Text style={[grany_start.form_text,{textAlign:"center",margin:5}]}>
                    그래니버디 로그인을 위한 페이지 입니다.
                </Text>
            </View>
        </View>

        <View style={[{margin:10,flex:3},grany_start.form_title_con]}>
        <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    가입자 정보 입력
                </Text>
                <View style={[grany_home.stick]}/>

{/**params data ------------------------------------------------------------------ */}
<View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>아이디  
         
         </Text>
  
        
      
       </View>
       <View style={[grany_start.form_item]}>
       <TextInput placeholder={"아이디를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            users_data.id = text
           /**setform((data)=> {return{ ...data ,form}})**/}}/> 
       </View>

       <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>비밀번호  </Text>   
       <TouchableOpacity style={[grany_home.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput  keyboardType="number-pad" placeholder={"비밀번호를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            users_data.password = text
            /**setform((data)=> {return{ ...data ,form}})**/}}/>

        </View>
            {users_data.password.length <=8 ? (<Text style={[{color:"red"}]}>비밀번호는 8자리 이상입니다.</Text>):(<></>)} 

        
            <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=> axios_data() }>
<Text  style={[grany_home.flex_blue_btn_text]}>로그인</Text>
            </TouchableOpacity>
                    
            <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=>{
                
                Notifications.scheduleNotificationAsync({
                    content: {
                      title: "Time's up!",
                      body: 'Change sides!',
                    },
                    trigger: {
                      seconds: 4, //onPress가 클릭이 되면 60초 뒤에 알람이 발생합니다.
                    },
                  })
                }
            }>
<Text  style={[grany_home.flex_blue_btn_text]}>푸시알림</Text>
            </TouchableOpacity>
       </View>
       </View>

       </ScrollView>
       </SafeAreaView>
</>)
}

export default Login