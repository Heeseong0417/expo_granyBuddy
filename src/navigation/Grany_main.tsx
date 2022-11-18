import { SafeAreaProvider } from "react-native-safe-area-context"
import {View,Text} from "react-native-animatable"
import { styles_test,grany_home } from "../style/Styles"
import {Header_create} from "../header/Header"
import Slide_user from "../screen/Slide_user"
import cdfd from "../assets/images/flower-.jpg"
const Grany_main =({navigation}:any)=>{
const back =()=>{
navigation.goBack()
}
const img = "../assets/images/flower-.jpg"
const img2 = "../assets/images/daisy.jpg"
const pic_arr = [[require(img),require(img2)],["user1","user2"]]

    return(<>
    <SafeAreaProvider>
        <Header_create name={"HOME"} nav={back}/>
   <View style={[grany_home.main_con]}>
    <Slide_user pic_path={pic_arr} />
    <View style={[grany_home.main_box,grany_home.main_shadow]}>

    </View>
    
    </View>     



    </SafeAreaProvider>
    </>)
}

export default Grany_main