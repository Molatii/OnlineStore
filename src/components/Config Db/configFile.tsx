import firebase from 'firebase/compat';

// Firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyBlCVSrn4ayWC2MWijgqbsX2EpT2xnvrtw",
    authDomain: "alisterclothing2022.firebaseapp.com",
    projectId: "alisterclothing2022",
    storageBucket: "alisterclothing2022.appspot.com",
    messagingSenderId: "74451738593",
    appId: "1:74451738593:web:4df09e4183656d169e3ca0",
    measurementId: "G-J8TMJ5W7B4"
  };
	
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
