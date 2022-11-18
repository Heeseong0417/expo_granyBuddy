import {  Dimensions} from "react-native"
import Swiper from "react-native-swiper"
import{View,Text} from 'react-native-animatable'
import {styles_main} from '../../style/Styles'
import { styles_slider } from "../../style/Styles"
import   Icon  from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react"
import axios from "axios"

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const Swiper_ =()=>{
  const [info, setinfo_car] = useState({주민차량 :"0",택배차량:"0",통학차량:"0",택시차량:"0",배달차량:"0" })
  const fetchNews = async () => {
    const data1 = {data: "datDFdata"}
   
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setinfo_car({주민차량 :"0",택배차량:"0",통학차량:"0",택시차량:"0",배달차량:"0" })
     
      
      // loading 상태를 true 로 바꿉니다.
     
        
     
      const response2 = await axios.put(
        'http://1.237.1.88:4500/parking_chart'
      ,data1);
        
      // 데이터는 response.data.data 안에 들어있다.
    
      setinfo_car(value => value ={주민차량 :response2.data[0],택배차량:response2.data[1],통학차량:response2.data[2],택시차량:response2.data[3],배달차량:response2.data[4] })
    } catch (e) {
      console.log(e)
    }
    // loading 끄기
   
  };
  // 첫 렌더링 때 fetchNews() 한 번 실행

 
  useEffect(() => {
    // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트

     
    fetchNews()
    const myInterval = () => {
        setTimeout(() => {
            fetchNews()
            console.log("실행됨")
          myInterval
        }, 3.6e+6)
      }

      myInterval()
  
   

    return ()=>{
        myInterval
    }
  }, [])
  return(<>
      <Swiper style={styles_slider.wrapper} showsButtons={false} dotColor={'gray'} activeDotColor={'#b8b8d2'} autoplay={true}>
<View style={[styles_slider.slide1,{marginBottom:30}]}>
  <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'car'} color={"#5271ff"} size={WINDOW_WIDHT/12} /></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   주민 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>{info.주민차량}</Text>
       </View>
      </View>
     <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'bus-alt'} color={"#5271ff"} size={WINDOW_WIDHT/12} /></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   통학 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>{info.통학차량}</Text>
       </View>

      </View> 
</View>
<View style={[styles_slider.slide1,{marginBottom:30}]}>
  <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'truck'} color={"#5271ff"} size={WINDOW_WIDHT/12} /></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   택배 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>{info.택배차량}</Text>
       </View>
      </View>
     <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'taxi'} color={"#5271ff"} size={WINDOW_WIDHT/12} /></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   택시 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>{info.택시차량}</Text>
       </View>

      </View> 
</View>
<View style={[styles_slider.slide1,{marginBottom:30}]}>
  <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'motorcycle'} color={"#5271ff"} size={WINDOW_WIDHT/12} /></View>
       <View style={[styles_main.main_card_same,{alignItems:"center",padding:20}]}>
        <Text style={[styles_main.main_card_sub]}>{"   배달 차량  "}</Text>
        <Text style={[styles_main.main_card_text]}>{info.배달차량}</Text>
       </View>
      </View>
 

      
</View>       

      </Swiper>
   
  </>)
  }
const asdfd=()=>{


  return(

    <>
    <Swiper style={styles_slider.wrapper} showsButtons={false} dotColor={'gray'} activeDotColor={'#b8b8d2'} autoplay={true}>
       <View style={[styles_main.main_card_divide]}>
      <View style={[styles_main.main_card_same]}><Icon  name={'car'} color={"#5271ff"} size={WINDOW_WIDHT/4} /></View>
       <View style={[styles_main.main_card_same]}><Text style={[styles_main.main_card_text]}>fdfdfdfdfdffd</Text></View>
       </View>
        <View style={[styles_slider.slide1,{alignItems:"center", paddingBottom:10}]}>
        <View style={{justifyContent:"space-around",flexDirection:"row"}} ><Text  style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'car'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   주민 차량 : " }</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text  style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'bus-alt'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   통학 차량 : " }</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text  style={[styles_slider.text,{alignItems:"center",justifyContent:"space-around"}]}><Icon name={'truck'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택배 차량 : " }</Text>
        </View>
        </View>

        <View style={[styles_slider.slide1,{alignItems:"center", paddingBottom:5}]}>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text  style={[styles_slider.text]}><Icon name={'taxi'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택시 차량 : "}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text  style={[styles_slider.text]}><Icon name={'motorcycle'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   배달 차량 : "}</Text></View>
        </View>
      </Swiper>
    </>
  )
}
  export default Swiper_