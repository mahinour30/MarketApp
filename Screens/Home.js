import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, FlatList, Image, ImageBackground} from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../constants'

const URL = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';


const Home = ({navigation}) => {

  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch(URL)
    .then((response)=> response.json())
    .then((json)=> {
      setData(json)
    })
    .catch((error) => Alert.alert('Error','Something IS Wrong!'))
  }, []);


  console.log("from home ===>", data)

  return (
    <View style={{flex:1, backgroundColor:COLORS.white}}>
     <View style={{backgroundColor:'white', width:'100%', height:SIZES.height*0.08, flexDirection:'row'}}>
       <Image
       source={icons.ListIcon}
       resizeMode='contain'
       style={{width:28, height:14, paddingLeft:95,marginTop:20, marginRight:220}}
       />
        <Image
       source={icons.SearchIcon1}
       resizeMode='contain'
       style={{width:40, height:20, marginTop:20}}
       />
        <Image
       source={icons.ShopingCartIcon1}
       resizeMode='contain'
       style={{width:40, height:20, marginTop:20}}
       />
     </View>

<ScrollView>
<View>
       <ImageBackground
       style={{width:'100%', height:SIZES.height*0.33}}
       source={images.Veg2}
       resizeMode='cover'
       >
         <View>
         <Text style={{...FONTS.h1, color:COLORS.white, paddingTop:55,paddingLeft:50}}>
              20%
            </Text>
            <Text style={{...FONTS.h2, color:COLORS.white, paddingLeft:60}}>
              Discount
            </Text>
         </View>
            
       </ImageBackground>
     </View>


     <View style={{flexDirection:'row', paddingVertical:5, paddingHorizontal:20}}>
     <Image
       style={{width:'50%', height:SIZES.height*0.26}}
       source={images.Veg1}
       resizeMode='contain'
       />
       <Image
       style={{width:'50%', height:SIZES.height*0.26}}
       source={images.Pasta}
       resizeMode='contain'
       />
     </View>

     <View>
       <Image
       style={{width:'90%', height:SIZES.height*0.16,alignSelf:'center'}}
       source={images.Fruit3}
       resizeMode='contain'
       />
     </View>

     <View style={{flexDirection:'row', paddingVertical:5, paddingHorizontal:20}}>
     <Image
       style={{width:'50%', height:SIZES.height*0.26}}
       source={images.Fruit2}
       resizeMode='contain'
       />
       <Image
       style={{width:'50%', height:SIZES.height*0.26}}
       source={images.Fruit1}
       resizeMode='contain'
       />
     </View>

  </ScrollView>     
     
    </View>
  );
};

export default Home;
