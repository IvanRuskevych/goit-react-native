import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PostsScreen from '../PostsScreen/PostsScreen';
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
    } else if (route.name === 'ProfileScreen') {
      iconName = focused ? 'user' : 'user';
    }
    return <Feather name={iconName} size={size} color={color} />;
  },
});

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  const optionsPostsScreen = {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate('LoginScreen')} style={{ marginRight: 16 }}>
        <Feather name="log-out" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    ),
  };

  const optionsCreatePostsScreen = {
    tabBarIcon: ({ focused, size, color }) => (
      <View style={styles.plusIcon}>
        <Feather name="plus" size={24} color="#FFFFFF" />
      </View>
    ),

    headerLeft: () => (
      <Pressable onPress={() => navigate('Публікації')} style={{ marginLeft: 16 }}>
        <Feather name="arrow-left" size={24} color="#212121CC" />
      </Pressable>
    ),
    tabBarStyle: { display: 'none' },
  };

  return (
    <Tabs.Navigator initialRouteName="Публікації" screenOptions={optionsNavigator}>
      <Tabs.Screen
        // name="PostsScreen"
        name="Публікації" // дає назву
        component={PostsScreen}
        options={optionsPostsScreen}
      />

      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={optionsCreatePostsScreen}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  headerTitle: {
    color: '#212121',
    fontSize: 17,
    fontFamily: 'Roboto',
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
