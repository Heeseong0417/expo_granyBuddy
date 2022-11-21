import {Text,View}from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { grany_home } from "../style/Styles";
import { Image } from "react-native-animatable";
import map from "../assets/map.png"
const Find_buddy =()=>{



    return(
        <>

       
        
      
        <View style={[{flex:1,flexDirection:"row",margin:10,justifyContent:"space-around",alignItems:"center"}]}>
        
        <Text style={[grany_home.flex_b]}>주변에 버디 찾기</Text>
                 <View><Image source={map}/></View>
        
        </View>
        </>
    )
}
export default Find_buddy;