import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCMJzAZ-bktK-InytVxUISJ29cGthUD4YY",
    authDomain: "slack-clone-95124.firebaseapp.com",
    databaseURL: "https://slack-clone-95124.firebaseio.com",
    projectId: "slack-clone-95124",
    storageBucket: "slack-clone-95124.appspot.com",
    messagingSenderId: "612676415942",
    appId: "1:612676415942:web:9e4fcf298e1e8ece"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;