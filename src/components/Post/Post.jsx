import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Post = ({ img, text, messages, location }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.postImage}></ImageBackground>
      <Text style={styles.postText}>{text}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoWrap}>
          <Feather name="message-circle" size={24} color="#BDBDBD" />
          <Text style={[styles.info]}>{messages}</Text>
        </View>
        <View style={styles.infoWrap}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={[styles.info, { textDecorationLine: 'underline' }]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: 'flex-start',
    padding: 16,
  },
  postImage: {
    flex: 4,
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  postText: {
    textAlign: 'left',
    marginTop: 8,
    fontWeight: '500',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  infoWrap: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 5,
    // padding: 10,
  },
  info: {
    color: '#212121',
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    // lineHeight: 'normal',
  },
});

export default Post;
