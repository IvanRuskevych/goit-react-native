import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
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

const INIT_STATE = {
  email: '',
  password: '',
  focusedInput: null,
};

export const LoginScreen = () => {
  const relativePathImages = '../../../assets/images/';

  const [email, setEmail] = useState(INIT_STATE.email);
  const [password, setPassword] = useState(INIT_STATE.password);
  const [focusedInput, setFocusedInput] = useState(INIT_STATE.focusedInput);

  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleShowPassword = () => {
    if (!password) {
      console.debug('Enter password');
      alert('Enter password');
      return;
    }
    console.debug(`You password is: ${password}`);
    alert(`You password is: ${password}`);
  };

  const onLogin = () => {
    if (!email || !password) {
      alert('Fill in all fields');
      return;
    }
    console.debug('Credentials:', `email: ${email}, password: ${password}`);
    Alert.alert('Credentials:', `email: ${email}, password: ${password}`);

    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.bgImageContainer}>
      <StatusBar style="auto" />
      <ImageBackground
        // source={{ uri: 'https://reactjs.org/logo-og.png' }}
        source={require(`${relativePathImages}bg-img.webp`)}
        style={styles.bgImage}
      >
        <View style={styles.regFormContainer}>
          {/* registrationAvatarWrapper */}
          <Text style={styles.regFormTitle}>увійти</Text>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputsContainer}>
              <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              >
                <View style={styles.inputsWraper}>
                  <TextInput
                    name="email"
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={handleEmail}
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

                  <View style={styles.passwordWraper}>
                    <TextInput
                      name="password"
                      placeholder="Пароль"
                      secureTextEntry
                      value={password}
                      onChangeText={handlePassword}
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
                      <Text style={styles.textShow}>Показати</Text>
                    </Pressable>
                  </View>
                </View>

                <Pressable title="" onPress={onLogin} style={styles.button}>
                  <Text style={styles.textButton}>Увійти</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>

          <Pressable
            title=""
            // onPress={onLogin}
            style={styles.textEnterWraper}
          >
            <Text style={styles.textEnter}>Немає акаунту? Зареєструватися</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
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
    height: '60%',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  regFormTitle: {
    marginTop: 32,
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

  passwordWraper: {
    position: 'relative',
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
    position: 'absolute',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */

    /* White */

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
