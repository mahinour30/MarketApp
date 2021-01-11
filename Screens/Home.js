import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
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

    <TouchableOpacity  style={{width:'50%', height:'100%'}}
      onPress={()=>{navigation.navigate('Menu')}}
    >   
         <Image 
            style={{width:'100%', height:SIZES.height*0.26}}
            source={images.Veg1}
            resizeMode='contain' 
            />
            <View style={{flex:1, borderRadius:20, backgroundColor:COLORS.darkGrey, opacity:0.2 ,justifyContent:'center', width:'100%', height:'100%',position:'absolute', zIndex:888}}>

            </View>
            <Text style={{color:COLORS.white, position:'absolute', zIndex:999, bottom:10, left:10,...FONTS.h2}}>Meats</Text>
      </TouchableOpacity>
 
    
    

    <TouchableOpacity style={{width:'50%', height:'100%'}}>
         <Image 
            style={{width:'100%', height:SIZES.height*0.26}}
            source={images.Pasta}
            resizeMode='contain' 
            />
            <View style={{flex:1, borderRadius:18, backgroundColor:COLORS.darkGrey, opacity:0.2, width:'100%', height:'100%',position:'absolute', zIndex:888}}>

            </View>
            <Text style={{color:COLORS.white, position:'absolute', zIndex:999, bottom:10, left:10,...FONTS.h2}}>Sea Food</Text>
    </TouchableOpacity>

      

     </View>

     <View>
       <ImageBackground
       style={{width:'90%', height:SIZES.height*0.16,alignSelf:'center'}}
       source={images.Fruit3}
       resizeMode='contain'
       >

    <Text style={{color:COLORS.black1, position:'absolute', zIndex:999, bottom:40, left:30,...FONTS.h2}}>Lorem ipsum</Text>

       </ImageBackground>
     </View>

     <View style={{flexDirection:'row', paddingVertical:5, paddingHorizontal:20}}>
       
     <TouchableOpacity
       style={{width:'50%', height:'100%'}}
       
       >

         <Image 
            style={{width:'100%', height:SIZES.height*0.26}}
            source={images.Fruit2}
            resizeMode='contain' 
            />
            <View style={{flex:1, borderRadius:18, backgroundColor:COLORS.darkGrey, opacity:0.2, width:'100%', height:'100%',position:'absolute', zIndex:888}}>

            </View>
            <Text style={{color:COLORS.white, position:'absolute', zIndex:999, bottom:10, left:10,...FONTS.h2}}>Fruits</Text>
       </TouchableOpacity>

       
       <TouchableOpacity
       style={{width:'50%', height:'100%'}}
       
       >

         <Image 
            style={{width:'100%', height:SIZES.height*0.26}}
            source={images.Veg1}
            resizeMode='contain' 
            />
            <View style={{flex:1, borderRadius:18, backgroundColor:COLORS.darkGrey, opacity:0.2, width:'100%', height:'100%',position:'absolute', zIndex:888}}>

            </View>
            <Text style={{color:COLORS.white, position:'absolute', zIndex:999, bottom:10, left:10,...FONTS.h2}}>Vegetables</Text>
       </TouchableOpacity>


     </View>

  </ScrollView>     
     
    </View>
  );
};

export default Home;
