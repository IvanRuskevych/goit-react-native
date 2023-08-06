import { useState, useEffect } from 'react';

import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

import {
  // useIsFocused,
  useNavigation,
} from '@react-navigation/native';

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
import { Camera } from 'expo-camera';

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [postPhotoUri, setpostPhotoUri] = useState(null); //setPostImg
  const [postPhotoName, setPostPhotoName] = useState('');

  const [postLocation, setPostLocation] = useState(null);
  const [postAddress, setPostAddress] = useState('');

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(false); //   const isFocused = useIsFocused();
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  // Camera & Location permissions
  useEffect(() => {
    setpostPhotoUri(null);
    setPostLocation(null);

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const addPostLocation = async () => {
    const location = await Location.getCurrentPositionAsync();

    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const [address] = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setPostLocation(coords);
    setPostAddress(address.city);
  };

  const makePostPhoto = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);

        setpostPhotoUri(uri);
      } catch (error) {
        console.log('Error-->>', error.message);
      }
    }

    addPostLocation();
  };

  const handlePostPhoto = () => {
    // записати через dispatch photo, location, name ...
    navigation.navigate('HomeScreen', { screen: 'Публікації' });
    clearDataFields();
  };

  const clearDataFields = () => {
    setpostPhotoUri(null);
    setPostPhotoName('');
    setPostAddress('');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            {!isShowKeyboard && (
              <View>
                <View style={styles.imageBackground}>
                  {true ? (
                    // postPhotoUri
                    <TouchableOpacity onPress={makePostPhoto}>
                      <View style={styles.photoIconWrap}>
                        <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <Camera>
                      <TouchableOpacity onPress={makePostPhoto}>
                        <View style={styles.photoIconWrap}>
                          <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                        </View>
                      </TouchableOpacity>
                    </Camera>
                  )}
                </View>
                <Text style={styles.text}>Завантажте фото</Text>
              </View>
            )}

            <TextInput
              placeholder="Назва..."
              placeholderTextColor={'#BDBDBD'}
              value={postPhotoName}
              onChangeText={(value) => setPostPhotoName(value)}
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
                value={postAddress}
                onChangeText={(value) => setPostAddress(value)}
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
              // disabled={photoUri !== null && photoName !== '' && postAddress !== '' ? false : true}
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
