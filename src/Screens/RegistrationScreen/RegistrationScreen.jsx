import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const INIT_STATE = {
  login: '',
  email: '',
  password: '',
  focusedInput: null,
  showPassword: false,
};

export const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState(INIT_STATE.login);
  const [email, setEmail] = useState(INIT_STATE.email);
  const [password, setPassword] = useState(INIT_STATE.password);
  const [focusedInput, setFocusedInput] = useState(INIT_STATE.focusedInput);
  const [showPassword, setShowPassword] = useState(INIT_STATE.showPassword);

  const handlLogin = (text) => {
    setLogin(text);
  };

  const handlEmail = (text) => {
    setEmail(text);
  };

  const handlPassword = (text) => {
    setPassword(text);
  };

  const onLogin = () => {
    if (!login || !email || !password) {
      console.debug('Fill in all fields');
      alert('Fill in all fields');
      return;
    }
    console.debug(
      'Credentials:',
      `login: ${login}, email: ${email}, password: ${password}`
    );
    Alert.alert(
      'Credentials:',
      `login: ${login}, email: ${email}, password: ${password}`
    );

    setLogin('');
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };
  const handleShowPassword = () => {
    if (!password) {
      console.debug('Enter password');
      alert('Enter password');
      return;
    }

    setShowPassword(!showPassword);
  };

  const relativePathImages = '../../../assets/images/';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bgImageContainer}>
        <StatusBar style="auto" />
        <ImageBackground
          // source={{ uri: 'https://reactjs.org/logo-og.png' }}
          source={require(`${relativePathImages}bg-img.webp`)}
          style={styles.bgImage}
        >
          <View style={styles.regFormContainer}>
            {/* registrationAddAvatarWrapper */}
            <View
              style={{
                ...styles.registrationAddAvatarWrapper,
                ...styles.registrationDelAvatarWrapper, // step 1/3 закоментувати для варіанту "додати аватар"
              }}
            >
              {/* step 2/3 закоментувати Image для варіанту "додати аватар" */}
              <Image
                source={require(`${relativePathImages}user-photo.webp`)}
                style={styles.avatar}
              />
              <AntDesign
                name="pluscircleo"
                size={25}
                style={{
                  ...styles.iconAddAvatar,
                  ...styles.iconDelAvatar, // step 3/3 закоментувати для варіанту "додати аватар"
                }}
              />
            </View>
            <Text style={styles.regFormTitle}>реєстрація</Text>

            <View style={styles.inputsContainer}>
              {/* О. Собчук: сенс KeyboardAvoidingView в тому, щоб було видно інпут при фокусі */}
              <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              >
                <View style={styles.inputsWraper}>
                  <TextInput
                    name="login"
                    placeholder="Логін"
                    value={login}
                    onChangeText={handlLogin}
                    style={{
                      ...styles.input,
                      borderColor:
                        focusedInput === 'login' ? '#FF6C00' : '#E8E8E8',
                    }}
                    onFocus={() => {
                      setFocusedInput('login');
                    }}
                    onBlur={() => {
                      setFocusedInput(null);
                    }}
                  />
                  <TextInput
                    name="email"
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={handlEmail}
                    keyboardType="email-address"
                    style={{
                      ...styles.input,
                      borderColor:
                        focusedInput === 'email' ? '#FF6C00' : '#E8E8E8',
                    }}
                    onFocus={() => {
                      setFocusedInput('email');
                    }}
                    onBlur={() => {
                      setFocusedInput(null);
                    }}
                  />

                  <View>
                    <TextInput
                      name="password"
                      placeholder="Пароль"
                      // =======================
                      secureTextEntry={showPassword}
                      // ========================
                      value={password}
                      onChangeText={handlPassword}
                      style={{
                        ...styles.input,
                        borderColor:
                          focusedInput === 'password' ? '#FF6C00' : '#E8E8E8',
                      }}
                      onFocus={() => {
                        setFocusedInput('password');
                      }}
                      onBlur={() => {
                        setFocusedInput(null);
                      }}
                    ></TextInput>
                    <Pressable
                      title=""
                      onPress={handleShowPassword}
                      style={styles.textShowWraper}
                    >
                      <Text style={styles.textShow}>
                        {showPassword ? 'Показати' : 'Сховати'}
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <Pressable title="" onPress={onLogin} style={styles.button}>
                  <Text style={styles.textButton}>Зареєструватися</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </View>

            <Pressable
              title=""
              onPress={() => navigation.navigate('LoginScreen')}
              style={styles.textEnterWraper}
            >
              <Text style={styles.textEnter}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // justifyContent: 'flex-end',
    // resizeMode: 'cover',
    // alignItems: 'center',
  },

  regFormContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,

    paddingLeft: 16,
    paddingRight: 16,

    width: '100%',
    height: '67%',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
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

  regFormTitle: {
    // задати обгортці registrationAddAvatarWrapper position "absolute", тоді спрацює marginTop: 92!!!
    marginTop: 92,
    marginBottom: 32,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    textTransform: 'capitalize',
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,

    color: '#212121',
  },

  inputsContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',

    width: 343,
  },

  inputsWraper: {
    display: 'flex',
    rowGap: 16,
  },

  input: {
    paddingLeft: 16,

    height: 50,

    /* Gray/01 */
    backgroundColor: '#F6F6F6',
    // backgroundColor: 'blue',

    /* Gray/02 */
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    // /* identical to box height */

    // /* Gray/03 */
    color: '#212121',
    textDecorationLine: 'none',
  },

  textShowWraper: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    transform: [{ translateY: -(50 - 16) / 2 }],
  },

  textShow: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */

    textAlign: 'center',

    color: '#1B4371',
  },

  button: {
    marginTop: 43,

    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,

    backgroundColor: '#FF6C00',
  },

  textButton: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: '#FFFFFF',
  },

  textEnterWraper: { marginTop: 16 },

  textEnter: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */

    textAlign: 'center',

    color: '#1B4371',
  },
});
