import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import { images, COLORS } from '../constants'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding1')
    }, 2000);
  });
  
  return (
    <View style ={{ flex:1, backgroundColor :COLORS.primary}}>
      <View style ={{ flexDirection:'row', flex:1, alignSelf:'center'}}>
      <Image style ={{ alignSelf:'center'}}
      source={images.FM}
      resizeMode='contain'
      />
      </View>
      
    </View>
  );
};

export default SplashScreen;
