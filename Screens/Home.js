import React from 'react';
import {View, Text, Button} from 'react-native';



const Home = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to SplashScreen... again"
        onPress={() => navigation.navigate('SplashScreen')}
        />
        <Button
        title="Go to Onboarding1... again"
        onPress={() => navigation.navigate('Onboarding1')}
        />
        <Button
        title="Go to Onboarding2... again"
        onPress={() => navigation.navigate('Onboarding2')}
        />
        <Button
        title="Go to Onboarding3... again"
        onPress={() => navigation.navigate('Onboarding3')}
        />
        <Button
        title="Go to Menu... again"
        onPress={() => navigation.navigate('Menu')}
        />
        <Button
        title="Go to Order... again"
        onPress={() => navigation.navigate('Order')}
        />
    </View>
  );
};

export default Home;
