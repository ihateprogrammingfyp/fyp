import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyB2fVqALaSOFNgLOpKnZUuPoj4bM5fQFEE',
  authDomain: 'sheride-fyp.firebaseapp.com',
  databaseURL: 'https://sheride-fyp-default-rtdb.firebaseio.com/',
  projectId: 'sheride-fyp',
  storageBucket: 'sheride-fyp.appspot.com',
  messagingSenderId: '296489899854',
  appId: '1:296489899854:android:e5d989ac8475b80bd9f01f',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export default firebase;
