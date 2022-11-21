import Swiper from "react-native-swiper"
import {Text,View,StyleSheet} from  "react-native"
import { grany_home, styles_main, styles_slider } from "../style/Styles";


const UserCarousel =()=>{
    const styles = StyleSheet.create({
        wrapper: {},
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB'
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5'
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9'
        },
        text: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        }
      })
    return(<>
  <Swiper showsButtons={false} paginationStyle={{ bottom: 5 }}>
        <View style={grany_home.main_carousel}>
            <View style={[grany_home.main_car_div]}>

               <View style={grany_home.maim_car_img}>
                <Text>img</Text>
               </View>

               <View style={grany_home.main_car_text}>
                      <Text>김옥순님</Text>    
                    <Text>마지막 체크 : 2022.10.07</Text>
               </View>

            </View>
          
        </View>
        <View style={[styles_slider.slide1,{marginBottom:30}]}>
  <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   주민 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>dfdfddf</Text>
       </View>
      </View>
      </View>
      </Swiper>
    </>)
}

export default UserCarousel;