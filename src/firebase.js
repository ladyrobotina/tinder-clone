import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTUx82IkEw06iPuTqZj_8_GuRWCc_95PU",
    authDomain: "tinder-clone-551b6.firebaseapp.com",
    projectId: "tinder-clone-551b6",
    storageBucket: "tinder-clone-551b6.appspot.com",
    messagingSenderId: "481672712332",
    appId: "1:481672712332:web:ed0c84239998517f212ba9",
    measurementId: "G-147XFCCWVF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;