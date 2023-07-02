import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import InputComponent from '../../components/InputComponent/InputComponent';
import { TouchableOpacity } from 'react-native';

const INIT_STATE = {
  login: '',
  email: '',
  password: '',
  showPassword: false,
};

export const RegistrationScreen = () => {
  const { navigate } = useNavigation();
  const [login, setLogin] = useState(INIT_STATE.login);
  const [email, setEmail] = useState(INIT_STATE.email);
  const [password, setPassword] = useState(INIT_STATE.password);
  const [showPassword, setShowPassword] = useState(INIT_STATE.showPassword);

  const backgroundImage = require('../../../images/bg-img.webp');
  const avatar = require('../../../images/user-photo.webp');

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

    navigate('HomeScreen');
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bgImageContainer}>
        <StatusBar style="auto" />
        <ImageBackground
          // source={{ uri: 'https://reactjs.org/logo-og.png' }}
          source={backgroundImage}
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
            <Text style={styles.regFormTitle}>реєстрація</Text>

            <View style={styles.inputsContainer}>
              {/* О. Собчук: сенс KeyboardAvoidingView в тому, щоб було видно інпут при фокусі */}
              <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              >
                <View style={styles.inputsWraper}>
                  <InputComponent
                    name="login"
                    placeholder="Логін"
                    value={login}
                    onChangeText={setLogin}
                  />

                  <InputComponent
                    name="email"
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />

                  <View>
                    <InputComponent
                      name="password"
                      placeholder="Пароль"
                      // =======================
                      secureTextEntry={showPassword}
                      // ========================
                      value={password}
                      onChangeText={setPassword}
                    />

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

            <View style={styles.textEnterWraper}>
              <Text style={styles.textEnter}>Вже є акаунт?</Text>
              <TouchableOpacity
                title="Увійти"
                onPress={() => navigate('LoginScreen')}
              >
                <Text style={styles.textEnter}>Увійти</Text>
              </TouchableOpacity>
            </View>
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

  textEnterWraper: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },

  textEnter: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */

    // textAlign: 'center',

    color: '#1B4371',
  },
});
