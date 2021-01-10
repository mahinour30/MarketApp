import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {COLORS, FONTS, SIZES, images, icons} from '../constants'

const Onboarding2 = ({navigation}) => {
  return (
    <View style={{ flex:1, backgroundColor:COLORS.white}}>
      <View style={{ flexDirection:'row', alignSelf:'center', paddingTop:150, paddingBottom:65}}>
        <Image
        style={{alignSelf:'center'}}
        source={images.Car}
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
       onPress={()=>navigation.navigate('Onboarding3')}
      style={{ marginEnd:30, paddingTop:38, alignSelf:'flex-end'}}>
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

      <View style={{paddingTop:55, paddingHorizontal:100}}>
          <Image
          source={images.Second}
          />
        </View>

      <View>
      <TouchableOpacity 
       onPress={()=>navigation.navigate('Onboarding1')}
      style={{  paddingTop:38, alignSelf:'flex-end'}}>
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

export default Onboarding2;
