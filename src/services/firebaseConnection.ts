import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyA-PjzQKE0YUUY2RF0TEjdH3hle9GLJ3EI",
    authDomain: "boardapp-7adf2.firebaseapp.com",
    projectId: "boardapp-7adf2",
    storageBucket: "boardapp-7adf2.appspot.com",
    messagingSenderId: "600462607498",
    appId: "1:600462607498:web:60f01b2fc8bbcab3ac9973",
    measurementId: "G-RB20NDVQWC"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
 