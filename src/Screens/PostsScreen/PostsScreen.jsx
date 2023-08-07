import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Text, Image, View, StyleSheet } from 'react-native';

import { commonStyle } from '../../styles/commonStyles';

const avatar = require('../../../images/user-photo.webp');

export default function PostsScreen({ route }) {
  const navigation = useNavigation();
  console.log('route.params', route.params);

  // postPhotoUri, postPhotoName, postAddress, postLocation
  let photo = null;
  let location = null;
  let title = null;
  let place = null;

  if (route.params && route.params.postPhotoUri) {
    photo = route.params.postPhotoUri;
  }

  if (route.params && route.params.postPhotoName) {
    title = route.params.postPhotoName;
  }

  if (route.params && route.params.postLocation) {
    location = route.params.postLocation;
  }

  if (route.params && route.params.postAddress) {
    place = route.params.postAddress;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image source={avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova PostScreen</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      {route.params && (
        <View style={styles.post}>
          <Image source={{ uri: photo }} style={styles.postPhoto} />
          <Text style={styles.title}>{title}</Text>

          <View style={styles.postDataContainer}>
            <Feather
              name="message-circle"
              size={24}
              color={commonStyle.color.accent}
              style={{ marginRight: 6 }}
              onPress={() => {
                navigation.navigate('Comments', { photo });
              }}
            />
            <Text style={[styles.text, { marginRight: 24 }]}>
              {/* {comments.length} */}
              {8}
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Feather
                name="thumbs-up"
                size={24}
                color={commonStyle.color.accent}
                style={{ marginRight: 6 }}
                // onPress={() => {
                //   if (user.id !== idUser) {
                //     dispatch(addLike({ idPost: id, idUser: user.id }));
                //   }
                // }}
              />
              <Text>
                {/* {likes.length} */}
                {3}
              </Text>
            </View>

            <Feather
              name="map-pin"
              size={24}
              color={commonStyle.color.bgGray}
              style={{ marginLeft: 'auto', marginRight: 4 }}
              // onPress={() => {
              //   navigation.navigate('Map', { title, place, coords });
              // }}
            />
            <Text
              style={[
                styles.text,
                { textDecorationLine: 'underline', textDecorationStyle: 'solid' },
              ]}
            >
              {place}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: 'Roboto',
    color: '#212121',
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontFamily: 'Roboto',
    color: '#212121CC',
    fontSize: 11,
    lineHeight: 13,
  },

  // ======================================================

  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,

    resizeMode: 'cover',
    marginBottom: 8,
  },

  title: {
    marginBottom: 8,
    ...commonStyle.fonts,
    // fontFamily: 'Roboto-500',
  },

  postDataContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  text: { ...commonStyle.fonts },
});
