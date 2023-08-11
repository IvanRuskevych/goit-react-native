import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Octicons } from '@expo/vector-icons';

import { HomeScreen } from './src/Screens/Home/HomeScreen';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';
import MapScreen from './src/Screens/MapScreen/MapScreen';

import { commonStyle } from './src/styles/commonStyles';
import { store, persistor } from './src/redux/store';

export default function App() {
  const MainStack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
