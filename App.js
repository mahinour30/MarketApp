import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './Screens/SplashScreen';
import Onboarding1 from './Screens/Onboarding1';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Home from './Screens/Home';
import Menu from './Screens/Menu';
import Order from './Screens/Order';


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
   <Tab.Navigator>
    <Tab.Screen name="SplashScreen" component={SplashScreen} />
    <Tab.Screen name="Onboarding1" component={Onboarding1} />
    <Tab.Screen name="Onboarding2" component={Onboarding2} />
    <Tab.Screen name="Onboarding3" component={Onboarding3} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Order" component={Order} />
   </Tab.Navigator>


    </NavigationContainer> 
  );
};

export default App;
