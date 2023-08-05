import { useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostsScreen() {
  // const dispatch = useDispatch();
  const navigation = useNavigation();

  // const [location, setLocation] = useState('');

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [locationName, setLocationName] = useState('');

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleMakePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPhotoUri(uri);
    }
  };

  const handlePostPhoto = () => {
    // записати через dispatch photo, location, name ...
    navigation.navigate('HomeScreen', { screen: 'Публікації' });
    clearDataFields();
  };

  const clearDataFields = () => {
    setPhotoUri(null);
    setPhotoName('');
    setLocationName('');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            {!isShowKeyboard && (
              <View>
                <View style={styles.imageBackground}>
                  <TouchableOpacity onPress={handleMakePhoto}>
                    <View style={styles.photoIconWrap}>
                      <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Завантажте фото</Text>
              </View>
            )}

            <TextInput
              placeholder="Назва..."
              placeholderTextColor={'#BDBDBD'}
              value={photoName}
              onChangeText={(value) => setPhotoName(value)}
              onFocus={() => {
                setIsShowKeyboard(true);
                setIsNameFocus(true);
              }}
              onBlur={() => setIsNameFocus(false)}
              style={{
                ...styles.input,
                borderBottomColor: isNameFocus ? '#ff6c00' : '#e8e8e8',
                marginTop: 30,
              }}
            />
            <View>
              <Feather
                name="map-pin"
                size={24}
                color="black"
                style={{
                  ...styles.locationIcon,
                  color: isLocationFocus ? '#ff6c00' : '#BDBDBD',
                }}
              />
              <TextInput
                value={locationName}
                onChangeText={(value) => setLocationName(value)}
                placeholder="Місцевість..."
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsLocationFocus(true);
                }}
                onBlur={() => setIsLocationFocus(false)}
                style={{
                  ...styles.input,
                  borderBottomColor: isLocationFocus ? '#ff6c00' : '#e8e8e8',
                  marginTop: 30,
                  paddingLeft: 25,
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              // disabled={photoUri !== null && photoName !== '' && locationName !== '' ? false : true}
              onPress={handlePostPhoto}
            >
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>

            <View style={styles.trashIconWrap}>
              <Pressable style={styles.trashButton}>
                <Feather name="trash-2" size={24} color="#BDBDBD" />
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 28,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoIconWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  text: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#BDBDBD',
    // lineHeight: 19,
  },

  input: {
    paddingBottom: 16,
    paddingTop: 16,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    fontSize: 16,
    fontFamily: 'Roboto',
  },

  locationIcon: {
    position: 'absolute',
    bottom: (50 - 16) / 2,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    fontFamily: 'Roboto',
    color: '#BDBDBD',
    fontSize: 16,
  },

  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  trashIconWrap: {
    alignItems: 'center',
    marginTop: 100,
  },
});
