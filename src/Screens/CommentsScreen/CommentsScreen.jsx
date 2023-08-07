import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Comment from './Comment';
import { commonStyle } from '../../styles/commonStyles';

function CommentsScreen({ route }) {
  const comments = [
    {
      data: '09 червня, 2020 | 08:40',
      text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    },
    {
      data: '09 червня, 2020 | 09:14',
      text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    },
  ];

  const { photo } = route.params;
  const [comment, setComment] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingViewStyles}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.backgroundPhoto} />
        <View style={styles.comments}>
          {comments.map((item, index) => (
            <Comment key={index} data={item} />
          ))}
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          width: '100%',
        }}
      >
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Коментувати..."
          placeholderTextColor={{
            color: commonStyle.color.bgGray,
          }}
          style={styles.input}
          multiline={true}
        />
        <Ionicons
          name="arrow-up-circle"
          size={34}
          color={commonStyle.color.accent}
          style={styles.arrowUpButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingViewStyles: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyle.color.text,
    backgroundColor: commonStyle.color.bgWhite,
  },

  backgroundPhoto: {
    width: '100%',
    height: 240,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 32,
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'cover',
    flex: 1,
  },
  comments: {
    flex: 1,
    marginBottom: 32,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 16,
    color: commonStyle.color.Text,
    fontFamily: 'Roboto',
    // fontWeight: 500,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    borderColor: commonStyle.color.Gray,
    borderWidth: 1,
  },
  arrowUpButton: { position: 'absolute', bottom: 8, right: 24 },
});

export default CommentsScreen;
