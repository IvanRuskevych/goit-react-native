import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PostsScreen from '../PostsScreen/PostsScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const screenOptionsNavigator = ({ route }) => ({
  tabBarShowLabel: false,
  tabBarStyle: { height: 80 },
  tabBarActiveTintColor: '#FF6C00',
  tabBarInactiveTintColor: '#212121CC',

  tabBarIcon: ({ focused, color, size }) => {
    console.log('route', route);
    let iconName;
    if (route.name === 'PostsScreen') {
      iconName = focused ? 'grid' : 'grid';
    }
    // else if (route.name === 'Settings') {
    //   iconName = focused ? 'ios-list' : 'ios-list-outline';
    // }
    console.log('size->', size);
    // console.log('color->', color);
    return <Feather name={iconName} size={size} color={color} />;
  },
});

const optionsPostsScreen = {
  headerRight: () => (
    <TouchableOpacity onPress={() => navigate('LoginScreen')}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  ),
};

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <Tabs.Navigator screenOptions={screenOptionsNavigator}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={
          (optionsPostsScreen,
          {
            title: 'Публікації',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#212121',
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 22,
              letterSpacing: -0.408,
            },
          })
        }
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.5}
                onPress={() => navigate('CreatePostsScreen')}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            );
          },
          headerShown: false,
          tabBarStyle: { display: 'none' },
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
