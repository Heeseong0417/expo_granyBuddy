import { SafeAreaProvider } from "react-native-safe-area-context"
import {View,Text} from "react-native-animatable"
import { styles_test,grany_home } from "../style/Styles"
import {Header_create} from "../header/Header"
import Slide_user from "../screen/Slide_user"
import cdfd from "../assets/images/flower-.jpg"
import { StyleSheet } from "react-native"
import { SectionGrid } from 'react-native-super-grid';
import React from "react"
import Griditems from "../screen/Griditems"
import Grid_1row from "../screen/Grid_1row"
import Find_buddy from "../screen/Find_buddy"
const Grany_main =({navigation}:any)=>{
const back =()=>{
navigation.goBack()
}
const img = "../assets/images/flower-.jpg"
const img2 = "../assets/images/daisy.jpg"
const pic_arr = [[require(img),require(img2)],["user1","user2"]]
const [items_1, setItems_1] = React.useState([
    {name:"주의 항목",value:"1"},
    {name:"위험 항목",value:"0"},
    {name:"다음 검진",value:["10/14","3:00PM"]},
    {name:"남은 검진",value:"12"},
   
   ]);
const [items, setItems] = React.useState([
   {name:"혈당",value:"142",unit:"mg"},
   {name:"혈압",value:["139","80"],unit:""},
   {name:"체온",value:"36.6",unit:"℃"},
   {name:"체중",value:"67",unit:"kg"},
   {name:"호흡",value:"정상"},
   {name:"남은 검진",value:["10","12"]}
  ]);
    return(<>
  
        <Header_create name={"HOME"} nav={back}/>
   <View style={{flex:1}}>
    <Slide_user pic_path={pic_arr} />
    
    <View style={[{flex:3}]}>
      <Grid_1row list_item={items_1}/>    
    <Griditems list_item={items}/>
    </View> 
    <Find_buddy/>
 </View>
    </>)
}


export default Grany_main