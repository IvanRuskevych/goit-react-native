import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputComponent from '../../components/InputComponent/InputComponent';

const INIT_STATE = {
  email: '',
  password: '',
  hidePassword: true,
};

export const LoginScreen = () => {
  const backgraundImage = require('../../../images/bg-img.webp');
  const { navigate } = useNavigation();

  const [email, setEmail] = useState(INIT_STATE.email);
  const [password, setPassword] = useState(INIT_STATE.password);
  const [hidePassword, setHidePassword] = useState(INIT_STATE.hidePassword);

  const onLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    navigate('HomeScreen');
    setEmail('');
    setPassword('');
    setHidePassword(false);
  };

  const handleTogglePassword = () => {
    if (!password) {
      console.debug('Enter password');
      alert('Enter password');
      return;
    }

    setHidePassword(!hidePassword);
  };

  const handlPassword = (text) => {
    setPassword(text);
    if (text === '') {
      return setHidePassword(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bgImageContainer}>
        <StatusBar style="auto" />
        <ImageBackground
          // source={{ uri: qwe }}
          source={backgraundImage}
          style={styles.bgImage}
        >
          <View style={styles.regFormContainer}>
            <Text style={styles.regFormTitle}>Увійти</Text>

            <View style={styles.inputsContainer}>
              <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={styles.inputsWraper}>
                  <InputComponent
                    name="email"
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />

                  <View style={styles.passwordWraper}>
                    <InputComponent
                      name="password"
                      placeholder="Пароль"
                      value={password}
                      onChangeText={handlPassword}
                      // =======================
                      secureTextEntry={hidePassword}
                      // ========================
                    />

                    <Pressable
                      title=""
                      onPress={handleTogglePassword}
                      style={styles.textShowWraper}
                    >
                      <Text style={styles.textShow}>{hidePassword ? 'Показати' : 'Сховати'}</Text>
                    </Pressable>
                  </View>
                </View>

                <TouchableOpacity title="Увійти" style={styles.button} onPress={onLogin}>
                  <Text style={styles.textButton}>Увійти</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>

            <View style={styles.textEnterWraper}>
              <Text style={styles.textEnter}>Немає акаунту?</Text>
              <TouchableOpacity
                title="Зареєструватися"
                onPress={() => navigate('RegistrationScreen')}
              >
                <Text style={styles.textEnter}>Зареєструватися</Text>
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

    color: '#1B4371',
  },
});
