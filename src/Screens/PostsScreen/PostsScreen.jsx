import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Profile from '../../components/Profile/Profile';
import Post from '../../components/Post/Post';

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

const avatar = require('../../../assets/images/user-photo.webp');
const postImage = require('../../../assets/images/Forest.png');

const PostsScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <ScrollView>
        <Profile
          avatar={avatar}
          name="Natali Romanova"
          email="email@example.com"
        />
        {data.map((element) => (
          <Post
            key={element.id}
            img={postImage}
            text={element.name}
            messages={element.messages}
            location={element.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsScreen;
