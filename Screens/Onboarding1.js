import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../constants'

const Onboarding1 = ({navigation}) => {
  return (
    <View style={{ flex:1, backgroundColor:COLORS.white}}>
      <View style={{ flexDirection:'row', alignSelf:'center', paddingTop:100, paddingBottom:50}}>
        <Image
        style={{alignSelf:'center'}}
        source={images.Cart}
        resizeMode='contain'
        />
      </View>
      <View style={{ flexDirection:'row', alignSelf:'center'}}>
        <Text style={{...FONTS.h4, alignSelf:'center', color:COLORS.secondary}}>
          Lorem ipsum
        </Text>
      </View>

      <View style={{ flexDirection:'row', alignSelf:'center'}}>
        <Text style={{...FONTS.h5, alignSelf:'center', paddingHorizontal:60, paddingVertical:10, justifyContent:'center' , color:COLORS.secondary}}>
          Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        </Text>
      </View>

      <View style={{flexDirection:'row'}}>

      <View style={{paddingTop:55,paddingLeft:173}}>
          <Image
          source={images.First}
          />
        </View>
      <View>

      <TouchableOpacity 
      onPress={()=>navigation.navigate('Onboarding2')}
      style={{ marginStart:101, paddingTop:39, alignSelf:'flex-end'}}>
          <ImageBackground source={images.Circle} 
            style={{height:45, width:45, alignSelf:'flex-end'}}
            >
           
           <View style={{
                flex:1, justifyContent:'center', alignItems:'center',
              }}>
               <Image
                source={icons.Right}
                resizeMode='contain'
               />  
              </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

export default Onboarding1;
