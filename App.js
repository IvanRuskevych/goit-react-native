import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/Screens/Home/HomeScreen';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
// import { Button } from 'react-native';
import CreatePostsScreen from './src/Screens/CreatePostsScreen/CreatePostsScreen';

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
