import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, FlatList, Image, ImageBackground, Alert} from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../constants'

const URL = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';

const Menu = () => {

  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch(URL)
    .then((response)=> response.json())
    .then((json)=> {
      setData(json)
    })
    .catch((error) => Alert.alert('Error','Something IS Wrong!'))
  }, []);

  console.log("from Menu ===>", data)


  return (
    <View style={{flex:1, backgroundColor:COLORS.white}}>
      
      <FlatList style={{flex:1}}
      data={data}
      renderItem={({item})=>{
    return(
        <View style ={{flex:1}}> 
        <ImageBackground
       style={{width:SIZES.width, height:SIZES.height*0.33, flexDirection:'row'}}
       source={images.Meat}
       resizeMode='cover'
       >
         <Image
       source={icons.Left}
       resizeMode='contain'
       style={{width:28, height:14, paddingLeft:95,marginTop:20, marginRight:50}}
       />
       <Text style={{...FONTS.h7, color:COLORS.white, paddingTop:10}}>
           {item.name}
         </Text>
        <Image
       source={icons.SearchIcon2}
       resizeMode='contain'
       style={{width:40, height:20, marginTop:20}}
       />
        <Image
       source={icons.ShopingCartIcon2}
       resizeMode='contain'
       style={{width:40, height:20, marginTop:20}}
       />

            
       </ImageBackground>
     </View>
        )
 }

 }
/>


     

<ScrollView>
<View>
      
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

export default Menu;
