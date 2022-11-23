import { ScrollView } from "native-base";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { Text,View,Image } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import Grany_main from "../navigation/Grany_main";
import { grany_home, grany_start } from "../style/Styles";

const SiteUp =()=>{

const [form, setform] = useState({user:{ id:"",siteid:"",password:"",address:"",Pnumber:""},
parent:{name:"",address:"",Pnumber:""}
})
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
                    그래니 버디가입을 위한 페이지 입니다. 카카오 로그인을 통해 간편 회원가입이 가능합니다.
                </Text>
            </View>
        </View>

        <View style={[{margin:10,flex:3},grany_start.form_title_con]}>
        <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    가입자 정보 입력
                </Text>
                <View style={[grany_home.stick]}/>
       <View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>아이디  
         
         </Text>
         
             <TouchableOpacity style={[grany_start.form_btn]} onPress={()=>Alert.alert(form.user.id)} >

<Text  style={[grany_start.flex_blue_btn_text]}>중복확인</Text>
            </TouchableOpacity>  
        
      
       </View>
       <View style={[grany_start.form_item]}>
       <TextInput placeholder={"아이디를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.id = text
           setform((data)=> {return{ ...data ,form}})}}/> 
       </View>

       <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>비밀번호  </Text>   
       <TouchableOpacity style={[grany_home.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"비밀번호를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.password = text
            setform((data)=> {return{ ...data ,form}})}}/>

        </View>
            {form.user.password.length <=8 ? (<Text style={[{color:"red"}]}>비밀번호는 8자리 이상입니다.</Text>):(<></>)} 
        <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>거주지 주소 </Text>        
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"거주지 주소를 입력하세요"} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.address = text
           setform((data)=> {return{ ...data ,form}})}}/> 
        </View>
    <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>휴대폰 번호 </Text>        
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"휴대폰 번호를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.Pnumber = text
           setform((data)=> {return{ ...data ,form}})}}/> 
        </View>
        {/**                             보호자 정보 */}
        {/** 
        <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5,marginTop:30}]}>
                     서비스 수혜자 정보 입력
                </Text>
                <View style={[grany_home.stick]}/>
        </View>
        <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>이름  </Text>   
       <TouchableOpacity style={[grany_home.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"이름를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.password = text
           setform((data)=> {return{ ...data ,form}})}}/> 
        </View>

        <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>거주지 주소 </Text>        
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"거주지 주소를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.address = text
           setform((data)=> {return{ ...data ,form}})}}/> 
        </View>
        <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>휴대폰 번호 </Text>        
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput placeholder={"거주지 주소를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.address = text
           setform((data)=> {return{ ...data ,form}})}}/> */}
                       <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=> Alert.alert(JSON.stringify(form))}>

<Text  style={[grany_home.flex_blue_btn_text]}>가입하기</Text>
            </TouchableOpacity>
        </View> 
         </View>
         </ScrollView>
         </SafeAreaView>
    </>)
}

export default SiteUp;