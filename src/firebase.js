import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcxPAbcbasI-yljUKZX4ZbsJp80u4vQQc",
    authDomain: "fb-messenger-clone-bae47.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-bae47.firebaseio.com",
    projectId: "fb-messenger-clone-bae47",
    storageBucket: "fb-messenger-clone-bae47.appspot.com",
    messagingSenderId: "442038032445",
    appId: "1:442038032445:web:e2c89b357e69f795e8b254",
    measurementId: "G-0PHPDLLJPN"
  
})

const db = firebaseApp.firestore();

export default db;