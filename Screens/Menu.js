import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, FlatList, Image, ImageBackground, Alert, TouchableOpacity} from 'react-native';
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
           Meat & Seafood
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
       

  <ScrollView style={{width:'100%', height:SIZES.height*0.04}}
  >
    <View style={{ flex:1, width:SIZES.width/2, height:SIZES.height*0.04, borderBottomColor:COLORS.primary,borderBottomWidth:1}}>
      <Text style={{...FONTS.h8, color:COLORS.black1, alignSelf:'center'}}>
        Meat
      </Text>
    </View>
  
  <ScrollView>
    <View style={{flex:1, width:SIZES.width/2, height:SIZES.width/2, paddingHorizontal:20, justifyContent:'center', alignItems:'center'
      , borderColor:COLORS.lightGrey1, borderBottomWidth:1, borderRightWidth:1
      }}>
      <Image
      source={{uri:'https://gazef.s3.us-west-2.amazonaws.com/task-assets/Mixed-Meat-Small.jpg'}}
      style={{ width: 100, height: 100 , justifyContent:'center', alignSelf:'center'}}
      />
      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flexDirection:'column', flex:1, top:40}}>
        <Text style={{...FONTS.h9, color:COLORS.black1}}>Lorem ipsum</Text>
        <Text style={{...FONTS.h10, color:COLORS.black1}}>1KG</Text>
        <Text style={{...FONTS.h10, color:COLORS.black1}}>EGP 350</Text>
      </View>
      <View 
      style={{backgroundColor:COLORS.lightGrey2, borderRadius:50, width:20, height:20, justifyContent:'center', top:75}}>
          <TouchableOpacity>
            <Image
          source={icons.Add}
          style={{width:10, height:10, alignSelf:'center'}}
          />
            </TouchableOpacity>
        </View>
      </View>
    </View>
    
    </ScrollView>     

  </ScrollView>

  <View style={{width:'100%',height:60, flexDirection:'row',backgroundColor:COLORS.primary}}>
    
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity>
    <Text style={{...FONTS.h8, color:COLORS.white}}>
      Sort by
    </Text>
    </TouchableOpacity>
    </View>
    
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity>
    <Text style={{...FONTS.h8, color:COLORS.white}}>
      Filter
    </Text>  
    </TouchableOpacity>
    </View>
  </View>
     
    </View>
  );
};

export default Menu;
