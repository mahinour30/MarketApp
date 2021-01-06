import React from 'react';
import {View, Image} from 'react-native';
import { images, COLORS } from '../constants'

const SplashScreen = () => {
  return (
    <View style ={{ flex:1, backgroundColor :COLORS.primary}}>
      <View style ={{ flexDirection:'row', flex:1, backgroundColor :COLORS.primary, alignSelf:'center'}}>
      <Image style ={{ flexDirection:'column', alignSelf:'center'}}
      source={images.FM}
      resizeMode='contain'
      />
      </View>
      
    </View>
  );
};

export default SplashScreen;
