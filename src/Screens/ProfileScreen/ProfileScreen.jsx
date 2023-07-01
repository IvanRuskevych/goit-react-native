import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from '../../components/Post/Post';
// import data from "../../Source/PostsData";
// import Post from "../../Elements/Post/Post";

const backgroundImage = require('../../../assets/images/bg-img.webp');
const avatar = require('../../../assets/images/user-photo.webp');
const postImage = require('../../../assets/images/Forest.png');

// const BottomTabsProf = createBottomTabNavigator();

const data = [
  {
    id: '1',
    name: 'Forest',
    location: "Ivano-Frankivs'k Region, Ukraine",
    messages: 10,
  },
  {
    id: '2',
    name: 'Black Sea Sunset',
    location: 'Ukraine',
    messages: 20,
  },
  {
    id: '3',
    name: 'Venecia old house',
    location: 'Italy',
    messages: 30,
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
        >
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={styles.photoContainer}>
                <ImageBackground
                  source={avatar}
                  style={{ width: '100%', height: '100%' }}
                ></ImageBackground>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                  <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('HomeScreen', { screen: 'PostsScreen' })
                }
              >
                <Feather name="log-out" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.title}>Natali Romanova</Text>
              {data.map((element) => (
                <Post
                  key={element.id}
                  img={postImage}
                  text={element.name}
                  messages={element.messages}
                  location={element.location}
                />
              ))}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  //   scrollContainer: {
  //     justifyContent: "flex-start",
  //     alignItems: "center",
  //     width: "100%",
  //     backgroundColor: "#FFFFFF",
  //     borderTopRightRadius: 25,
  //     borderTopLeftRadius: 25,
  //   },
  logoutButton: {
    marginLeft: 350,
    marginTop: -40,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 200,
  },
  //   containerKeyB: {
  //     justifyContent: "flex-end",
  //   },
  photoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    overflow: 'visible',
  },

  addButton: {
    marginTop: -40,
    left: '90%',
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  //   addButton: {
  //     backgroundColor: "#FF6C00",
  //     height: 40,
  //     width: 70,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 20,
  //   },
  title: {
    fontWeight: '500',
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  //   inputLogin: {
  //     backgroundColor: "#F6F6F6",
  //     width: 343,
  //     height: 50,
  //     borderRadius: 8,
  //     marginTop: 33,
  //     padding: 16,
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   inputMailPassw: {
  //     backgroundColor: "#F6F6F6",
  //     width: 343,
  //     height: 50,
  //     borderRadius: 8,
  //     padding: 16,
  //     marginTop: 16,
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: 16,
  //     position: "relative",
  //   },
  //   passwShowText: {
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   passwShow: {
  //     top: -34,
  //     left: 130,
  //   },
  //   registerButton: {
  //     backgroundColor: "#FF6C00",
  //     height: 50,
  //     width: 343,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 100,
  //     marginTop: 44,
  //   },
  //   registerButtonText: {
  //     color: "#fff",
  //     fontWeight: "400",
  //   },
  //   loginLink: {
  //     marginTop: 16,
  //     marginBottom: 66,
  //   },
  //   loginLinkText: {
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
});

export default ProfileScreen;
