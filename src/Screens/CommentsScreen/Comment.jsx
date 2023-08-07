import React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

// import { selectUser } from '../redux/auth/selectors';
import { commonStyle } from '../../styles/commonStyles';
const avatar = require('../../../images/user-photo.webp');

function Comment({ data }) {
  const { date, text } = data;
  // const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.commentContainer,
          {
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: commonStyle.colorWhite,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
    overflow: 'hidden',
    resizeMode: 'cover',
    backgroundColor: commonStyle.color.bgGray,
  },
  commentContainer: {
    width: 299,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  text: {
    marginBottom: 8,
    ...commonStyle.fonts,
    fontSize: 13,
    lineHeight: 18,
    color: commonStyle.color.text,
  },
  date: {
    ...commonStyle.fonts,
    fontSize: 10,
    color: commonStyle.color.bgGray,
    textAlign: 'right',
  },
});

export default Comment;
