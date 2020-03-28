import * as firebase from 'firebase/app';
import 'firebase/auth';

if (process.env.NODE_ENV === 'development') {
  const fbDevelopmentConfig = {
  };

  firebase.initializeApp(fbDevelopmentConfig);
} else {
  // Production config fetched from reserved namespace in fb hosting
  fetch('/__/firebase/init.json').then(async (response) => {
    firebase.initializeApp(await response.json());
  });
}
