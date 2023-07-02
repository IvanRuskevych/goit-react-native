import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PostsScreen from '../PostsScreen/PostsScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tabs = createBottomTabNavigator();

const optionsNavigator = ({ route }) => ({
  headerTitleStyle: styles.headerTitle,
  headerTitleAlign: 'center',
  headerStyle: styles.header,

  tabBarShowLabel: false,
  tabBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 83,
    borderTopWidth: 1,
    borderTopColor: '#BDBDBD',
  },
  tabBarActiveTintColor: '#FF6C00',
  tabBarInactiveTintColor: '#212121CC',

  tabBarIcon: ({ focused, size, color }) => {
    let iconName;
    if (route.name === 'Публікації') {
      iconName = focused ? 'grid' : 'grid';
    }
    // else if (route.name === 'Settings') {
    //   iconName = focused ? 'ios-list' : 'ios-list-outline';
    // }
    return <Feather name={iconName} size={size} color={color} />;
  },
  // headerRight: () => (
  //   <Pressable
  //     onPress={() => navigate('LoginScreen')}
  //     style={{ marginRight: 16 }}
  //   >
  //     <Feather name="log-out" size={24} color="#BDBDBD" />
  //   </Pressable>
  // ),
});

const optionsPostsScreen = {
  headerRight: () => (
    <TouchableOpacity
      onPress={() => navigate('LoginScreen')}
      style={{ marginRight: 16 }}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  ),
};

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Публікації"
      screenOptions={optionsNavigator}
    >
      <Tabs.Screen
        name="Публікації" // дає назву
        component={PostsScreen}
        options={optionsPostsScreen}
      />
      <Tabs.Screen
        // name="CreatePostsScreen"
        name="Створити публікацію"
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

  header: {
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  headerTitle: {
    // color: '#212121',
    // fontFamily: 'Roboto-Medium',
    // fontSize: 17,
    color: '#212121',
    fontSize: 17,
    fontFamily: 'Roboto',
    // textAlign: 'center',
    // fontStyle: 'normal',
    // fontWeight: 500,
    // lineHeight: 22,
    // letterSpacing: -0.408,
  },
  plusIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
