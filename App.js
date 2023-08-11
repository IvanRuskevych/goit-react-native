import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/Screens/Home/HomeScreen';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
import { commonStyle } from './src/styles/commonStyles';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';
import { Octicons } from '@expo/vector-icons';
import MapScreen from './src/Screens/MapScreen/MapScreen';
// import CreatePostsScreen from './src/Screens/CreatePostsScreen/CreatePostsScreen';

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
          name="CommentsScreen"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: 'Коментарі',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Octicons
                name="arrow-left"
                size={24}
                color={commonStyle.color.text}
                style={{
                  marginLeft: 16,
                  padding: 5,
                }}
                onPress={() => navigation.navigate('Публікації')}
              />
            ),
          })}
        />
        <MainStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
