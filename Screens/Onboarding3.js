import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../constants'

const Onboarding3 = ({navigation}) => {
  return (
    <View style={{ flex:1, backgroundColor:COLORS.white}}>
      <View style={{ flexDirection:'row', alignSelf:'center', paddingTop:150, paddingBottom:50}}>
        <Image
        style={{alignSelf:'center'}}
        source={images.Like}
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

      <View style={{flexDirection:'row-reverse'}}>
      <View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Home')}
      style={{ marginEnd:30, paddingTop:38, alignSelf:'flex-end'}}>
          <ImageBackground source={images.Rectangle} 
            style={{height:45, width:110, alignSelf:'flex-end'}}
            >
           
              <View style={{
                flex:1, justifyContent:'center', alignItems:'center',
              }}>
               <Text style={{...FONTS.h3, color:COLORS.white}}>
                  Get started
                </Text>
              </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Onboarding2')}
      style={{ marginEnd:200, paddingTop:38, alignSelf:'flex-end'}}>
          <ImageBackground source={images.Circle} 
            style={{height:45, width:45, alignSelf:'flex-end'}}
            >
           
              <View style={{
                flex:1, justifyContent:'center', alignItems:'center',
              }}>
               <Image
                source={icons.Left}
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

export default Onboarding3;
