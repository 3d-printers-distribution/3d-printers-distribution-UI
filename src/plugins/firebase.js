import * as firebase from 'firebase/app';
import 'firebase/auth';

if (process.env.NODE_ENV === 'development') {
  const fbDevelopmentConfig = {
    apiKey: 'AIzaSyASv70cPSrXiS796HT1_P96xOvaOwpeMzY',
    authDomain: 'd-printing-dev.firebaseapp.com',
    databaseURL: 'https://d-printing-dev.firebaseio.com',
    projectId: 'd-printing-dev',
    storageBucket: 'd-printing-dev.appspot.com',
    messagingSenderId: '66781649147',
    appId: '1:66781649147:web:eb17f370afda06fd8ab85e',
  };

  firebase.initializeApp(fbDevelopmentConfig);
} else {
  // Production config fetched from reserved namespace in fb hosting
  fetch('/__/firebase/init.json').then(async (response) => {
    firebase.initializeApp(await response.json());
  });
}
