import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';
import Onboarding1 from './Screens/Onboarding1';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Home from './Screens/Home';
import Menu from './Screens/Menu';
import Order from './Screens/Order';


const Stack = createStackNavigator();


const App = () => {
  return (
  <NavigationContainer>
   <Stack.Navigator 
   screenOptions={{
    headerShown: false
  }}
  initialRouteName="SplashScreen"
  >
   <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Onboarding1" component={Onboarding1} />
    <Stack.Screen name="Onboarding2" component={Onboarding2} />
    <Stack.Screen name="Onboarding3" component={Onboarding3} />
    <Stack.Screen name="Menu" component={Menu} />
    <Stack.Screen name="Order" component={Order} />
   </Stack.Navigator>
  </NavigationContainer> 
  );
};

export default App;
