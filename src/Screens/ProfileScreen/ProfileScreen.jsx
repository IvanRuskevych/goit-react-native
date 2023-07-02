import {
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const backgroundImage = require('../../../images/bg-img.webp');
const avatar = require('../../../images/user-photo.webp');

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.contentWrapper}>
        <View
          style={{
            ...styles.registrationAddAvatarWrapper,
            ...styles.registrationDelAvatarWrapper, // step 1/3 закоментувати для варіанту "додати аватар"
          }}
        >
          {/* step 2/3 закоментувати Image для варіанту "додати аватар" */}
          <Image source={avatar} style={styles.avatar} />
          <AntDesign
            name="pluscircleo"
            size={25}
            style={{
              ...styles.iconAddAvatar,
              ...styles.iconDelAvatar, // step 3/3 закоментувати для варіанту "додати аватар"
            }}
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.logOutButton}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </Pressable>
        <Text style={styles.userName}>Natali Romanova</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  backgroundImage: {
    position: 'absolute',
    width: 411,
    zIndex: -1,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60,
  },

  registrationAddAvatarWrapper: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60,

    width: 120,
    height: 120,

    borderRadius: 16,

    backgroundColor: '#F6F6F6',

    // border: 1px solid #000000;
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    // borderColor: 'red',

    shadowColor: 'rgba(0, 0, 0, 1.0)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    elevation: 10,
  },

  registrationDelAvatarWrapper: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60,

    width: 120,
    height: 120,

    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  avatar: {
    borderRadius: 16,
  },

  iconAddAvatar: {
    position: 'absolute',
    right: -(25 / 2),
    bottom: 16,

    backgroundColor: '#FFFFFF',
    borderRadius: 50,

    color: '#FF6C00',
  },

  iconDelAvatar: {
    color: '#BDBDBD',
    transform: [{ rotateZ: '45deg' }],
  },

  userName: {
    fontFamily: 'Roboto',
    color: '#212121',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 32,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  logOutButton: {
    marginLeft: 'auto',
    marginTop: 22,
  },
});
