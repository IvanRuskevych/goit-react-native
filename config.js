// Import the functions you need from the SDKs you need

// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_F2l0fuEOUH4XaK1APoFfjBujBpG2lc4',
  authDomain: 'react-native-goit-8e7fb.firebaseapp.com',
  databaseURL: 'https://react-native-goit-8e7fb-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-goit-8e7fb',
  storageBucket: 'react-native-goit-8e7fb.appspot.com',
  messagingSenderId: '715759215534',
  appId: '1:715759215534:web:a0b7246a169be4bbafde3f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
