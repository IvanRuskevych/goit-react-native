import { Text, Image, View, StyleSheet } from 'react-native';

const avatar = require('../../../images/user-photo.webp');

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image source={avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova PostScreen</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
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
});
