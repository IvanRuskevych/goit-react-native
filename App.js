import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/Screens/Home/HomeScreen';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Start screen' }}
        />
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
